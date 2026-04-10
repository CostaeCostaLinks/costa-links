import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PlayCircle, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

export default function SalesPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#020617] min-h-screen font-sans text-slate-100 selection:bg-yellow-500 selection:text-slate-900">
      
      {/* HEADER MINIMALISTA (Sem menu de navegação para evitar fugas) */}
      <header className="pt-8 pb-4 flex justify-center border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2 font-serif text-2xl font-bold text-white tracking-wider">
          <span className="bg-yellow-500 text-slate-900 px-2 py-0.5 rounded-md">C</span>
          Costa Links
        </div>
      </header>

      {/* 1. PROMESSA E VÍDEO (A Dobra Principal) */}
      <section className="pt-16 pb-20 px-4 relative overflow-hidden">
        {/* Efeito de Luz no Fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            PARE DE PERDER CLIENTES NO INSTAGRAM
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Sua Bio é o seu Cartão de Visitas.<br/>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
              Ela não pode parecer amadora.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Descubra como profissionais de alta performance estão transformando cliques em vendas com páginas de links <b>Premium</b>, feitas em 2 minutos.
          </p>

          {/* ESPAÇO PARA O SEU VÍDEO (VSL) */}
          <div className="w-full max-w-3xl mx-auto aspect-video bg-slate-900 border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden group mb-12 flex items-center justify-center cursor-pointer hover:border-yellow-500/50 transition-colors">
            {/* Imagem de Capa do Vídeo */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
            
            <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors"></div>
            
            {/* Botão Play Falso (Até você colocar o iframe do YouTube/Vimeo) */}
            <div className="w-20 h-20 bg-yellow-500 text-slate-900 rounded-full flex items-center justify-center z-10 shadow-[0_0_50px_rgba(234,179,8,0.4)] group-hover:scale-110 transition-transform">
              <PlayCircle className="w-10 h-10 ml-1" />
            </div>
            <div className="absolute bottom-4 text-white/80 text-sm font-medium z-10 bg-black/50 px-4 py-1 rounded-full backdrop-blur-md">
              Clique para ver como funciona (0:15s)
            </div>
          </div>

          <button 
            onClick={() => navigate('/register')}
            className="w-full sm:w-auto px-12 py-5 bg-yellow-500 text-slate-900 rounded-full font-bold text-xl shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto"
          >
            Quero Criar Minha Página Grátis <ArrowRight className="w-6 h-6" />
          </button>
          <p className="mt-4 text-slate-500 text-sm flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-500" /> Sem necessidade de cartão de crédito.
          </p>
        </div>
      </section>

      {/* 2. O CONTRASTE (Dor vs Solução) */}
      <section className="py-20 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-white leading-tight">
              O seu cliente julga a sua credibilidade em <span className="text-yellow-500">3 segundos.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Usar links genéricos, fundos cinzas e botões sem identidade visual destrói a percepção de valor do seu serviço. 
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0" />
                <span><b>Cores da sua marca:</b> Nada de templates engessados.</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0" />
                <span><b>Destaques Visuais:</b> Direcione a atenção para o link que mais importa.</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0" />
                <span><b>Banners Imersivos:</b> O topo da sua página virando um outdoor.</span>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500/20 blur-[80px] rounded-full"></div>
            {/* Substitua esta imagem pelo print de um perfil lindo criado no seu app */}
            <div className="bg-slate-800 rounded-[2.5rem] border-[6px] border-slate-900 shadow-2xl overflow-hidden aspect-[9/16] max-w-[300px] mx-auto relative z-10 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center px-4">
                     <div className="w-20 h-20 bg-white/10 rounded-full mx-auto backdrop-blur-md mb-4 border border-white/20"></div>
                     <div className="h-4 w-32 bg-white/20 rounded-full mx-auto mb-2"></div>
                     <div className="h-2 w-24 bg-white/10 rounded-full mx-auto mb-8"></div>
                     <div className="space-y-3">
                         <div className="h-12 w-full bg-yellow-500 rounded-full"></div>
                         <div className="h-12 w-full bg-white/10 rounded-full border border-white/20"></div>
                         <div className="h-12 w-full bg-white/10 rounded-full border border-white/20"></div>
                     </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FECHAMENTO E ESCASSEZ */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Dê o próximo passo na sua carreira hoje.
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Junte-se a corretores, advogados e criadores que já abandonaram a amadorismo. É rápido, fácil e não custa nada para começar.
          </p>
          
          <button 
            onClick={() => navigate('/register')}
            className="w-full sm:w-auto px-12 py-5 bg-yellow-500 text-slate-900 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-transform"
          >
            Começar Gratuitamente
          </button>
        </div>
      </section>

      <footer className="py-8 border-t border-white/5 text-center text-slate-600 text-sm">
        <p>© 2025 Costa Links. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}