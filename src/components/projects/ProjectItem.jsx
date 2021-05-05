import "./ProjectItem.scss";

// import StackButton from "./stackbuttons/StackButton";
import StackButtonList from "./stackbuttons/StackButtonList";

const ProjectItem = ({ name, imageSrc, githubLink, description, stack }) => {
  return (
    <div className="project-item">
      <a href={githubLink} target="_blank" rel="noreferrer">
        <img className="project-item-img" src={imageSrc} alt={name} />
      </a>
      <div className="project-item-desc">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="project-item-stack">
          <StackButtonList techStack={stack} />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
