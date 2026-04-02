// DADOS DE EXEMPLO (Agora com URL para corrigir o erro)
export const DEMO_LINKS_FREE = [
    { title: 'Meu Facebook', url: 'https://facebook.com', icon: 'facebook' },
    { title: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { title: 'Linkedin', url: 'https://linkedin.com', icon: 'linkedin' }
  ];
  
  export const DEMO_LINKS_PRO = [
    { title: 'Oferta Especial (VAP)', url: 'https://google.com', icon: 'star' },
    { title: 'Canal do Youtube', url: 'https://youtube.com', icon: 'youtube' },
    { title: 'Agendar Mentoria', url: 'https://whatsapp.com', icon: 'message-circle' },
    { title: 'Baixar E-book', url: 'https://drive.google.com', icon: 'download' }
  ];
  
  export const TEMPLATES = [
    // --- TEMAS GRATUITOS ---
    {
      id: 'minimal', label: 'Clean Slate', category: 'Minimalista', type: 'free',
      colors: { bg: '#F8FAFC' },
      users: '10k+',
      demoLinks: DEMO_LINKS_FREE,
      config: {
        background_color: '#F8FAFC', title_color: '#0F172A', bio_color: '#64748B',
        button_color: '#FFFFFF', button_text_color: '#0F172A', button_border_color: '#E2E8F0',
        icon_color: '#0F172A', use_gradient: false, font_family: 'Inter',
        button_border_width: '1px', font_size: 'medium', title_font_size: '3xl', bio_font_size: 'base',
        highlight_first_link: false, display_banner: false
      }
    },
    {
      id: 'dark_gold', label: 'Luxury Gold', category: 'Profissional', type: 'free',
      colors: { bg: '#020617' },
      users: '5k+',
      demoLinks: DEMO_LINKS_FREE,
      config: {
        background_color: '#020617', title_color: '#FFFFFF', bio_color: '#94A3B8',
        button_color: '#EAB308', button_text_color: '#000000', button_border_color: 'transparent',
        icon_color: '#000000', use_gradient: true, gradient_from: '#EAB308', gradient_to: '#CA8A04',
        font_family: 'Inter', button_border_width: '0px',
        font_size: 'medium', title_font_size: '4xl', bio_font_size: 'lg',
        highlight_first_link: false, display_banner: false
      }
    },
    {
      id: 'forest', label: 'Forest', category: 'Natureza', type: 'free',
      colors: { bg: '#064E3B' },
      users: '2k+',
      demoLinks: DEMO_LINKS_FREE,
      config: {
        background_color: '#064E3B', 
        title_color: '#ECFDF5',      
        bio_color: '#6EE7B7',       
        button_color: '#047857',    
        button_text_color: '#FFFFFF',
        button_border_color: 'transparent',
        icon_color: '#FFFFFF',
        use_gradient: false,
        font_family: 'Montserrat',
        button_border_width: '0px',
        font_size: 'medium',
        title_font_size: '3xl',
        bio_font_size: 'base',
        highlight_first_link: false, 
        display_banner: false
      }
    },
    {
      id: 'lavender', label: 'Lavender', category: 'Criativo', type: 'free',
      colors: { bg: '#F3E8FF' },
      users: '1k+',
      demoLinks: DEMO_LINKS_FREE,
      config: {
        background_color: '#F3E8FF',
        title_color: '#581C87',      
        bio_color: '#7E22CE',        
        button_color: '#A855F7',     
        button_text_color: '#FFFFFF',
        button_border_color: 'transparent',
        icon_color: '#FFFFFF',
        use_gradient: false,
        font_family: 'Lato',         
        button_border_width: '0px',
        font_size: 'medium',
        title_font_size: '3xl',
        bio_font_size: 'base',
        highlight_first_link: false,
        display_banner: false
      }
    },
  
    // --- TEMAS PREMIUM ---
    {
      id: 'costa_pro', label: 'Costa VAP', category: 'Profissional', type: 'premium',
      colors: { bg: '#020617' },
      users: '2k+',
      demoLinks: DEMO_LINKS_PRO,
      config: {
        background_color: '#020617', title_color: '#FFFFFF', bio_color: '#CBD5E1',
        button_color: '#EAB308', button_text_color: '#FFFFFF', button_border_color: '#EAB308',
        icon_color: '#EAB308', use_gradient: false,
        font_family: 'Inter', button_border_width: '1px',
        font_size: 'medium', title_font_size: '4xl', bio_font_size: 'lg',
        highlight_first_link: true, 
        display_banner: true
      }
    },
    {
    id: 'real-estate-premium',
    label: 'Alto Padrão',
    category: 'Imóveis',
    type: 'premium',
    config: {
      theme_color: 'dark',
      background_color: '#0A192F', // Azul Marinho Profundo
      text_color: '#FFFFFF',
      title_color: '#FFFFFF',
      bio_color: '#94A3B8',
      button_color: '#D4AF37', // Dourado
      button_text_color: '#000000',
      icon_color: '#000000',
      font_family: 'Montserrat',
      title_font_family: 'Playfair Display',
      button_border_color: 'transparent',
      button_border_width: '0px',
      use_gradient: true,
      gradient_from: '#BF953F',
      gradient_to: '#FCF6BA',
      font_size: 'medium',
      title_font_size: '3xl',
      bio_font_size: 'sm',
      display_banner: true,
      banner_style: 'top', // Ou 'expanded' se preferir por padrão
      highlight_first_link: true,
    }
  },
  {
    id: 'law-firm',
    label: 'Advocacia Clássica',
    category: 'Direito',
    type: 'premium',
    config: {
      theme_color: 'dark',
      background_color: '#1A1A1A', // Quase preto
      text_color: '#FFFFFF',
      title_color: '#D4AF37', // Título dourado
      bio_color: '#A3A3A3',
      button_color: 'transparent', // Botões fantasma (borda)
      button_text_color: '#FFFFFF',
      icon_color: '#D4AF37',
      font_family: 'Lora',
      title_font_family: 'Playfair Display',
      button_border_color: '#333333',
      button_border_width: '1px',
      use_gradient: false,
      font_size: 'medium',
      title_font_size: '4xl',
      bio_font_size: 'base',
      display_banner: false,
      highlight_first_link: false,
    }
  },
    {
      id: 'ocean', label: 'Ocean Blue', category: 'Criativo', type: 'premium',
      colors: { bg: '#172554' },
      users: '8k+',
      demoLinks: DEMO_LINKS_PRO,
      config: {
        background_color: '#172554', title_color: '#FFFFFF', bio_color: '#BFDBFE',
        button_color: '#3B82F6', button_text_color: '#FFFFFF', button_border_color: 'transparent',
        icon_color: '#FFFFFF', use_gradient: true, gradient_from: '#3B82F6', gradient_to: '#1D4ED8',
        font_family: 'Roboto', button_border_width: '0px',
        font_size: 'medium', title_font_size: '4xl', bio_font_size: 'base',
        highlight_first_link: true,
        display_banner: true
      }
    },
    {
      id: 'sunset', label: 'Sunset', category: 'Criativo', type: 'premium',
      colors: { bg: '#4C0519' },
      users: '3k+',
      demoLinks: DEMO_LINKS_PRO,
      config: {
        background_color: '#4C0519', title_color: '#FFE4E6', bio_color: '#FDA4AF',
        button_color: '#F43F5E', button_text_color: '#FFFFFF', button_border_color: 'transparent',
        icon_color: '#FFFFFF', use_gradient: true, gradient_from: '#F43F5E', gradient_to: '#E11D48',
        font_family: 'Poppins', button_border_width: '0px',
        font_size: 'medium', title_font_size: '5xl', bio_font_size: 'lg',
        highlight_first_link: false, display_banner: true
      }
    },
    {
      id: 'tech', label: 'Cyber Tech', category: 'Dark', type: 'premium',
      colors: { bg: '#09090b' },
      users: '1k+',
      demoLinks: DEMO_LINKS_PRO,
      config: {
        background_color: '#09090b', title_color: '#22D3EE', bio_color: '#A1A1AA',
        button_color: '#18181B', button_text_color: '#22D3EE', button_border_color: '#22D3EE',
        icon_color: '#22D3EE', use_gradient: false, font_family: 'Montserrat',
        button_border_width: '1px', font_size: 'large', title_font_size: '4xl', bio_font_size: 'base',
        highlight_first_link: false, display_banner: false
      }
    }
  ];