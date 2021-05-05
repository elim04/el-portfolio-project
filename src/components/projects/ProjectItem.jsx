import "./ProjectItem.scss";

const ProjectItem = ({ name, imageSrc, githubLink, description, stack }) => {
  return (
    <a className="project-item" href={githubLink} target="_blank">
      <div>
        <img className="project-item-img" src={imageSrc} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{stack}</p>
      </div>
    </a>
  );
};

export default ProjectItem;
