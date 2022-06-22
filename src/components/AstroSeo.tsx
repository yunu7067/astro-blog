export type OpeningHoursSpecification = {
  opens: string;
  closes: string;
  dayOfWeek: string | string[];
  validFrom?: string;
  validThrough?: string;
};

export type Offer = {
  priceSpecification: PriceSpecification;
  itemOffered: Service;
};

export type PriceSpecification = {
  type: string;
  priceCurrency: string;
  price: string;
};

export type Service = {
  name: string;
  description: string;
};

export type Geo = {
  latitude: string;
  longitude: string;
};

export type GeoCircle = {
  geoMidpoint: Geo;
  geoRadius: string;
};

export type Action = {
  actionName: string;
  actionType: string;
  target: string;
};

export interface Person {
  name: string;
}
export interface Answer {
  text: string;
  dateCreated?: string;
  upvoteCount?: number;
  url?: string;
  author?: Person;
}

export interface Question {
  name: string;
  answerCount: number;
  acceptedAnswer?: Answer;
  suggestedAnswer?: Answer[];
  text?: string;
  author?: Person;
  upvoteCount?: number;
  dateCreated?: string;
}

export interface Instruction {
  name?: string;
  text: string;
  url?: string;
  image?: string;
}
export interface Performer {
  name: string;
}

export interface Location {
  name: string;
  address: Address;
  sameAs?: string;
}
export interface ContactPoint {
  contactType: string;
  telephone: string;
  areaServed?: string | string[];
  availableLanguage?: string | string[];
  contactOption?: string | string[];
}
export interface CreativeWork {
  author: string;
  about: string;
  name: string;
  datePublished: string;
  audience?: string;
  keywords?: string;
  thumbnailUrl?: string;
  image?: string;
}

export interface Producer {
  name: string;
  url?: string;
}
export interface ContactPoint {
  contactType: string;
  telephone: string;
  areaServed?: string | string[];
  availableLanguage?: string | string[];
  contactOption?: string | string[];
}

export interface Question {
  questionName: string;
  acceptedAnswerText: string;
}
export interface Provider {
  type?: 'Organization' | 'Person';
  name: string;
  url?: string;
}
export interface ItemListElements {
  item: string;
  name: string;
  position: number;
}
export interface OpenGraphMedia {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  type?: string;
  secureUrl?: string;
}

export interface Address {
  streetAddress: string;
  addressLocality: string;
  addressRegion?: string;
  postalCode: string;
  addressCountry: string;
}

export interface Video {
  name: string;
  description: string;
  thumbnailUrls: string[];
  uploadDate: string;
  contentUrl?: string;
  duration?: string;
  embedUrl?: string;
  expires?: string;
  hasPart?: Clip | Clip[];
  watchCount?: number;
  publication?: BroadcastEvent | BroadcastEvent[];
  regionsAllowed?: string | string[];
}

export interface Clip {
  name: string;
  startOffset: number;
  url: string;
}

export interface BroadcastEvent {
  name?: string;
  isLiveBroadcast: boolean;
  startDate: string;
  endDate: string;
}

export type Offers = {
  price: string;
  priceCurrency: string;
  priceValidUntil?: string;
  itemCondition?: string;
  availability?: string;
  url?: string;
  seller: {
    name: string;
  };
};

export type AggregateOffer = {
  priceCurrency: string;
  lowPrice: string;
  highPrice?: string;
  offerCount?: string;
  offers?: Offers | Offers[];
};

export interface OpenGraphVideoActors {
  profile: string;
  role?: string;
}

export interface OpenGraph {
  url?: string;
  type?: string;
  title?: string;
  description?: string;
  images?: ReadonlyArray<OpenGraphMedia>;
  videos?: ReadonlyArray<OpenGraphMedia>;
  defaultImageHeight?: number;
  defaultImageWidth?: number;
  locale?: string;
  site_name?: string;
  profile?: OpenGraphProfile;
  book?: OpenGraphBook;
  article?: OpenGraphArticle;
  video?: OpenGraphVideo;
}

export interface OpenGraphProfile {
  firstName?: string;
  lastName?: string;
  username?: string;
  gender?: string;
}

export interface OpenGraphBook {
  authors?: ReadonlyArray<string>;
  isbn?: string;
  releaseDate?: string;
  tags?: ReadonlyArray<string>;
}

export interface OpenGraphArticle {
  publishedTime?: string;
  modifiedTime?: string;
  expirationTime?: string;

  authors?: ReadonlyArray<string>;
  section?: string;
  tags?: ReadonlyArray<string>;
}

export interface OpenGraphVideo {
  actors?: ReadonlyArray<OpenGraphVideoActors>;
  directors?: ReadonlyArray<string>;
  writers?: ReadonlyArray<string>;
  duration?: number;
  releaseDate?: string;
  tags?: ReadonlyArray<string>;
  series?: string;
}

export interface Twitter {
  /** `twitter:creator` */
  handle?: string;
  /** `twitter:site` */
  site?: string;
  /** `twitter:card` */
  cardType?: string;
}

interface MobileAlternate {
  media: string;
  href: string;
}

interface LanguageAlternate {
  hrefLang: string;
  href: string;
}

interface LinkTag {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
  color?: string;
  keyOverride?: string;
  as?: string;
  crossOrigin?: string;
}

export interface BaseMetaTag {
  content: string;
  keyOverride?: string;
}

export interface HTML5MetaTag extends BaseMetaTag {
  name: string;
  property?: undefined;
  httpEquiv?: undefined;
}

export interface RDFaMetaTag extends BaseMetaTag {
  property: string;
  name?: undefined;
  httpEquiv?: undefined;
}

export interface HTTPEquivMetaTag extends BaseMetaTag {
  httpEquiv:
  | 'content-security-policy'
  | 'content-type'
  | 'default-style'
  | 'x-ua-compatible'
  | 'refresh';
  name?: undefined;
  property?: undefined;
}

export type MetaTag = HTML5MetaTag | RDFaMetaTag | HTTPEquivMetaTag;

export type ImagePrevSize = 'none' | 'standard' | 'large';

export type AggregateRating = {
  ratingValue: string;
  reviewCount?: string;
  ratingCount?: string;
  bestRating?: string;
};

export type GamePlayMode = 'CoOp' | 'MultiPlayer' | 'SinglePlayer';

export type Review = {
  author: string;
  datePublished?: string;
  reviewBody?: string;
  name?: string;
  publisher?: Publisher;
  reviewRating: ReviewRating;
};

export type ReviewRating = {
  bestRating?: string;
  ratingValue: string;
  worstRating?: string;
};

export type Author = {
  type: string;
  name: string;
};

export type Publisher = {
  type: string;
  name: string;
};

export type ReviewedBy = {
  type?: string;
  name: string;
};

export type ApplicationCategory =
  | 'Game'
  | 'SocialNetworking'
  | 'Travel'
  | 'Shopping'
  | 'Sports'
  | 'Lifestyle'
  | 'Business'
  | 'Design'
  | 'Developer'
  | 'Driver'
  | 'Educational'
  | 'Health'
  | 'Finance'
  | 'Security'
  | 'Browser'
  | 'Communication'
  | 'DesktopEnhancement'
  | 'Entertainment'
  | 'Multimedia'
  | 'Home'
  | 'Utilities'
  | 'Reference';

export type OrganizationCategory =
  | 'Airline'
  | 'Consortium'
  | 'Corporation'
  | 'EducationalOrganization'
  | 'FundingScheme'
  | 'GovernmentOrganization'
  | 'LibrarySystem'
  | 'LocalBusiness'
  | 'MedicalOrganization'
  | 'NGO'
  | 'NewsMediaOrganization'
  | 'PerformingGroup'
  | 'Project'
  | 'ResearchOrganization'
  | 'SportsOrganization'
  | 'WorkersUnion'
  | 'Organization';

export interface AdditionalRobotsProps {
  nosnippet?: boolean;
  maxSnippet?: number;
  maxImagePreview?: ImagePrevSize;
  maxVideoPreview?: number;
  noarchive?: boolean;
  unavailableAfter?: string;
  noimageindex?: boolean;
  notranslate?: boolean;
}

interface DefaultSeoProps {
  title?: string;
  titleTemplate?: string;
  defaultTitle?: string;
  noindex?: boolean;
  nofollow?: boolean;
  robotsProps?: AdditionalRobotsProps;
  description?: string;
  canonical?: string;
  mobileAlternate?: MobileAlternate;
  languageAlternates?: ReadonlyArray<LanguageAlternate>;
  openGraph?: OpenGraph;
  facebook?: { appId: string };
  twitter?: Twitter;
  additionalMetaTags?: ReadonlyArray<MetaTag>;
  additionalLinkTags?: ReadonlyArray<LinkTag>;
};

interface BlogSeoProps {
  next?: string;
  prev?: string;
  image?: string;
}

interface AstroSeoProps extends DefaultSeoProps, BlogSeoProps { };

/**
 * Next SEO를 Astro용으로 마이그레이션한 것
 * TODO: 아직 SEO 불완전하게 지원함. 추후 개선 예정.
 * 
 * 참조 : [Next SEO](https://github.com/garmeeh/next-seo)
 */
const AstroSeo = (seo: AstroSeoProps) => {
  return (
    <>
      {/* Common */}
      {seo.title && <title>{seo.title}</title>}
      {seo.description && <meta name="description" content={seo.description} />}

      {/* SEO */}
      {seo.canonical && <link rel='canonical' href={seo.canonical} />}
      {seo.next && <link rel="next" aria-label="Previous Page" href={new URL(seo.next, seo.canonical).href} />}
      {seo.prev && <link rel="prev" aria-label="Next Page" href={new URL(seo.prev, seo.canonical).href} />}

      {/* OpenGraph */}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={new URL(seo.image, seo.canonical)} />}

      {/* Twitter */}
      {seo.image && <meta name="twitter:card" content={seo.image ? 'summary_large_image' : 'summary'} />}
      {seo.twitter?.site && <meta name="twitter:site" content={seo.twitter.site} />}
      {seo.twitter?.cardType && <meta name="twitter:card" content={seo.twitter.cardType} />}
      {seo.twitter?.handle && <meta name="twitter:creator" content={seo.twitter.handle} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </>
  );
}

export default AstroSeo;
export type { AstroSeoProps };