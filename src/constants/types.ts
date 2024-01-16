import { ParsedUrlQuery } from "querystring";

export interface Project {
  title: string;
  description: string;
  image: string;
}

export interface Service {
  icon: string;
  title: string;
  desc: string[];
  slug: string;
  images: string[];
}

export interface SubService {
  icon: string;
  title: string;
  desc: string[];
}

export interface QuestionOption {
  id: number | string;
  text: string;
  readOnly?: boolean
}

export interface Question {
  id: string | number;
  question: string;
  type: "text" | "number" | "email" | "checkbox" | "radio" | "tel" | "textarea" | "group";
  options?: QuestionOption[];
  isRequired: boolean;
  placeholder?: string;
  groups?: Question[],
}
export interface ServiceDetails extends Service {
  isQuotable?: boolean;
  subServices?: SubService[];
  questions?: Question[];
  showSubServicesInList?: boolean, 
}

export interface ClientFeedback {
  message: string;
  initials: string;
  firstName: string;
  lastName: string;
  jobRole: string;
}

export interface HomeData {
  heroImage: string;
  companyLogos: string[];
  projects: Project[];
  services: Service[];
  clientFeedback: ClientFeedback[];
}

// - - - - internal

export interface Answers {
  [key: string | number]: string | string[];
}

// getStaticProps and paths ts fix
export interface FetchStates {
  IDLE: string;
  LOADING: string;
  FETCHED: string;
  ERROR: string;
  TIMEOUT: string;
  POSTING: string;
  PAGINATING: string;
  REFETCHING: string;
}
export interface IParams extends ParsedUrlQuery {
  slug: string;
}
