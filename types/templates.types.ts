export interface Feature {
  id: string;
  title: string;
  description?: string;
  icon?: string;
}

export interface AboutUsData {
  subtitle?: string;
  subtitle2?: string;
  title1?: string;
  title2?: string;
  titleHighlight?: string;
  description?: string;
  features: Feature[];
  phone?: string;
  imageMain?: string;
  imageSmall1?: string;
  imageSmall2?: string;
  yearsOfService?: string;
  yearsText?: string;
  button?: {text: string, url: string};
}

export interface HeaderData {
  logo?: string;
  logoAlt?: string;
  contactInfoLeft?: Array<{id: string, icon: string, label: string, value: string}>;
  contactInfoRight?: Array<{id: string, icon: string, label: string, value: string}>;
  navLinksLeft?: Array<{id: string, label: string, url: string, subLinks?: Array<{id: string, label: string, url: string}>}>;
  navLinksRight?: Array<{id: string, label: string, url: string, subLinks?: Array<{id: string, label: string, url: string}>}>;
  contactButton?: {text: string, url: string, icon: string};
}

export interface HeroData {
  badge?: string;
  title1?: string;
  title2?: string;
  titleHighlight?: string;
  description?: string;
  imageMain?: string;
  button1?: {text: string, url: string, icon: string};
  button2?: {text: string, url: string, icon: string};
  features?: Array<{id: string, text: string, icon: string}>;
}

export interface ServicesData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  titleHighlight?: string;
  description?: string;
  button?: {text: string, url: string};
  services: Array<{id: string, title: string, description?: string, image: string, icon?: string, url: string}>;
}

export interface ProcessData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  titleHighlight?: string;
  description?: string;
  steps: Array<{id: string, number: string, title: string, description: string, image: string}>;
}

export interface BrandsData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  titleHighlight?: string;
  description?: string;
  brands: Array<{id: string, name: string, image: string}>;
}

export interface PricingTable {
  id: string;
  title1: string;
  title2?: string;
  subtitle?: string;
  items: Array<{id: string, service: string, price: string}>;
}

export interface PricingData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  description?: string;
  features?: Feature[];
  image?: string;
  tables: PricingTable[];
  noteTitle?: string;
  noteItems?: string[];
}

export interface TestimonialsData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  titleHighlight?: string;
  description?: string;
  bgImage?: string;
  testimonials: Array<{id: string, name: string, role?: string, avatar: string, quote: string, location?: string, rating: number, productImage?: string}>;
}

export interface AchievementData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  titleHighlight?: string;
  title3?: string;
  description?: string;
  bgImage?: string;
  achievements: Array<{id: string, title?: string, count?: string, label?: string, value?: string, icon: string}>;
}

export interface FaqData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  description?: string;
  image?: string;
  faqs: Array<{id: string, question: string, answer: string}>;
}

export interface BookRepairData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  description?: string;
  form: {
    title: string;
    subtitle: string;
    buttonText: string;
    privacyText: string;
  };
  image: string;
  floatingCard: {
    title: string;
    features: string[];
  };
  whyBook: {
    title1: string;
    title2?: string;
    features: Array<{
      id: string;
      title: string;
      description: string;
      icon: string;
    }>;
  };
  assistance: {
    title1: string;
    title2?: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
  };
}

export interface FooterData {
  logo?: string;
  logoAlt?: string;
  brandTitle?: string;
  copyrightText?: string;
  description?: string;
  hoursTitle?: string;
  hoursDays?: string;
  hours: string;
  bgImage?: string;
  socialLinks: Array<{id: string, icon: string, url: string}>;
  quickLinks: Array<{id: string, label: string, url: string}>;
  servicesLinks: Array<{id: string, label: string, url: string}>;
  contactInfo: {address: string, phone: string, email: string};
  instagram?: string[];
  satisfactionTitle?: string;
  satisfactionDesc?: string;
  quickLinksTitle?: string;
  getInTouchTitle?: string;
  callNowText?: string;
  emailReplyText?: string;
  servicesTitle?: string;
  stayConnectedTitle?: string;
  stayConnectedDesc?: string;
  newsletterTitle?: string;
  newsletterDesc?: string;
  badge1?: string;
  badge2?: string;
  badge3?: string;
}

export interface WhyChooseUsData {
  subtitle?: string;
  title1: string;
  titleHighlight?: string;
  title2?: string;
  description?: string;
  features: Array<{
    id: string;
    title: string;
    description: string;
    icon?: string;
  }>;
  button?: {
    text: string;
    url: string;
  };
  image: string;
  stats?: {
    count: string;
    label: string;
    icon?: string;
  };
}

export interface ComputerRepairTemplateData {
  common?: {
    globalUI?: Record<string, string>;
    Footer?: FooterData;
  };
  categories?: {
    "Computer Repair"?: {
      sections?: {
        Header?: { variants: { 'Computer RepairHeader2': HeaderData } };
        Hero?: { variants: { 'Computer RepairHero2': HeroData } };
        AboutUs?: { variants: { 'Computer RepairAboutUs2': AboutUsData } };
        WhyChooseUs?: { variants: { 'Computer RepairWhyChooseUs2': WhyChooseUsData } };
        Services?: { variants: { 'Computer RepairServices2': ServicesData } };
        Process?: { variants: { 'Computer RepairProcess2': ProcessData } };
        Brands?: { variants: { 'Computer RepairBrands2': BrandsData } };
        Pricing?: { variants: { 'Computer RepairPricing2': PricingData } };
        Achievement?: { variants: { 'Computer RepairAchievement2': AchievementData } };
        Testimonials?: { variants: { 'Computer RepairTestimonials2': TestimonialsData } };
        Faq?: { variants: { 'Computer RepairFaq2': FaqData } };
        BookRepair?: { variants: { 'Computer RepairBookRepair2': BookRepairData } };
      }
    };
  }
}
