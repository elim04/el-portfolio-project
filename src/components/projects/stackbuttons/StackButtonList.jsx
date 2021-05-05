import StackButton from "./StackButton";

export default function StackButtonList({ techStack }) {
  let parsedTechStack = techStack.map((techStackItem) => {
    return <StackButton>{techStackItem}</StackButton>;
  });

  return parsedTechStack;
}
