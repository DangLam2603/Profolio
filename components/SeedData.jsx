import {
  SiCsharp,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiMongodb,
  SiVite,
} from "react-icons/si";
import { FaReact, FaJava, FaAws } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { Title } from "@radix-ui/react-dialog";
const PersonalData = {
  PersonalInfo: {
    Name: "Lam Minh Dang",
    Location: "Ho Chi Minh City",
    Email: "lamminhdang2603.work@gmail.com",
    Phone: "0814425276",
    LinkedIn: "https://linkedin.com/in/lamminhdang",
    GitHub: "https://github.com/DangLam2603",
  },
  Goal: {
    ShortTerm:
      "To deepen my expertise in backend technologies and cloud platforms, contribute to impactful software projects, and hone my skills in building scalable, secure systems.",
    LongTerm:
      "To become a lead software developer or solutions architect, driving innovative and high-impact projects that solve complex challenges and contribute to the advancement of technology.",
  },
  Experience: [
    {
      Title: "Intern Backend Developer",
      Company: "FPT Software HCM",
      StartDate: "Sep 2023",
      EndDate: "Dec 2023",
      Achievements: [
        "Contributed innovative solutions during brainstorming sessions, resulting in a 30% improvement in development workflows and the successful adoption of new technologies.",
        "Resolved a major security vulnerability by applying input validation and sanitization",
      ],
    },
    {
      Title: "Ambasador - First Cloud Journey",
      Company: "AWS Study Group",
      StartDate: "2024",
      EndDate: "Now",
      Achievements: [
        "Built a serverless architecture and implemented automatic scaling to efficiently manage high traffic and deliver superior performance.",
        "Proposed and implemented an AWS architecture solution for a FinTech payment system to enhance performance, security, and scalability.",
      ],
    },
  ],
  Certifications: [
    {
      Title: "IELTS 6.5",
      Issuer: "British Council",
      Date: "Nov 2022",
      Description:
        "Achieved a commendable proficiency level in English, demonstrating strong communication skills in reading, writing, listening, and speaking",
    },
  ],
  Awards: [
    {
      Title: "VP BANK Hackathon Finalist",
      Issuer: "VP BANK, AWS",
      Date: "Jun 2024",
      Description:
        "Proposed and implemented an AWS architecture solution for a FinTech payment system to enhance performance, security, and scalability. Built a serverless architecture and implemented automatic scaling to efficiently manage high traffic and deliver superior performance.",
    },
  ],
  Education: [
    {
      Degree: "High School Diploma",
      Institution: "Le Quy Don High School for gifted students",
      StartDate: "2019",
      EndDate: "2021",
      GPA: "8.5/10.0",
      Details: [
        "Developed a strong foundation in mathematics and science, with specialized expertise in Chemistry.",
        "Gained strong communication skills, leadership, and teamwork abilities.",
        "Participated in various extracurricular activities, including sports, music, dance and culture.",
      ],
    },
    {
      Degree: "Bachelor's Degree in Software Engineering",
      Institution: "FPT University",
      StartDate: "Sep 2021",
      EndDate: "Dec 2024",
      GPA: "3.2/4.0",
      Details: [
        "Built strong skills in database management and object-oriented programming. ",
        "Gained expertise in Cloud Computing and Web App development. ",
        "Led team projects, delivering quality solutions under tight deadlines. ",
        "Active Member of Multimedia & Entertainment Media Club, organizing workshops and events for students. ",
      ],
    },
  ],
  Skills: [
    {
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <SiMicrosoftsqlserver />,
      name: "SQL Server",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <RiNextjsFill />,
      name: "NextJS",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "TailwindCSS",
    },
    {
      icon: <SiVite />,
      name: "Vite",
    },
    {
      icon: <FaAws />,
      name: "Amazon Web Services",
    },
  ],
};

export default PersonalData;
