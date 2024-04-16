import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/reactjs.png";
import clang from "../assets/c-lang.png";
import mongodb from "../assets/mongodb.png";
import expressjs from "../assets/express.png";
import nodejs from "../assets/nodejs.png";
import python from "../assets/python.png";
import git from "../assets/git.png";
import reactState from "../assets/project/reactState.png";
import blogging from "../assets/project/blogging.png";
import portfolio from "../assets/project/portfolio.png";
import movieApp from "../assets/project/movieApp.png";
import ticktaktoe from "../assets/project/tick-tack-toe.png";

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
    icon: clang,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "reactjs",
    icon: react,
  },
  {
    name: "nodejs",
    icon: nodejs,
  },
  {
    name: "expressjs",
    icon: expressjs,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Real State Website",
    description:
      "a real-state website using MERN stack in which users can browse, add and book properties with map integration.",
    image: reactState,
    source_code_link: "https://github.com/imdeen/real-state-website",
    link: "https://willowy-donut-169448.netlify.app",
  },
  {
    name: "Imdb-clone-app",
    description:
      "an imdb copy in which user can browse upcoming movies and see the movie detail.",
    image: movieApp,
    source_code_link: "https://github.com/imdeen/imdb-clone-app",
    link: "https://loquacious-strudel-cdf7e0.netlify.app",
  },
  {
    name: "Personal-portfolio-website",
    description:
      "a portfolio website with added 3d model showcasing projects with smooth transition and great experience",
    image: portfolio,
    source_code_link: "https://github.com/imdeen/personal-portfolio-website",
    link: "https://deenmohd.netlify.app/",
  },
  {
    name: "Tic-tac-toe",
    description:
      "it is a two-player game in which the objective is to take turns and mark the correct spaces in a 3x3 (or larger) grid",
    image: ticktaktoe,
    source_code_link: "https://github.com/imdeen/tic-tac-toe",
    link: "https://cute-zabaione-463535.netlify.app/",
  },
  {
    name: "Blogging page",
    description:
      "a blogging web application for users to upload daily blogs with image and comments section for feedback.",
    image: blogging,
    source_code_link: "https://github.com/imdeen/blog-application",
    link: "https://github.com/imdeen/blog-application",
  },

  // {
  //   name: "Real-time chat application",
  //   description:
  //     "a real-time chat application that enables users to communicate with each other instantly using websockets for real-time chat application.",
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { technologies, projects };
