import { useEffect } from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-yellow-500 selection:text-slate-900 relative">
      
      {/* Background Aurora */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-screen filter blur-[128px] opacity-20"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full mix-blend-screen filter blur-[128px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-10">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors text-sm font-bold group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Voltar para Home
            </Link>
            <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-500">
                    <ShieldCheck className="w-8 h-8" />
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">Política de Privacidade</h1>
            </div>
            <p className="text-slate-400">Última atualização: 06 de dezembro de 2025</p>
        </div>

        {/* Conteúdo */}
        <div className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-8 text-slate-300 leading-relaxed">
                
                <section>
                    <p>A sua privacidade é importante para nós. Esta Política explica como coletamos, utilizamos e protegemos os seus dados ao utilizar o site <span className="text-yellow-500">https://costalinks.com.br</span>.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">1. COLETA DE INFORMAÇÕES</h2>
                    <p className="mb-2 font-bold text-white">1.1. Informações fornecidas pelo usuário</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1 marker:text-green-500">
                        <li>Nome</li>
                        <li>E-mail</li>
                        <li>Qualquer dado inserido voluntariamente em formulários ou campos de contato</li>
                    </ul>
                    <p className="mb-2 font-bold text-white">1.2. Informações coletadas automaticamente</p>
                    <ul className="list-disc pl-5 space-y-1 marker:text-green-500">
                        <li>Endereço IP</li>
                        <li>Tipo de dispositivo</li>
                        <li>Navegador utilizado</li>
                        <li>Cookies (quando aplicável)</li>
                        <li>Dados de navegação e comportamento no site</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">2. USO DAS INFORMAÇÕES</h2>
                    <p className="mb-2">Os dados coletados poderão ser utilizados para:</p>
                    <ul className="list-disc pl-5 space-y-1 marker:text-green-500">
                        <li>Melhorar a experiência do usuário</li>
                        <li>Personalizar conteúdo</li>
                        <li>Enviar comunicações, quando autorizado</li>
                        <li>Garantir segurança e prevenção de fraudes</li>
                        <li>Analisar estatísticas de uso do site</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">3. COOKIES</h2>
                    <p>Utilizamos cookies para melhorar a navegação, lembrar preferências e analisar métricas e tráfego. O usuário pode desativar os cookies no próprio navegador, caso deseje.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">4. COMPARTILHAMENTO DE DADOS</h2>
                    <p className="mb-2">O CostaLinks não vende e não compartilha informações pessoais com terceiros, exceto:</p>
                    <ul className="list-disc pl-5 space-y-1 marker:text-green-500">
                        <li>Quando exigido por lei</li>
                        <li>Com serviços essenciais para funcionamento do site (ex.: hospedagem, análise de tráfego)</li>
                    </ul>
                    <p className="mt-2 text-sm text-slate-400">Esses serviços seguem padrões internacionais de segurança.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">5. SEGURANÇA DOS DADOS</h2>
                    <p>Adotamos boas práticas técnicas e administrativas para proteger seus dados. No entanto, nenhum sistema é 100% seguro, e não podemos garantir proteção absoluta contra ataques externos.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">6. DIREITOS DO USUÁRIO (LGPD)</h2>
                    <p className="mb-2">Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
                    <ul className="list-disc pl-5 space-y-1 marker:text-green-500">
                        <li>Acessar seus dados</li>
                        <li>Solicitar correção</li>
                        <li>Solicitar exclusão</li>
                        <li>Retirar consentimento</li>
                        <li>Solicitar portabilidade</li>
                    </ul>
                    <p className="mt-2">Basta enviar uma mensagem para nosso canal de contato.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">7. RETENÇÃO DOS DADOS</h2>
                    <p>Os dados serão armazenados somente pelo tempo necessário para cumprir as finalidades aqui descritas ou exigências legais.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-3">8. ALTERAÇÕES NA POLÍTICA</h2>
                    <p>Esta Política poderá ser atualizada a qualquer momento. Mudanças importantes serão comunicadas nesta página.</p>
                </section>

                <section className="pt-6 border-t border-white/10">
                    <h2 className="text-xl font-bold text-white mb-3">9. CONTATO PARA PRIVACIDADE</h2>
                    <p>Se tiver alguma dúvida sobre como tratamos seus dados, entre em contato:</p>
                    <a href="mailto:contato.biolinks@costalinks.com.br" className="text-green-500 hover:text-green-400 font-bold mt-2 inline-block transition-colors">
                        📩 contato.biolinks@costalinks.com.br
                    </a>
                </section>

            </div>
        </div>
      </div>
    </div>
  );
}