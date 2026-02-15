export interface Offer {
  slug: string;
  palier: number;
  name: string;
  tagline: string;
  description: string;
  target: string;
  includes: string[];
  duration: string;
  cta: string;
  highlighted: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
  readingTime?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  consent: boolean;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  offerInterest: string;
  message?: string;
  date?: string;
  time?: string;
}

export interface NewsletterFormData {
  email: string;
  consent: boolean;
}
