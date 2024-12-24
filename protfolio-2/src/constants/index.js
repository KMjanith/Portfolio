import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const BLOGS = [
  {
    title: "How to Build a Responsive Website Using HTML and CSS",
    date: "June 1, 2023",
    link: "/blog/1",
    image: "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg",
    description:[
        "Learn how to create a responsive website layout using HTML and CSS. This tutorial covers the basics of building a mobile-friendly web page from scratch.",
    ]
      
  },
  {
    title: "Introduction to JavaScript ES6 Features",
    date: "May 15, 2023",
    link: "/blog/2",
    image: "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg",
    description:[
      "Discover the new features and enhancements in JavaScript ES6. This guide provides an overview of the latest updates to the ECMAScript specification.",
    ]
      
  },
  {
    title: "Getting Started with React Hooks",
    date: "April 28, 2023",
    link: "/blog/3",
    image: "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg",
    description:[
      "Learn how to use React Hooks to add state and lifecycle features to functional components. This tutorial covers the basics of working with hooks in React.",
      "Learn how to use React Hooks to add state and lifecycle features to functional components. This tutorial covers the basics of working with hooks in React.",
      "Learn how to use React Hooks to add state and lifecycle features to functional components. This tutorial covers the basics of working with hooks in React.",
      {
        "subTitle": "What you'll learn:",
        "points": [
          "How to use the useState hook to manage component state",
          "How to use the useEffect hook to perform side effects in functional components",
          "How to create custom hooks to reuse stateful logic across components"]
      }
    ]
     

  },
  {
    title: "Building a RESTful API with Node.js and Express",
    date: "April 10, 2023",
    link: "/blog/4",
    image: "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg",
    description:[
        "Create a RESTful API using Node.js and Express. This step-by-step guide walks you through setting up a server, defining routes, and handling requests in Node.js"
    ]
      
  }
]

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    link: "/projects/1",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    link: "/projects/2",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    link: "/projects/3",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    link: "/projects/4",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
