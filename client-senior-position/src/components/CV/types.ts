export type Role = "frontend" | "backend" | "fullstack" | "all";

export interface IResponsibility {
  text: string;
  roles: Role[];
}

export interface IJob {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: IResponsibility[];
}

export interface ISkillCategory {
  label: string;
  items: string;
  roles: Role[];
}

export interface ICVData {
  header: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  summary: {
    heading: string;
    content: string;
  };
  experience: {
    heading: string;
  };
  jobs: IJob[];
  skills: {
    heading: string;
    categories: ISkillCategory[];
  };
  education: {
    heading: string;
    content: string;
  };
  languages: {
    heading: string;
    content: { lang: string; level: string }[];
  };
}