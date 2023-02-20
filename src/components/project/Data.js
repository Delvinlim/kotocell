import portfolio from "../img/react_portfolio.png";
import pms from "../img/pms.png";
import kiddos from "../img/kiddos.png"
import restaurant from "../img/restaurant.png"
import skinlab from "../img/skinlab.jpg"

const reactPortfolio = {
  title: "Portfolio Site",
  type: "Featured project",
  logo: undefined,
  images: {
    light: portfolio,
    dark: portfolio,
  },
  description:
    "Portfolio is a must! this website is built as my personal site in order to showcase my portfolio and also as a part of my portfolio",
  techStack: ["React", "Styled Components", "Node JS"],
  features: [
    "PWA",
    "Dark Theme",
    "Multiple Language Support",
    "Outgoing Email",
    "Modern Design"
  ],
  link: undefined,
  repo: undefined,
}

const projectManagementSystem = {
  title: "Project Management System",
  type: "Featured project",
  logo: undefined,
  images: {
    light: pms,
    dark: pms,
  },
  description:
    "Project Management System built as a final Sistem Basis Data Project for my second semester at college, mainly purpose of this project is to allow student manage their project easily",
  techStack: ["PHP", "Bootstrap", "Javascript"],
  features: [
    "Authentication System",
    "Multirole User",
    "Creating new projects and tasks",
    "Friends System",
    "Testimonials",
  ],
  link: undefined,
  repo: "https://github.com/Delvinlim/proms",
};

const gameSite = {
  title: "Kiddos Games",
  type: "Collaborated project",
  logo: undefined,
  images: {
    light: kiddos,
    dark: kiddos,
  },
  description:
    "Kiddos Games is my First Semester Final Project which is a simple website that contains 3 Games developed by a team insist of 6 people.",
  techStack: ["HTML", "Bootstrap", "Express JS", "Node JS"],
  features: [
    "Modern Web Design",
    "Gamification",
    "Multiplayer Support",
  ],
  link: "https://kiddos-games.herokuapp.com/",
  repo: "https://github.com/Delvinlim/uas-project",
};

const skinlabAPI = {
  title: "SkinLab Mobile Apps API",
  type: "Featured project",
  logo: undefined,
  images: {
    light: skinlab,
    dark: skinlab,
  },
  description:
    " An Internal API build for SkinLab The Medical Spa Mobile Apps, main functionality are related to CRM, Shopping, and Appointment.",
  techStack: ["Python", "PostgreSQL", "Odoo"],
  features: [
    "Shopping",
    "Booking System",
    "Customer Management",
    "Gamification",
    "Payment Integration",
  ],
  link: undefined,
  repo: undefined,
};

const bwaRestaurant = {
  title: "Restaurant Web Design",
  type: "Featured project",
  logo: undefined,
  images: {
    light: restaurant,
    dark: restaurant,
  },
  description:
    "This project is made in purpose to join the coding challenge held by BWA which have a goal to train our speed for splicing a figma design into code",
  techStack: ["HTML", "CSS", "Bootstrap"],
  features: [
    "Modern Web Design",
    "Catchy Design",
  ],
  link: undefined,
  repo: "https://github.com/Delvinlim/bwa-restaurant",
};

export const data = [reactPortfolio, projectManagementSystem, gameSite, skinlabAPI, bwaRestaurant];
