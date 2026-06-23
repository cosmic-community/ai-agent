export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    tagline?: string;
    icon_emoji?: string;
    description?: string;
    featured_image?: CosmicImage;
    key_benefits?: string[];
    starting_price?: string;
    accent_color?: string;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title?: string;
    industry?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    key_metrics?: Array<{ label?: string; value?: string }> | Record<string, string>;
    featured_image?: CosmicImage;
    related_service?: Service;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    role?: string;
    company?: string;
    quote?: string;
    rating?: number;
    client_photo?: CosmicImage;
    related_service?: Service;
  };
}

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  [key: string]: string | undefined;
}

export interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    agency_name?: string;
    hero_headline?: string;
    hero_subheadline?: string;
    logo?: CosmicImage;
    primary_color?: string;
    accent_color?: string;
    cta_text?: string;
    booking_link?: string;
    contact_email?: string;
    social_links?: SocialLinks;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}