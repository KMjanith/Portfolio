import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import school1 from "../assets/about/bauddhaloka.png";
import school2 from "../assets/about/nalanda_logo.png";

export const HERO_CONTENT = `I am a passionate software engineer with a talent for designing and developing <strong>scalable systems, web applications, and mobile solutions</strong>. Specializing in <strong>microservices, distributed systems</strong>, and <strong>DevOps</strong>, I work with modern technologies like <strong>Python, Go, Java</strong>, and <strong>Scala</strong>, alongside databases such as <strong>MySQL, PostgreSQL, Cassandra</strong>, and <strong>MongoDB</strong>. My focus is on creating innovative, efficient, and user-centric solutions that stand out.`;

export const ABOUT_TEXT = [
  "I am a passionate and dedicated software engineering undergraduate with a strong interest in creating innovative solutions for real-world problems. My expertise spans <strong>building systems, web applications, and mobile applications, with a focus on microservices architecture, distributed systems,</strong> and <strong>DevOps practices.</strong>",
  "Proficient in <strong>Python</strong>, <strong>Go</strong>, <strong>Java</strong>, and <strong>Scala</strong>, I have a solid foundation in back-end and front-end development. I am experienced with databases like <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>Cassandra</strong>, and <strong>MongoDB</strong>, and use tools like <strong>Docker</strong> and <strong>Kubernetes</strong> to streamline deployments and workflows. I enjoy exploring emerging technologies and solving challenging problems.",
];

export const SCHOOL = [
  {
    year: "2004 - 2009",
    image: school1,
    school: "Wp/kl Bauddhaloka maha vidyalaya ",
    location: "Panadura, Sri Lanka",
    description: [
      {
        subTitle: "Achievements:",
        points: ["Passed Grade 5 Scholarship Exam"],
      },
    ],
  },
  {
    year: "2010 - 2018",
    image: school2,

    school: "Nalanda College Colombo 10",
    location: "Colombo, Sri Lanka",
    description: [
      {
        subTitle: "Extracurricular Activities:",
        points: [
          "Member of the school Drama association",
          "Member of the school Robotics club",
        ],
      },
      {
        subTitle: "Sports: ",
        points: [
          "wise captian of the school swimming team (2016 - 2017)",
          "Captian of School Karaye team (2016 - 2017)",
          "Member of the school swimming team",
        ],
      },
      {
        subTitle: "Acedemic:",
        points: [
          "Passed G.C.E. Ordinary Level Exam passed with 9A's",
          "Passed G.C.E. Advanced Level Exam passed with 3A's in Physical Science Stream (z-score 1.8144)",
        ],
      },
    ],
  },
];

export const UNIVERSITY = 
  {
    year: "2020 present",
    image: "https://avatars.githubusercontent.com/u/34195637?s=280&v=4",
    school: "Nalanda College Colombo 10",
    location: "Colombo, Sri Lanka",
    description: [
      {
        subTitle: "Acedemic Achievements:",
        points: [
          "Passed G.C.E. Ordinary Level Exam passed with 9A's",
          "Passed G.C.E. Advanced Level Exam passed with 3A's in Physical Science Stream (z-score 1.8144)",
        ],
      },

      {
        subTitle: "Sports Achievements:",
        points: [
          "under 21 Sri Lanka Karate Team representation",
          "2016,2017 bronze medel winner - Sri Lanka Karate Championship (organized by Sri lanka Karate do federation)",
          "Rising Son of the year 2017 - Nalanda College Colombo",
        ],
      },
    ],
  }


export const ACHIEVEMENTS = [
  {
    year: "2010 - 2018",
    image: school2,
    school: "Nalanda College Colombo 10",
    location: "Colombo, Sri Lanka",
    description: [
      {
        subTitle: "Acedemic Achievements:",
        points: [
          "Passed G.C.E. Ordinary Level Exam passed with 9A's",
          "Passed G.C.E. Advanced Level Exam passed with 3A's in Physical Science Stream (z-score 1.8144)",
        ],
      },

      {
        subTitle: "Sports Achievements:",
        points: [
          "under 21 Sri Lanka Karate Team representation",
          "2016,2017 bronze medel winner - Sri Lanka Karate Championship (organized by Sri lanka Karate do federation)",
          "Rising Son of the year 2017 - Nalanda College Colombo",
        ],
      },
    ],
  },
];

export const BLOGS = [
  {
    title: "How to Build a Responsive Website Using HTML and CSS",
    date: "June 1, 2023",
    link: "/blog/1",
    image:
      "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg",
    description: [
      "Learn how to create a responsive website layout using HTML and CSS. This tutorial covers the basics of building a mobile-friendly web page from scratch.",
    ],
  },
  {
    title: "Introduction to JavaScript ES6 Features",
    date: "May 15, 2023",
    link: "/blog/2",
    image:
      "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg",
    description: [
      "Discover the new features and enhancements in JavaScript ES6. This guide provides an overview of the latest updates to the ECMAScript specification.",
    ],
  },
  {
    title: "Getting Started with React Hooks",
    date: "April 28, 2023",
    link: "/blog/3",
    image:
      "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg",
    description: [
      "Learn how to use React Hooks to add state and lifecycle features to functional components. This tutorial covers the basics of working with hooks in React.",
      "Learn how to use React Hooks to add state and lifecycle features to functional components. This tutorial covers the basics of working with hooks in React.",
      "Learn how to use React Hooks to add state and lifecycle features to functional components. This tutorial covers the basics of working with hooks in React.",
      {
        subTitle: "What you'll learn:",
        points: [
          "How to use the useState hook to manage component state",
          "How to use the useEffect hook to perform side effects in functional components",
          "How to create custom hooks to reuse stateful logic across components",
        ],
      },
    ],
  },
  {
    title: "Building a RESTful API with Node.js and Express",
    date: "April 10, 2023",
    link: "/blog/4",
    image:
      "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg",
    description: [
      "Create a RESTful API using Node.js and Express. This step-by-step guide walks you through setting up a server, defining routes, and handling requests in Node.js",
    ],
  },
];

export const EXPERIENCES = [
  {
    year: "2022 - 2023 (6 months)",
    role: "Trainee Software Engineer",
    company: "Pagero Lanka (Pvt) Ltd",
    description: `Developed and mainatained new features and Dev ps best practices in microservices environment engaging with foreign developers. Worked with technologies like Java, Spring Boot, Scala,Docker, Kubernetes, and GCP.`,
    technologies: ["Java", "Spring Boot", "Scala", "Docker", "Kubernetes"],
  },
  {
    year: "Present",
    role: "Mobile App Developer",
    company: "Self",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
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
    technologies: ["HTML", "CSS", "React", "tailwindcss", "vite"],
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
  address: "44/5 janaiya mawatha, Avariyawatta, Alubomulla, Panadura, Sri Lanka",
  phoneNo: "+994 77 050 6463",
  email: "kavinduj.20@cse.mrt.ac.lk",
};
