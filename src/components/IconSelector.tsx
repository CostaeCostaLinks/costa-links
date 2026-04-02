import { 
  Link, Instagram, Facebook, Linkedin, Twitter, Youtube, 
  MessageCircle, Mail, Globe, Book, BookOpen, GraduationCap, 
  Smartphone, ShoppingCart, PlayCircle, Music, Image, Calendar, 
  MapPin, Download, Star, Heart, Zap, Coffee,
  // --- ÍCONES NOVOS ADICIONADOS AQUI ABAIXO ---
  Home, Building2, Scale, Stethoscope, Briefcase, Camera, Video, FileText, Phone
} from 'lucide-react';

// Mapeamento: Nome do banco de dados -> Componente Visual
export const iconMap: Record<string, any> = {
  link: Link,
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
  whatsapp: MessageCircle,
  phone: Phone, // Novo: Telefone clássico
  mail: Mail,
  website: Globe,
  book: Book,
  bookOpen: BookOpen,
  course: GraduationCap,
  file: FileText, // Novo: Arquivos/Documentos
  kindle: Smartphone,
  store: ShoppingCart,
  video: PlayCircle,
  movie: Video, // Novo: Vídeo/Câmera de vídeo
  audio: Music,
  portfolio: Image,
  camera: Camera, // Novo: Fotografia
  calendar: Calendar,
  location: MapPin,
  download: Download,
  star: Star,
  heart: Heart,
  zap: Zap,
  coffee: Coffee,
  
  // --- ÍCONES DE NICHOS ---
  home: Home, // Imóveis
  building: Building2, // Construtoras/Empresas
  law: Scale, // Direito/Advocacia
  health: Stethoscope, // Saúde/Medicina
  business: Briefcase // Consultoria/Negócios
};

interface IconSelectorProps {
  selected: string;
  onSelect: (iconKey: string) => void;
}

export function IconSelector({ selected, onSelect }: IconSelectorProps) {
  return (
    <div className="grid grid-cols-6 gap-2 p-3 bg-slate-900 border border-slate-700 rounded-xl max-h-48 overflow-y-auto scrollbar-hide">
      {Object.entries(iconMap).map(([key, Icon]) => (
        <button
          key={key}
          type="button"
          onClick={() => onSelect(key)}
          className={`p-2 rounded-lg flex items-center justify-center transition-all ${
            selected === key 
              ? 'bg-yellow-500 text-slate-900 shadow-lg scale-110' 
              : 'text-slate-400 hover:bg-slate-800 hover:text-white'
          }`}
          title={key}
        >
          <Icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  );
}

// Retorna o componente de ícone correspondente ou o ícone de 'Link' como fallback
export function getIconComponent(iconName: string) {
  const Icon = iconMap[iconName] || iconMap['link'];
  return Icon;
}