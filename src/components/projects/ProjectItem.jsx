import "./ProjectItem.scss";

// import StackButton from "./stackbuttons/StackButton";
import StackButtonList from "./stackbuttons/StackButtonList";

const ProjectItem = ({ name, imageSrc, githubLink, description, stack }) => {
  return (
    <div className="project-item">
      <div className="content">
        <a href={githubLink} target="_blank" rel="noreferrer">
          <div className="content-overlay"></div>
          <img className="project-item-img" src={imageSrc} alt={name} />
          <div className="content-details fadeIn-bottom">
            <h3 className="content-title">Click here to see on GitHub</h3>
          </div>
        </a>
      </div>
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
