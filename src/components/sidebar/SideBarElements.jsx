import styled from "styled-components";

import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  font-family: "Source Sans Pro", sans-serif;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: white;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 15%;
  justify-content: center;
  font-size: 3rem;
  text-decoration: none;
  list-style: none;
  transition; 0.2s ease-in-out;
  color: white;
  cursor: pointer;

  &:hover {
    color: #a8b49a;
    transition: 0.2s ease-in-out;
  }
`;
