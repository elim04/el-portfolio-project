import { Link } from "react-router-dom";
import "./Nav.scss";
export default function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar_home">
        <Link className="navbar_pages_link" to="/">
          Home
        </Link>
      </div>
      <div className="navbar_pages">
        <Link className="navbar_pages_link" to="/about">
          About
        </Link>
        <Link className="navbar_pages_link" to="/projects">
          Projects
        </Link>
        <Link className="navbar_pages_link" to="/experiments">
          Experiments
        </Link>
      </div>
    </nav>
  );
}
