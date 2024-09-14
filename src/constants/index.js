import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    myWedding,
    weather,
    databse,
    threejs,
    RiosLogo,
    RiosPage,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "works",
      title: "Projects"
    },
    {
      id: "footer",
      title: "My Socials"
    },

    {
      id:"resume",
      title: "Resume",
      URL: "https://docs.google.com/document/d/1Cxivr2nNV4y1ZVumruiadlipQYewncqqIWB4E8Rx5lY/edit?usp=sharing"
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Front End Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Lead Technician",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - Present",
      points: [
        "Use Git commands to pull logs from the vehicles",
        "review vehicle errors in syslogs, add and delete files from the car computer using the command line, Mentor the shop.",
        "In charge of assigning the workload to the techs throughout the week.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Rios Beauty",
      icon: RiosLogo,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - October 2023",
      points: [
        "Stephanie, the owner of RiosBeauty hired me to design a business website",
        "Stephanie trusted me to design and make her business site modern",
        "Her business site now showcases her work as well as the option to contact her via socila media or email",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Brandon's gym app has helped me learn more exercises and make my gym experience better!",
      name: "Carmen Garcia",
      designation: "User",
      company: "Brandon's Gym app",

    },

    {
      testimonial:
        "Brandon designed my business website for me to showcase my hair work and I loved it!",
      name: "Stephanie Rios",
      designation: "CEO",
      company: "Rios Beauty",
      icon: RiosLogo,
    }
  ];
  
  const projects = [
    {
      name: "Rios Beauty",
      description:
        "A business site created for Rios Beauty using different React Libraries ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        
          
        },
      ],
      image: RiosPage,
      source_code_link: "https://rios-beauty.com/",
    },
    {
      name: "My Wedding",
      description:
        "Devoloped a Front end web page for my wedding. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        
          
        },
      ],
      image: myWedding,
      source_code_link: "https://bg2398.github.io/MyWedding/",
    },
    {
      name: "Weather app",
      description:
        "A weather dashboard with an implemented search bar that let's you check out any city's weather for the week using the OpenWeather API key.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://bg2398.github.io/Whats-the-weather-today/",
    },
    {
      name: "Employee tracker database",
      description:
        "This is an application ran in the command line to manage a company's employee database. View and manage the departments, roles, and employees in the company so that the user can organize and plan their business",
      tags: [
        {
          name: "mySql",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Inquierer",
          color: "pink-text-gradient",
        },
      ],
      image: databse,
      source_code_link: "https://github.com/bg2398/track-employees",
    },
  ];
  
  export { services, technologies, experiences, testimonials , projects };