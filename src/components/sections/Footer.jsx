import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
width: 100%;
paddingL 2rem 0;
`;
const FooterWrapper = styled.div``;
const Logo = styled.div``;
const Nav = styled.div``;
const NavLink = styled.div``;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Austin Taylor</Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
