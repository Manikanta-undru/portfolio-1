import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Github, Instagram, Linkedin, Twitter } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";
import { motion } from "framer-motion";
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
  .socialIcon > :first-child {
    width: 25px;
    height: 25px;
  }
  @media (max-width: 700px) {
    left: 1rem;
    .socialIcon > :first-child {
      width: 20px;
      height: 20px;
      fill: ${(props) =>
        props.theme === "light" ? DarkTheme.body : DarkTheme.text};
    }
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  z-index: 3;
  background-color: ${(props) =>
    props.theme === "light" ? DarkTheme.body : DarkTheme.text};
  @media (max-width: 700px) {
    height: 6rem;
    background-color: ${(props) =>
      props.theme === "light" ? DarkTheme.body : DarkTheme.text};
  }
`;

const SocialIcons = (props) => {
  return (
    <Icons theme={props.theme}>
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: [0, 1, 1.5, 1],
          transition: { type: "spring", duration: 1, delay: 1 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          className='socialIcon'
          style={{ color: "inherit" }}
          target='_blank'
          to={{ pathname: "https://google.com" }}
        >
          <Github></Github>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: [0, 1, 1.5, 1],
          transition: { type: "spring", duration: 1, delay: 1.2 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          className='socialIcon'
          style={{ color: "inherit" }}
          target='_blank'
          to={{ pathname: "https://google.com" }}
        >
          <Twitter></Twitter>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: [0, 1, 1.5, 1],
          transition: { type: "spring", duration: 1, delay: 1.4 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          className='socialIcon'
          style={{ color: "inherit" }}
          target='_blank'
          to={{ pathname: "https://google.com" }}
        >
          <Linkedin></Linkedin>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: [0, 1, 1.5, 1],
          transition: { type: "spring", duration: 1, delay: 1.6 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          className='socialIcon'
          style={{ color: "inherit" }}
          target='_blank'
          to={{ pathname: "https://google.com" }}
        >
          <Instagram></Instagram>
        </Link>
      </motion.div>
      <Line
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
          transition: { type: "spring", duration: 1, delay: 1 },
        }}
        theme={props.theme}
      />
    </Icons>
  );
};

export default SocialIcons;
