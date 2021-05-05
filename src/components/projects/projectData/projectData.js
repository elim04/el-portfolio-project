import stonksImg from "./images/aboutpage.gif";
import schedulerImg from "./images/Addnewapt.gif";
import binderzImg from "./images/HomePage.png";
import tweeterImg from "./images/add-new-tweet.gif";
import jungleImg from "./images/home_page.png";
import tinyAppImg from "./images/new_url.gif";

export const projectData = [
  {
    name: "Stonks",
    imageSRC: stonksImg,
    githubLink: "https://github.com/elim04/Stonks",
    description:
      "An application where users can search for stocks and view an associated graph correlating news to areas of significant change in the stock value over a set period of time.",
    techStack:
      "React.js, Axios, Material UI, SASS, Firebase Auth, Node.js, Express, Socket.IO, postgreSQL, Twilio",
  },
  {
    name: "Scheduler",
    imageSRC: schedulerImg,
    githubLink: "https://github.com/elim04/scheduler",
    description:
      "A scheduler application where the user can create, edit and delete interview appointments. It combines a concise API with a WebSocket server to build a realtime experience.",
    techStack: "React.js, Node.js, SQL, Axios, Classnames, Normalize, ws",
  },
  {
    name: "Binderz",
    imageSRC: binderzImg,
    githubLink: "https://github.com/elim04/binderz",
    description:
      "A Pinterest like application where users can save learning resources to a central place that is publicly available to any user.",
    techStack: "JQuery, SCSS, Node.js, Express, postgreSQL",
  },
  {
    name: "Tweeter",
    imageSRC: tweeterImg,
    githubLink: "https://github.com/elim04/tweeter",
    description:
      "A single-page Twitter clone where users can create new tweets and post to website.",
    techStack: "AJAX, JQuery, Express, Node.js, MongoDB",
  },
  {
    name: "Jungle",
    imageSRC: jungleImg,
    githubLink: "https://github.com/elim04/jungle-rails",
    description: "A mini e-commerce app built with Rails 4.2.",
    techStack: "Ruby on Rails, PostgreSQL, Stripe",
  },
  {
    name: "TinyApp",
    imageSRC: tinyAppImg,
    githubLink: "https://github.com/elim04/tinyapp",
    description: "A bit.ly like RESTful URL shortening application.",
    techStack: "Express, Node.js, EJS",
  },
];
