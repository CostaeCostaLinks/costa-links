import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';
import { buffer } from 'micro';

// 1. Configurações iniciais
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.VITE_SUPABASE_URL, 
  process.env.SUPABASE_SERVICE_ROLE_KEY // Chave especial que pode editar qualquer dado (Cuidado!)
);

// Essa configuração diz para a Vercel não processar o corpo da requisição automaticamente
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  // 2. Verificar se a notificação veio mesmo da Stripe (Segurança)
  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // 3. Reagir aos eventos de pagamento
  switch (event.type) {
    // Evento A: Cliente acabou de pagar no Checkout (Primeira compra)
    case 'checkout.session.completed':
      const session = event.data.object;
      const customerEmail = session.customer_details.email;
      
      // Atualizar o usuário no Supabase
      await liberarAcesso(customerEmail);
      break;

    // Evento B: Renovação de assinatura bem-sucedida (Meses seguintes)
    case 'invoice.payment_succeeded':
      const invoice = event.data.object;
      const email = invoice.customer_email;
      
      await liberarAcesso(email);
      break;
      
    // Evento C: Pagamento falhou ou assinatura cancelada
    case 'customer.subscription.deleted':
       const subscription = event.data.object;
       // Aqui você precisaria buscar o email pelo ID do cliente na Stripe se não vier direto
       // E remover o acesso (is_pro = false)
       break;

    default:
      console.log(`Evento não tratado: ${event.type}`);
  }

  res.json({ received: true });
}

// Função auxiliar para atualizar o Supabase
async function liberarAcesso(email) {
  // Acha o usuário pelo email na tabela profiles (ou users) e muda o plano
  const { data, error } = await supabase
    .from('profiles') // Confirme se sua tabela chama 'profiles'
    .update({ 
        is_pro: true,
        plan: 'premium', 
        updated_at: new Date() 
    })
    .eq('email', email); // Importante: Sua tabela profiles precisa ter uma coluna 'email'

  if (error) {
    console.error('Erro ao atualizar Supabase:', error);
  } else {
    console.log(`Sucesso! Acesso liberado para: ${email}`);
  }
}