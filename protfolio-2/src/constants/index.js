import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import school1 from "../assets/about/bauddhaloka.png";
import school2 from "../assets/about/nalanda_logo.png";
import kodeCloude from "../assets/certificates/kodecloude.png";
import courseera from "../assets/certificates/couseera.png";
import hackerank_problem_solving_basic from "../assets/certificates/problem_solving_basic.png";
import hackerank_software_engineering from "../assets/certificates/software_engineer.png";
import hackerank_python_basic from "../assets/certificates/python_bsics.png";
import competitonApp from "../components/projects/CompetitonApp";
import Portfolio from "../components/projects/Portfolio";
import TalkTogether from "../components/projects/TalkTogetherProject";
import StagePilot from "../components/projects/StagePilot";
import MonoVSMicro from "../components/blogs/MonoVSMicro";
import TypesProgLang from "../components/blogs/TypesProgLang";

export const HERO_CONTENT = `Interested in <strong>Scalable Systems</strong>, <strong>Microservices</strong>,<strong>Fullstack mobile and web app development</strong> and <strong>DevOps</strong>
Committed to crafting <strong>innovative</strong>, <strong>efficient</strong>, and <strong>user-focused</strong> solutions.`;

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
          "wise captian of the school Karate team (2016 - 2017)",
          "Captain of School Karate team (2016 - 2017)",
          "Member of the school swimming team",
        ],
      },
      {
        subTitle: "Acedemic:",
        points: [
          "Passed G.C.E. Ordinary Level Exam with 9A's",
          "Passed G.C.E. Advanced Level Exam with 3A's in Physical Science Stream (z-score 1.8144)",
        ],
      },
    ],
  },
];

export const UNIVERSITY = {
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
};

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

export const EXPERIENCES = [
  {
    year: "2022 - 2023 (6 months)",
    role: "Trainee Software Engineer",
    company: "Pagero Lanka (Pvt) Ltd",
    description: `Developed and mainatained new features and Dev ps best practices in microservices environment engaging with foreign developers. Worked with technologies like Java, Spring Boot, Scala,Docker, Kubernetes, and GCP.`,
    technologies: [
      "Java",
      "Spring Boot",
      "Scala",
      "Docker",
      "Kubernetes",
      "GOCD",
      "Linux",
    ],
  },
];

export const BLOGS = [
  {
    title:
      "Monolithic vs. Microservices: A Comparison from an Engineering Perspective",
    date: "June 1, 2023",
    link: "/blog/1",
    image:
      "https://miro.medium.com/v2/resize:fit:2000/1*xu1Ge_Cew0DHdSU6ETcpLQ.png",
    description: MonoVSMicro,
  },
  {
    title: "Understanding Types of Programming Languages: A Quick Guide",
    date: "Dec 17, 2023",
    link: "/blog/2",
    image:
      "https://theprimeview.com/wp-content/uploads/2024/02/Mixed-languages.jpg",
    description: TypesProgLang,
  },
];

export const PROJECTSPAGE = [
  {
    title: "Stage Pilot Train Booking System",
    link: "/projects/1",
    image: project1,
    description: StagePilot,

    technologies: [
      "Flutter",
      "Dart",
      "Android Emulator",
      "Gradle",
      "MongoDB",
      "React",
    ],
  },
  {
    title: "Karate Cmpetition App",
    link: "/projects/2",
    image: project2,
    description: competitonApp,
    technologies: [
      "Flutter",
      "Cubit",
      "Dart",
      "Firebase",
      "Google Auth",
      "Firestore",
      "VS Code",
    ],
  },
  {
    title: "Portfolio Website",
    link: "/projects/3",
    image: project3,
    description: Portfolio,
    technologies: ["HTML", "CSS", "React", "tailwindcss", "vite"],
  },
  {
    title: "Talk together",
    link: "/projects/4",
    image: project4,
    description: TalkTogether,
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Stage Pilot Train Booking System",
    link: "/projects/1",
    image: project1,
    description: `A Fully user friendlt train ticket booking system in sri Lankan railways. This app provides errorless train selection 
      capabilities, payment method integration, `,
    technologies: [
      "Flutter",
      "Dart",
      "Android Emulator",
      "Gradle",
      "MongoDB",
      "React",
    ],
  },
  {
    title: "Karate Cmpetition App",
    link: "/projects/2",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: [
      "Flutter",
      "Cubit",
      "Dart",
      "Firebase",
      "Google Auth",
      "Firestore",
      "VS Code",
    ],
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
    title: "Talk Together",
    link: "/projects/4",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address:
    "44/5 janaiya mawatha, Avariyawatta, Alubomulla, Panadura, Sri Lanka",
  phoneNo: "+994 77 050 6463",
  email: "kavinduj.20@cse.mrt.ac.lk",
};

export const CERTIFICATES = [
  {
    image: kodeCloude,
    url: "https://learn.kodekloud.com/user/certificate/f55abfdf-c426-4ee8-a3d4-25fb9c5888e9",
    heading: "YouTube Labs - Kubernetes Crash Course",
    date: "August 27, 2024",
    description:
      "Kodecloude gives hands on lab experiance on kubernetes. I got the fundemental and basic  knowledge of kubernetes from this course.",
  },
  {
    image: courseera,
    url: "https://www.coursera.org/account/accomplishments/verify/P38LC3TVWM36",
    heading: "Application Development using Microservices and Serverless",
    date: "December 17, 2024",
    description: `Got a better Hands on Experiance about deploying microservice in 
      IBM cloude code engine and serverless in IBM cloude function. Also got a better understading 
      about microservices architecture, error handeling and ibmcloude CLI. `,
  },
  {
    image: hackerank_problem_solving_basic,
    url: "https://www.hackerrank.com/certificates/9f6e28d623d5",
    heading: "HackeRank Problem Solving(basic)",
    date: "January 07, 2025",
    description: `This covered basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching). `,
  },

  {
    image: hackerank_software_engineering,
    url: "https://www.hackerrank.com/certificates/78132ba2a68a",
    heading: "HackeRank Software Engineer",
    date: "January 07, 2025",
    description: `This covered topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes `,
  },
  {
    image: hackerank_python_basic,
    url: "https://www.hackerrank.com/certificates/iframe/2aae18091e88",
    heading: "HackeRank Python (Basic)",
    date: "Jannuary 15, 2025",
    description: `This covered topics like Problem solving, SQL, and REST API. `,
  },
];
