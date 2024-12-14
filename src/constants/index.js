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
    Calderon,
    threejs,
    RiosLogo,
    RiosPage,
    TaxHero,
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
      URL: "https://drive.google.com/file/d/1Ff_yFo28kvfT2mbbwCId7I8RbCb466Sc/view?usp=drive_link"
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
      title: "Software Engineer",
      company_name: "Rios Beauty",
      icon: RiosLogo,
      iconBg: "#E6DEDD",
      date: "August 2021 - January 2024",
      points: [
        "Improved software efficiency by troubleshooting and resolving coding issues.",
        "Added front-end services with AWS as the hosting server.",
        "Optimized application performance by conducting regular code reviews and refactoring when necessary.",
        "Provided 24/7 support for web- and client-based applications, file and data feeds and batch processes to prevent impact to business."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Calderon Community Services",
      icon: TaxHero,
      iconBg: "#E6DEDD",
      date: "February 2024 - Present",
      points: [
        "Optimized application performance by conducting regular code reviews and refactoring when necessary.",
        "Evaluated potential software enhancements by conducting thorough testing and analysis before implementation into production environments.",
        "Collaborated with cross-functional teams to implement necessary updates and optimize system efficiency.",
        "Updated old code bases to modern development standards, improving functionality.",
        "Developed software for desktop and mobile operating systems.",
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
      name: "Calderon Community Services",
      description:
        "Web application created for a Tax and immigration services. ",
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
      image: Calderon,
      source_code_link: "https://calderoncommunityservices.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials , projects };