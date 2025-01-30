"use client";
import styled from "styled-components";

const NavBar = () => {
  const navLinks = ["Producer", "Consumer", "User"];
  return (
    <NavContainer>
     {/* <Logo href="/">Logo</Logo> */}
     
      <LinkButton href="/producer" $flexGrow={3}>Producer</LinkButton>
      <LinkButton href="/consumer" $flexGrow={2}>Consumer</LinkButton>
      <LinkButton href="/" >User</LinkButton>

     
    </NavContainer>
  );
};
export default NavBar;


const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  //flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  border-radius: 8px;
  gap: 5px 5px;
  margin: 10px 0px 20px 0px;
  position: sticky;
  top: 0;
  z-index: 20;
  @media screen and (max-width: 500px) {
    flex-direction: column;    
  }
  `;

const LinkButton = styled.a<{$flexGrow?: number}>`
  font-size: 1.5vw;
  border: 2px solid #000;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  flex-grow: ${(props) => props.$flexGrow || 1};
  @media screen and (max-width: 500px) {
    
    width: 100%;
    flex-basis: 100%;
    transition: all 0.5s ease;
  }
`;

const Logo = styled.a`
  color: #000;
  font-size: 2vw;
  border: 2px solid #000;
  border-radius: 8px;
  padding: 8px;
  flex-grow: 1;
  text-align: center;
  flex-basic: | auto;
`;