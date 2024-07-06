

// types.ts
export interface ServiceItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
  num: string;
}


declare type SkillItem = {
    title: string;
    image: string;
    percent: string;
  }
  

export interface Project {
  image: string;
  description:srting;
  link:string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  title: string;
}

export interface NavItem {
  title: string;
  link: string;
}