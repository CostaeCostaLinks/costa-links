// src/pages/admin/LinksPage.tsx
import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/hooks/useAuth';
import { Link as LinkType } from '@/types';
import Input from '@/components/Input';
import { IconSelector, getIconComponent } from '@/components/IconSelector';
import { toast } from 'sonner';
import { Plus, Trash2, Pencil, X, GripVertical, Link as LinkIcon, Copy, ChevronUp, ChevronDown } from 'lucide-react';
import Button from '@/components/Button';
import { useAdminContext } from '@/layouts/AdminLayout';
import { Link as RouterLink } from 'react-router-dom';
import PreviewPhone from '@/components/PreviewPhone';
import OnboardingProgress from '@/components/OnboardingProgress';

export default function LinksPage() {
  const { user } = useAuth();
  const { profile, username, triggerPreviewRefresh } = useAdminContext();
  const [links, setLinks] = useState<LinkType[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isMobile, setIsMobile] = useState(false);
  
  const [newLink, setNewLink] = useState({ title: '', url: '', icon: 'link' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  useEffect(() => {
    if (user) loadLinks();
    
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    window.addEventListener('resize', checkMobile); 
    return () => window.removeEventListener('resize', checkMobile);
  }, [user]);

  const loadLinks = async () => {
    try {
      const { data } = await supabase.from('links').select('*').eq('user_id', user!.id).order('order_index', { ascending: true });
      setLinks(data || []);
    } catch (error) { console.error(error); } finally { setLoading(false); }
  };

  const handleSaveLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLink.title || !newLink.url) return toast.error('Preencha os campos obrigatórios');
    try {
      if (editingId) {
        await supabase.from('links').update(newLink).eq('id', editingId);
        toast.success('Link atualizado!');
      } else {
        await supabase.from('links').insert({ user_id: user!.id, ...newLink, is_active: true, order_index: links.length });
        toast.success('Link criado!');
      }
      resetForm();
      loadLinks();
      triggerPreviewRefresh();
    } catch (error: any) { toast.error(error.message); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Excluir este link?')) return;
    await supabase.from('links').delete().eq('id', id);
    loadLinks();
    triggerPreviewRefresh();
  };

  const startEditing = (link: LinkType) => {
    setNewLink({ title: link.title, url: link.url, icon: link.icon || 'link' });
    setEditingId(link.id);
    setIsFormOpen(true);
    setShowIcons(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setNewLink({ title: '', url: '', icon: 'link' });
    setEditingId(null);
    setIsFormOpen(false);
    setShowIcons(false);
  };

  const copyToClipboard = () => {
    const url = `${window.location.origin}/u/${username}`;
    navigator.clipboard.writeText(url);
    toast.success('Link copiado!');
  };

  // --- REORDENAÇÃO DRAG AND DROP (Computador) ---
  const handleSort = async () => {
    if (dragItem.current === null || dragOverItem.current === null) return;
    if (dragItem.current === dragOverItem.current) return; 

    const _links = [...links];
    const draggedItemContent = _links.splice(dragItem.current, 1)[0];
    _links.splice(dragOverItem.current, 0, draggedItemContent);

    saveNewOrder(_links);
    dragItem.current = null;
    dragOverItem.current = null;
  };

  // --- NOVA FUNÇÃO: REORDENAÇÃO VIA SETAS (Mobile) ---
  const moveLink = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === links.length - 1) return;

    const _links = [...links];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    
    // Inverte as posições no Array
    [_links[index], _links[swapIndex]] = [_links[swapIndex], _links[index]];
    
    saveNewOrder(_links);
  };

  // Função isolada para salvar a ordem no banco para reaproveitarmos
  const saveNewOrder = async (reorderedLinks: LinkType[]) => {
    const updatedLinks = reorderedLinks.map((link, index) => ({ ...link, order_index: index }));
    
    setLinks(updatedLinks);
    triggerPreviewRefresh();

    try {
      await Promise.all(
        updatedLinks.map(link => 
          supabase.from('links').update({ order_index: link.order_index }).eq('id', link.id)
        )
      );
    } catch (error: any) {
      console.error(error);
      toast.error('Erro ao salvar a nova ordem');
      loadLinks(); 
    }
  };

  if (loading) return <div className="text-slate-400 p-8 text-center">Carregando...</div>;
  const publicUrl = `${window.location.origin}/u/${username}`;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-20 w-full max-w-full min-w-0">
      
      <OnboardingProgress profile={profile} linkCount={links.length} />

      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-2 pl-4 flex flex-col sm:flex-row items-center justify-between shadow-2xl shadow-black/20 gap-4 sm:gap-0">
         <div className="flex items-center gap-4 min-w-0 w-full sm:w-auto">
             <div className="p-2.5 bg-yellow-500/10 rounded-full text-yellow-500 shrink-0"><LinkIcon className="w-5 h-5" /></div>
             <div className="flex flex-col min-w-0">
                 <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Seu Link Público</span>
                 <a href={publicUrl} target="_blank" rel="noopener noreferrer" className="text-white font-bold truncate hover:underline text-sm md:text-base">{publicUrl}</a>
             </div>
         </div>
         <button onClick={copyToClipboard} className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-yellow-500/10 sm:ml-2 shrink-0">
             <Copy className="w-4 h-4" /> <span className="hidden sm:inline">Copiar</span> <span className="sm:hidden">Copiar Link</span>
         </button>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start relative w-full">
        
        <div className="space-y-6 min-w-0 w-full">
            
            <div className="flex p-1 bg-slate-900/50 rounded-xl w-full border border-slate-800/50">
                <button className="flex-1 py-3 rounded-lg bg-yellow-500 text-slate-900 font-bold text-sm shadow-lg transition-all">
                    Links
                </button>
                <RouterLink to="/admin/appearance" className="flex-1 py-3 text-center rounded-lg text-slate-400 hover:text-white font-medium text-sm transition-colors hover:bg-slate-800">
                    Aparência
                </RouterLink>
            </div>

            {!isFormOpen && (<button onClick={() => setIsFormOpen(true)} className="w-full py-4 rounded-3xl bg-slate-900 border-2 border-dashed border-slate-800 text-slate-300 font-bold text-lg hover:border-yellow-500 hover:text-yellow-500 shadow-sm flex items-center justify-center gap-2 transition-all group"><Plus className="w-6 h-6 group-hover:scale-110 transition-transform" /> Adicionar Link</button>)}

            {isFormOpen && (
                <div className="glass-card bg-slate-900/80 border border-slate-800 p-6 rounded-3xl animate-in slide-in-from-top-4 min-w-0">
                <div className="flex justify-between items-center mb-6"><h2 className="text-xl font-bold text-white">{editingId ? 'Editar Link' : 'Novo Link'}</h2><button onClick={resetForm} className="text-slate-400 hover:text-white"><X className="w-6 h-6" /></button></div>
                <form onSubmit={handleSaveLink} className="space-y-5">
                    <div className="space-y-4"><Input label="Título" placeholder="Ex: Meu Instagram" value={newLink.title} onChange={(e) => setNewLink({ ...newLink, title: e.target.value })} className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 focus:border-yellow-500" /><Input label="URL" placeholder="https://..." value={newLink.url} onChange={(e) => setNewLink({ ...newLink, url: e.target.value })} className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 focus:border-yellow-500" /></div>
                    <div className="space-y-2"><label className="text-sm font-medium text-slate-400">Ícone</label><div className="border border-slate-800 rounded-xl bg-slate-950 overflow-hidden"><button type="button" onClick={() => setShowIcons(!showIcons)} className="w-full flex items-center justify-between p-3 hover:bg-slate-900 transition-colors"><div className="flex items-center gap-3"><div className="p-2 bg-slate-900 rounded-lg border border-slate-800">{(() => { const Icon = getIconComponent(newLink.icon); return <Icon className="w-5 h-5 text-yellow-500" />; })()}</div><span className="text-sm font-medium text-slate-300 capitalize">{newLink.icon}</span></div><span className="text-xs text-yellow-500 font-bold">{showIcons ? 'Fechar' : 'Escolher'}</span></button>{showIcons && (<div className="p-4 border-t border-slate-800 bg-slate-950"><IconSelector selected={newLink.icon} onSelect={(iconKey) => { setNewLink({ ...newLink, icon: iconKey }); setShowIcons(false); }} /></div>)}</div></div>
                    <Button type="submit" className="w-full bg-yellow-500 text-slate-900 hover:bg-yellow-400 font-bold py-4 rounded-xl mt-4 shadow-lg shadow-yellow-500/20">{editingId ? 'Salvar Alterações' : 'Criar Link'}</Button>
                </form>
                </div>
            )}

            <div className="space-y-3 min-w-0">
                {links.map((link, index) => {
                const Icon = getIconComponent(link.icon || 'link');
                return (
                    <div 
                      key={link.id} 
                      draggable={!isMobile} 
                      onDragStart={() => (dragItem.current = index)}
                      onDragEnter={() => (dragOverItem.current = index)}
                      onDragEnd={handleSort}
                      onDragOver={(e) => e.preventDefault()}
                      className={`group bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow-sm transition-all flex items-center justify-between gap-2 ${!isMobile ? 'cursor-grab active:cursor-grabbing hover:border-yellow-500/50' : ''}`}
                    >
                      <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0 overflow-hidden">
                          
                          {!isMobile && (
                            <div className="text-slate-500 group-hover:text-yellow-500 transition-colors shrink-0">
                              <GripVertical className="w-5 h-5" />
                            </div>
                          )}

                          {/* SETAS DE ORDENAÇÃO PARA MOBILE */}
                          {isMobile && links.length > 1 && (
                            <div className="flex flex-col shrink-0 gap-1 bg-slate-950 border border-slate-800 rounded-lg p-0.5">
                                <button 
                                  onClick={() => moveLink(index, 'up')} 
                                  disabled={index === 0}
                                  className={`p-1 rounded flex items-center justify-center transition-colors ${index === 0 ? 'opacity-20 cursor-not-allowed' : 'active:bg-yellow-500/20 active:text-yellow-500'}`}
                                >
                                  <ChevronUp className="w-4 h-4 text-slate-400" />
                                </button>
                                <div className="h-[1px] w-full bg-slate-800"></div>
                                <button 
                                  onClick={() => moveLink(index, 'down')} 
                                  disabled={index === links.length - 1}
                                  className={`p-1 rounded flex items-center justify-center transition-colors ${index === links.length - 1 ? 'opacity-20 cursor-not-allowed' : 'active:bg-yellow-500/20 active:text-yellow-500'}`}
                                >
                                  <ChevronDown className="w-4 h-4 text-slate-400" />
                                </button>
                            </div>
                          )}

                          <div className="p-2 bg-slate-950 rounded-lg text-yellow-500 border border-slate-800 shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          
                          <div className="flex-1 min-w-0 overflow-hidden">
                            <h3 className="font-bold text-white truncate w-full block text-sm md:text-base">{link.title}</h3>
                            <p className="text-[10px] md:text-xs text-slate-400 truncate w-full block">{link.url}</p>
                          </div>
                      </div>
                      
                      <div className="flex items-center gap-1 shrink-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => startEditing(link)} className="p-2.5 bg-slate-800 md:bg-transparent text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg shrink-0 transition-colors">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(link.id)} className="p-2.5 bg-red-500/10 md:bg-transparent text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg shrink-0 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                      </div>
                    </div>
                );
                })}
            </div>
        </div>

        <div className="hidden lg:block sticky top-8 min-w-0">
            <div className="mockup-phone border-8 border-slate-950 rounded-[3rem] overflow-hidden w-[350px] h-[700px] shadow-2xl bg-slate-950 relative ring-1 ring-slate-800 mx-auto">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-xl z-20"></div>
                {profile && <PreviewPhone profile={profile} links={links} />}
            </div>
        </div>

      </div>
    </div>
  );
}