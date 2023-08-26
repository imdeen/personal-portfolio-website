import javascript from '../assets/javascript.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/reactjs.png'
import clang from '../assets/c-lang.png'
import mongodb from '../assets/mongodb.png'
import expressjs from '../assets/express.png'
import nodejs from '../assets/nodejs.png'
import python from '../assets/python.png'
import git from '../assets/git.png'
import reactState from '../assets/project/reactState.png'
import blogging from '../assets/project/blogging.png'
import portfolio from '../assets/project/portfolio.png'





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
    name: "c-language",
    icon: clang

  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "reactjs",
    icon: react
  },
  {
    name: "nodejs",
    icon: nodejs

  },
  {
    name: "expressjs",
    icon: expressjs
  },
  {
    name: "mongodb",
    icon: mongodb
  },
  {
    name: "git",
    icon: git

  },

];

const projects = [
  {
    name: "Real State Website",
    description:
      "a real-state website using MERN stack in which users can browse, add and book properties with map integration.",
    image: reactState,
    source_code_link: "https://github.com/imdeen/real-state-website",
  },
  {
    name: "Blogging page",
    description:
      "a blogging web application for users to upload daily blogs with image and comments section for feedback.",
    image: blogging,
    source_code_link: "https://github.com/imdeen/blog-application",
  },
  {
    name: "personal-portfolio-website",
    description:
      "a portfolio website with added 3d model showcasing projects with smooth transition and great experience",
    image: portfolio,
    source_code_link: "https://github.com/imdeen/personal-portfolio-website",
  }

  // {
  //   name: "Real-time chat application",
  //   description:
  //     "a real-time chat application that enables users to communicate with each other instantly using websockets for real-time chat application.",
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];


export { technologies, projects };