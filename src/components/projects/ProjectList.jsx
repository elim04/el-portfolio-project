import ProjectItem from "./ProjectItem";
import { projectData } from "./projectData/projectData";
import "./Projects.scss";

export default function Projects() {
  const parsedProjects = projectData.map((project) => {
    return (
      <ProjectItem
        name={project.name}
        imageSrc={project.imageSRC}
        githubLink={project.githubLink}
        description={project.description}
        stack={project.techStack}
      />
    );
  });

  return (
    <section className="projects-section">
      <div className="container">{parsedProjects}</div>
    </section>
  );
}
