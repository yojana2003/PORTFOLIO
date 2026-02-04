import html from "./assets/skills/html.png"
import css from "./assets/skills/css.png"
import javascript from "./assets/skills/javascript.png"
import reactjs from "./assets/skills/reactjs.png"
import mongoDB from "./assets/skills/mongodb.png"
import nodejs from "./assets/skills/nodejs.png"
import expressjs from "./assets/skills/express.png"
import tailwindcss from "./assets/skills/tailwindcss.png"
import netlify from "./assets/skills/netlify.png"
import postman from "./assets/skills/postman.png"
import redux from "./assets/skills/redux.png"
import github from "./assets/skills/github.png"
import vscode from "./assets/skills/vscode.png"
import figma from "./assets/skills/figma.png"
import foodrushImg from "./assets/work/foodrushImg.png"
import passwordGen from "./assets/work/passwordGen.png"
import clgImg from "./assets/education/clgImg.jpeg"
import felix from "./assets/education/felix.jpeg"



export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: html },
            { name: 'CSS', logo: css },
            { name: 'JavaScript', logo: javascript },
            { name: 'React JS', logo: reactjs },
            { name: 'Redux', logo: redux },
            { name: 'Tailwind CSS', logo: tailwindcss },

        ],
    },
    {
        title: 'Backend',
        skills: [

            { name: 'Node JS', logo: nodejs },
            { name: 'Express JS', logo: expressjs },
            { name: 'MongoDB', logo: mongoDB },

        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'GitHub', logo: github },
            { name: 'VS Code', logo: vscode },
            { name: 'Postman', logo: postman },
            { name: 'Netlify', logo: netlify },
            { name: 'Figma', logo: figma },
        ],
    },
]





export const projects = [
    {
      id: 0,
      title: "password Generator",
      description:
        "Password Generator is a simple web tool that creates strong, random passwords based on user-selected criteria, helping improve security and protect user accounts.",
      image:passwordGen,
      tags: ["HTML", "React JS", "TailwindCSS"],
      github: "https://github.com/yojana2003/Password-Generator",
      webapp: "https://password-generator-02b529.netlify.app/",
    },
    {
      id: 1,
      title: "FOODRUSH",
      description:
        "FoodRush is a full-stack food ordering web application that allows users to browse restaurants, explore menus, and place orders seamlessly. The app focuses on a smooth user experience with secure authentication and responsive design. It is built using modern web technologies and follows real-world application architecture",
      image:foodrushImg,
      tags: ["HTML", "React JS", "TailwindCSS"],
      github: "https://github.com/yojana2003/FOOD-RUSH",
      webapp: "https://foodrush-delivery.netlify.app/",
    },
    
  ];  

  export const education = [
    {
      id: 0,
      img: clgImg,
      school: "Shri gulabrav deokar college of engineering",
      date: "2022 - 2025 ",
      grade: "7.96 CGPA",
      desc: "Completed a four-year undergraduate program focused on building strong fundamentals in computer science and engineering. The curriculum covered core subjects such as programming, data structures, algorithms, database management systems, operating systems, computer networks, and software engineering. Gained practical experience through academic projects, labs, and team-based assignments, which helped develop problem-solving skills, logical thinking, and a solid understanding of software development processes. The program also emphasized analytical skills, teamwork, and the application of theoretical knowledge to real-world technical problems.",
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
    },
    {
      id: 1,
      img: clgImg,
      school: "Shri gulabrav deokar college of engineering",
      date: "2020 - 2022",
      grade: "75%",
      desc: "Completed a diploma program that provided a strong foundation in computer engineering concepts. The coursework covered programming languages, database systems, computer hardware, networking, operating systems, and software development basics. Through practical labs, workshops, and project work, developed hands-on technical skills, problem-solving ability, and an understanding of how computer systems and applications work in real-world environments. The program focused on practical knowledge, technical efficiency, and industry-oriented learning.",
      degree: "Diploma in Computer Engineering",
    },
    {
      id: 2,
      img: felix,
      school: "Felix it system",
      date: "july 2025 - january 2026",
      grade: "-",
      desc: "A Full Stack Developer specializing in the MERN stack with experience in building responsive and scalable web applications. Skilled in developing user interfaces using React, building RESTful APIs with Node.js and Express.js, and managing data with MongoDB. Familiar with authentication, routing, and full-stack application workflows, with a strong focus on clean code, performance, and user experience.",
      degree: "Full Stack Developer (MERN Stack)",
    },
   
  ];