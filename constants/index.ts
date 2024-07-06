// data/skillsData.ts

import { NavItem, Project, ServiceItem, SkillItem } from "@/Types";
import {
    CommandLineIcon,
    ServerIcon,
    CodeBracketIcon,
    CursorArrowRaysIcon,
    RocketLaunchIcon,
    BugAntIcon
  } from '@heroicons/react/20/solid';
  

  export const navItems: NavItem[] = [
    { title: 'Home', link: '#home' },
    { title: 'About', link: '#about' },
    { title: 'Services', link: '#services' },
    { title: 'Skills', link: '#skills' },
    { title: 'Project', link: '#projects' },
    { title: 'Contact', link: '#contact' },
  ];
  

export  const services: ServiceItem[] = [
    {
      icon: CommandLineIcon,
      title: 'React Website',
      subtitle: 'Building dynamic and responsive websites using React.',
      num: '01',
    },
    {
      icon: ServerIcon,
      title: 'Next JS Website',
      subtitle: 'Developing server-rendered web applications using Next.js.',
      num: '02',
    },
    {
      icon: CodeBracketIcon,
      title: 'Fullstack Website',
      subtitle: 'Creating end-to-end web solutions with fullstack capabilities.',
      num: '03',
    },
    {
      icon: CursorArrowRaysIcon,
      title: 'Node JS API',
      subtitle: 'Building scalable and efficient APIs with Node.js.',
      num: '04',
    },
    {
      icon: RocketLaunchIcon,
      title: 'MERN WebApp',
      subtitle: 'Developing web applications using the MERN stack.',
      num: '05',
    },
    {
      icon: BugAntIcon,
      title: 'Bug Fixing',
      subtitle: 'Identifying and fixing bugs in web applications.',
      num: '06',
    },
  ];
  
export const skillsData: SkillItem[] = [
  {
    title: "React",
    image: "/images/react.svg",
    percent: "90",
  },
  {
    title: "JavaScript",
    image: "/images/js.svg",
    percent: "90",
  },
  
  {
    title: "TypeScript",
    image: "/images/ts.svg",
    percent: "90",
  },
  
  {
    title: "NodeJs",
    image: "/images/node.svg",
    percent: "90",
  },
  
  {
    title: "MongoDB",
    image: "/images/mongo.svg",
    percent: "90",
  },
  
  {
    title: "Python",
    image: "/images/python.svg",
    percent: "90",
  },
  
  {
    title: "HTML",
    image: "/images/html.svg",
    percent: "90",
  },
  
  {
    title: "CSS",
    image: "/images/tailwind.svg",
    percent: "90",
  },
  
];
 
// data/projectsData.ts

export const projectsData: Project[] = [
  {
    image: "/images/project1.png",
    title: "TechSpark LearnHub",
    description: `Developed an E-learning platform with Razorpay integration for secure payments; implemented features for instructors to manage courses, 
                including video lectures and customizable details; ensured data security with robust authentication and access controls for a personalized 
                learning experience.`,
    link: "https://tech-spark-learn-hub.vercel.app/",
    tech1: "React",
    tech2: "Node.js",
    tech3: "Express",
    tech4: "MongoDB",
  },
  {
    image: "/images/project2.jpg",
    title: "My Portfolio",
    description: `Created a personal portfolio to showcase my projects and skills. The portfolio is designed with a clean, modern aesthetic and features sections 
                for projects, skills, experience, and contact information. The site is fully responsive and built using Next.js, TypeScript, Tailwind CSS, and Node.js.`,
    link: "https://my-portfolio.vercel.app/",
    tech1: "Next.js",
    tech2: "TypeScript",
    tech3: "Tailwind",
    tech4: "Node.js",
  },
];

