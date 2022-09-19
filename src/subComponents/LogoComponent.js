import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  font-family: "Pacifico", cursive !important;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 3;
  transition: color 0.2s ease 0.5s;
  @media (max-width: 700px) {
    font-size: calc(1rem + 2vw);
    left: 1rem;
  }
`;

const LogoComponent = (props) => {
  return <Logo click={props.click}>Mani</Logo>;
};

export default LogoComponent;
