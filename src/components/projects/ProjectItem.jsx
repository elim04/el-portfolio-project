import "./ProjectItem.scss";

const ProjectItem = ({ name, imageSRC, githubLink, description, stack }) => {
  return <div className="project-item">{name}</div>;
};

export default ProjectItem;
