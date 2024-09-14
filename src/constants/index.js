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
      URL: "https://drive.google.com/file/d/1yJVl2-s7o5kRvzmEN5KCvFyWOm-GURTa/view?usp=drive_link"
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
      title: "Front End React Developer",
      company_name: "Rios Beauty",
      icon: RiosLogo,
      iconBg: "#E6DEDD",
      date: "August 2021 - January 2024",
      points: [
        "Designed a modern website for RiosBeauty using multiple React libraries.",
        "Added front-end services with AWS as the hosting server.",
        "The web app has a built in language switch button to accomade the user preffered language",
        "Tools used: Front end, JavaScript, node.js, React, Three.Js, Tailwind CSS, github, Goggle cloud, Google cloud, HTML, CSS"
      ],
    },
    {
      title: "full Stack Developer",
      company_name: "Calderon Community Services",
      icon: TaxHero,
      iconBg: "#E6DEDD",
      date: "February 2024 - Present",
      points: [
        "Developed and maintain web appllication for Tax and immigration services for customers",
        "The creation of this web app increaded clientele for the company.",
        "Tools used: Front End, Back-End, JavaScript, node.js, github, Goggle cloud, Google cloud, HTML, CSS",
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