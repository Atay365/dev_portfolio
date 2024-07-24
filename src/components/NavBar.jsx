import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 75rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;
const NavLogo = styled(LinkR)`
  width: 80%
  padding: 0 .375rem;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size 17.6px;
`;
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-itmes: center;
  gap: 32px;
  padding: 2rem;
  list-style: none;
  @media screen and (max-width: 48rem) {
    display: none;
  }
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition; all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 0.375rem;
  @media screen and (max-width: 48rem) {
    display: none;
  }
`;
const GitButton = styled.a`
  border: .0625rem solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  cursor: pointer;
  padding: .0391rem 20px;
  font-size: 16px;
  font-weight: 500;
  transition; all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;
const MobileNavIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 48rem) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 16px;
  padding: 2rem;
  list-style: none;
  padding: 0.75rem 2.5rem 1.5rem 2.5rem;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 5rem;
  right: 0;

  transition: all 1s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(0%)")};
  border-radius: 0 0 1.25rem 1.25rem;
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Portfolio</NavLogo>

        <MobileNavIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileNavIcon>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">
              Education
            </NavLink>
            <GitButton
              href={Bio.github}
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              GitHub Profile
            </GitButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GitButton href={Bio.github} target="_Blank">
            GitHub
          </GitButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default NavBar;
