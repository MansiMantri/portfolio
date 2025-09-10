import project1 from "../assets/projects/googledoc.jpg";
import project2 from "../assets/projects/coffeeapp.jpg";
import project3 from "../assets/projects/aivoice.jpg";
import project4 from "../assets/projects/stadiumbooking.jpg";
import project5 from "../assets/projects/stocksensei.jpg";
import projectDataViz from "../assets/projects/vizbotz.jpg";


export const HERO_CONTENT = `I’m a creative full-stack developer with a strong foundation in Computer Science, specializing in building seamless, user-friendly applications. Driven by a commitment to innovation, I enjoy transforming ideas into impactful digital solutions.`;

export const ABOUT_TEXT = `I am a passionate and results-driven full-stack developer with a strong academic foundation in Computer Science and a proven track record of delivering impactful digital solutions. With expertise in React, Node.js, PostgreSQL, and Docker, I specialize in building scalable, user-centric applications with seamless functionality and optimized performance. My experience includes developing AI-powered systems and innovative platforms, such as a ticket booking application and a voice assistant, showcasing my ability to tackle complex challenges with creativity and technical proficiency. Continuously learning and adapting to emerging technologies, I am dedicated to crafting solutions that balance technical excellence with exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 – Jun 2024",
    role: "Design Engineer Intern",
    company: " Atlas Copco",
    description: `Developed a Controller Booking System using JavaScript, Node.js, and MySQL. Deployed the system using Docker for containerization, collaborating with cross-functional teams to integrate and deploy the solution. Conducted thorough testing and debugging to ensure stability and performance.`,
    technologies: ["JavaScript", "Node.js","React","Tailwind CSS","Nextjs", "PostgresSQL", "Docker"],
  },
  {
    year: "Jan 2023 – Dec 2023",
    role: "Research Intern",
    company: "Applied Technical Solutions Ltd.",
    description: `Implemented FHIR guidelines for enhanced provenance management with NTP clock connectivity. Contributed to DAO, DTO, and web services on Java/Spring Boot platforms, developed a no-code feature to reduce development time, and generated unit test cases to ensure CRUD functionality with PostgreSQL.`,
    technologies: ["Java", "Spring Boot", "PostgreSQL", "DAO", "DTO", "REST API"],
  }
];

export const PROJECTS = [

  {
    title: "Arena Vibes - Ticket Booking System",
    image: project4,
    description:
      "An efficient ticket booking platform with features like seat selection, real-time booking confirmation, and automated invoice generation. Optimized database queries and designed a responsive user interface to improve user satisfaction by 25%.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Git"],
    github: "https://github.com/MansiMantri/ArenaVibes",
  },
  {
    title: "Google Doc Clone",
    image: project1,
    description:
      "A real-time collaboration system modeled after Google Docs, enabling seamless document editing and multi-user interaction. Key features include user presence tracking, version history management, and secure user authentication.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Git"],
    github: "https://github.com/placeholder/google-doc-clone",
  },
  // {
  //   title: "Coffee Store App",
  //   image: project2,
  //   description:
  //     "An Android application integrating personalized user profiles and real-time order tracking, improving transaction safety and providing up-to-date order status.",
  //   technologies: ["Java", "Android"],
  //   github: "https://github.com/placeholder/coffee-store-app",
  // },
  {
  title: "VizBotz - AI Data Visualizer",
  image: projectDataViz, // yahan apni project ki image ka variable ya path dena
  description:
    "An interactive AI-powered data visualization web app built with Streamlit and Google Gemini AI. Users can upload datasets, generate professional charts, and receive executive-style insights automatically.",
  technologies: ["Python", "Streamlit", "VegaLite", "AI"],
  github: "https://github.com/MansiMantri/VizBotz",
},

  {
    title: "AI Desktop Voice Assistant",
    image: project3,
    description:
      "A virtual assistant incorporating speech recognition, natural language processing, and task automation. Enhanced with text-to-speech and multi-language support, and optimized using machine learning algorithms.",
    technologies: ["Python", "NLP", "Machine Learning"],
    github: "https://github.com/MansiMantri/AI_voice_assistant",
  },

  {
    title: "Stock Sensei - Intelligent Stock Market Forecasting Tool",
    image: project5,
    description:
      "An advanced forecasting tool leveraging ARIMA, SARIMA, and Prophet models for analyzing historical stock data. Provided 95%+ accurate trend predictions, visualizations, and insights to empower investment decisions.",
    technologies: ["ML", "PostgreSQL", "Python", "HTML", "CSS"],
    github: "https://github.com/MansiMantri/Stock-Sensei",
  },
];



export const CONTACT = {
 
  email: "mmantri@wpi.edu",
};
