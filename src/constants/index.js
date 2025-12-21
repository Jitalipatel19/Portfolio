import project1 from "../assets/projects/portfolio.png";
import project2 from "../assets/projects/internify.png";
import project3 from "../assets/projects/amazon.png";
import project4 from "../assets/projects/llh.png";
import resume from "../assets/resume/jitali.pdf";


// HERO CONTENT
export const HERO_CONTENT = `
My aim is to use my skills to create innovative solutions that help businesses grow and provide great user experiences.`;

// ABOUT CONTENT
export const ABOUT_TEXT = `I am a dedicated and flexible developer who loves building efficient, user-friendly web applications. I’m always eager to learn and take on new challenges. I enjoy working with others and solving tough problems to deliver great solutions.`;

// PROJECT CONTENT
export const PROJECTS = [

  // PORTFOLIO
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React","Framer Motion","Tailwind"],
    sourceCode:"https://github.com/Jitalipatel19/portfolio"
  },

  // INTERNIFY
  {
    title: "Internify",
    image: project2,
    description:
      "Keep Record of Student's Internships.",
    technologies: ["HTML", "CSS", "JS", "PHP", "MySQLDB"],
    sourceCode:"https://github.com/Jitalipatel19/Internify"
  },

  // AMAZON FRONTEND
  {
    title: "Amazon-Frontend",
    image: project3,
    description:
      "This is small amazon clone in which frontend designed.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    sourceCode:"https://github.com/Jitalipatel19/Amazon-Frontend"
  },

  // HOSTEL MANAGEMENT
  {
    title: "Hostel Management",
    image: project4,
    description:
      "This is hostel management in which students who get admission in another city's collage/school they can book hostel room online.",
    technologies: ["HTML","CSS","JS","PHP"],
    sourceCode:"https://github.com/Jitalipatel19/Hostel-Management"
  },

  
];

// CONTACT CONTENT
export const CONTACT = {
  address: "Valsad,Gujarat ",
  phoneNo: "+91 4555 666 00 ",
  email: "jitalipatel21@gmail.com",
};

// CERTIFICATION CONTENT
export const CERTIFICATION = {
  name1: "Python Beginner",
  pdfLink1: "./src/assets/certificate/Python.pdf",
  name2: "Android Developer",
  pdfLink2: "./src/assets/certificate/Mobileappdev.pdf"
};

export const EDUCATION = {
  school1 : "Secondary School",
  percentage1 : 56.06,
  duration1 :2016,
  school_name1 : "Maniba Sarvajanik Vidhyalay",
  city1 : "Valsad",

  school2 : "Higher Secondary",
  percentage2 : 49.23,
  duration2 :2019,
  school_name2 : "Maniba Sarvajanik Vidhyalay",
  city2 : "Valsad",

  degree1 : "Bachelor of Computer Applications",
  degree_percentage_1 : 76.30,
  duration3 :2019-2022,
  collage_name1 : "Dolat-Usha Institute of Applied Sciences And Dhiru-Sarla Institute Of Management And Commerce",
  city3 : "Valsad",

  degree2 : "Masters of Computer Applications",
  degree_percentage_2 : 70.10,
  duration4 :2022-2024,
  collage_name2 : "Lalbhai Dalpatbhai College of Engineering",
  city4 : "Ahemedabad",
}
export const RESUME ={
  resume :"./src/assets/resume/jitali.pdf"
}

