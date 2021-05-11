import { func, string } from "prop-types";

import styled from "styled-components";

import { RiMoonClearFill } from "react-icons/ri";

import { MdWbSunny } from "react-icons/md";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <button onClick={toggleTheme}>
      <RiMoonClearFill />
      <MdWbSunny />
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
