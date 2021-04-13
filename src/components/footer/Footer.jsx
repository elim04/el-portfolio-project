import { FaLinkedin, FaGithub } from "react-icons/fa";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-icons">
      <a href="https://github.com/elim04" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/emilylim04/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </footer>
  );
};

export default Footer;
