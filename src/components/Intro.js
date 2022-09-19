import React from "react";
import styled from "styled-components";
import me from "../assets/Images/me3.jpg";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  width: 65vw;
  position: absolute;
  height: 55vh;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  z-index: 1;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.text};
  border-right: 2px solid ${(props) => props.theme.text};

  @media (max-width: 700px) {
    flex-direction: column;
    width: 70vw;
    height: 70vh;
    background: linear-gradient(
          to bottom,
          ${(props) => props.theme.body} 50%,
          ${(props) => props.theme.text} 50%
        )
        right,
      linear-gradient(
          to bottom,
          ${(props) => props.theme.body} 50%,
          ${(props) => props.theme.text} 50%
        )
        left;
    background-repeat: no-repeat;
    background-size: 2px 100%;
    border: 0;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
  }
`;

const Subbox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  img {
    bottom: 0;
    width: calc(30 * 1vw);
    border-radius: 100%;
    padding: 2rem;
    height: calc(30 * 1vw);
    align-self: center;
  }
  @media (max-width: 700px) {
    width: 100%;
    height: 50%;
    img {
      width: calc(50 * 1.5vw);
      height: calc(50 * 1.5vw);
    }
  }
`;
const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem;
  & > :last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
    @media (max-width: 700px) {
      font-size: calc(0.5rem + 1vw);
    }
  }
`;
const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "70vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <Subbox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Mani.</h3>
          <h6>I design and Code simple yet beautiful websites.</h6>
        </Text>
      </Subbox>
      <Subbox>
        <motion.img
          className='pic'
          src={me}
          alt='me'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
      </Subbox>
    </Box>
  );
};

export default Intro;
