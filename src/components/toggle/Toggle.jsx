import { func, string } from "prop-types";
import { RiMoonClearFill } from "react-icons/ri";

import { MdWbSunny } from "react-icons/md";
import { ToggleContainer } from "./ToggleContainer";

import styled from "styled-components";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <MdWbSunny className="sun" />
      <RiMoonClearFill className="moon" />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
