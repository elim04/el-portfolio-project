import { Link } from "react-router-dom";
import "./Nav.scss";
export default function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar_home">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar_pages">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experiments">Experiments</Link>
      </div>
    </nav>
  );
}
