import "./ProjectItem.scss";

// import StackButton from "./stackbuttons/StackButton";
import StackButtonList from "./stackbuttons/StackButtonList";

const ProjectItem = ({ name, imageSrc, githubLink, description, stack }) => {
  return (
    <a
      className="project-item"
      href={githubLink}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <img className="project-item-img" src={imageSrc} alt={name} />
      </div>
      <div className="project-item-desc">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="project-item-stack">
          <StackButtonList techStack={stack} />
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
