// src/pages/admin/SettingsPage.tsx
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client'; // Agora com o alias '@/' correto
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const SettingsPage = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('full_name, username, bio, avatar_url')
          .eq('id', user.id)
          .single();

        if (error) throw error;
        if (data) {
          setFullName(data.full_name || '');
          setUsername(data.username || '');
          setBio(data.bio || '');
          setAvatarUrl(data.avatar_url || '');
        }
      }
    } catch (error: any) {
      toast({
        title: 'Erro ao carregar perfil',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile() {
    try {
      setSaving(true);
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) throw new Error('Usuário não autenticado');

      const updates = {
        id: user.id,
        full_name: fullName, // ESTA FOI A ÚNICA LINHA ADICIONADA (O motivo de tudo isso!)
        username,
        bio,
        avatar_url: avatarUrl,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from('profiles').upsert(updates);

      if (error) throw error;

      toast({
        title: 'Perfil atualizado!',
        description: 'Suas informações foram salvas com sucesso.',
      });
    } catch (error: any) {
      toast({
        title: 'Erro ao atualizar perfil',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Configurações do Perfil</h1>
        <p className="text-muted-foreground">
          Gerencie suas informações públicas e configurações de conta.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Informações Públicas</CardTitle>
          <CardDescription>
            Essas informações serão visíveis para qualquer pessoa que visitar sua página.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium">Nome Completo</label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Seu nome"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">Nome de Usuário</label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="seu_usuario"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="bio" className="text-sm font-medium">Bio</label>
            <Textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Conte um pouco sobre você..."
              className="h-24"
            />
          </div>
          <Button onClick={updateProfile} disabled={saving}>
            {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Salvar Alterações
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;