//Home Button
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { PowerBtn } from "../components/AllSvgs";

const Power = styled(Link)`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 100%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  cursor: pointer;
  color: inherit;
  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }

  @media (max-width: 700px) {
    width: 2rem;
    height: 2rem;
    & > :first-child {
      width: 50px;
      height: 50px;
    }
  }
`;

const PowerButton = () => {
  return (
    <Power to='/'>
      <PowerBtn />
    </Power>
  );
};

export default PowerButton;
