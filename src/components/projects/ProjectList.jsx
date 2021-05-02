import ProjectItem from "./ProjectItem";
import "./Projects.scss";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
      </div>
    </section>
  );
}
