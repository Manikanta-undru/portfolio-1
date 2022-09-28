import React from "react";
import styled from "styled-components";
import { Github, Instagram, Linkedin, Twitter } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";
import { motion } from "framer-motion";
const Link = styled.a``;
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
    fill: ${(props) =>
      props.theme === "light" ? DarkTheme.text : DarkTheme.body};
  }
  @media (max-width: 700px) {
    left: 1rem;
    .socialIcon > :first-child {
      width: 20px;
      height: 20px;
      fill: ${(props) => {
        if (props.$click) {
          return props.theme === "light" ? DarkTheme.body : DarkTheme.text;
        } else {
          return props.theme === "light" ? DarkTheme.text : DarkTheme.body;
        }
      }};
    }
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  z-index: 3;
  background-color: ${(props) =>
    props.theme === "light" ? DarkTheme.text : DarkTheme.body};
  @media (max-width: 700px) {
    height: 6rem;
    background-color: ${(props) => {
      if (props.$click) {
        return props.theme === "light" ? DarkTheme.body : DarkTheme.text;
      } else {
        return props.theme === "light" ? DarkTheme.text : DarkTheme.body;
      }
    }};
  }
`;

const SocialIcons = (props) => {
  return (
    <Icons theme={props.theme} $click={props.click}>
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: [0, 1, 1.5, 1],
          transition: { type: "spring", duration: 1, delay: 1 },
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          className='socialIcon'
          style={{ color: "inherit" }}
          target='_blank'
          href='https://github.com/ManiKsi'
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
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link className='socialIcon' style={{ color: "inherit" }}>
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
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          className='socialIcon'
          style={{ color: "inherit" }}
          target='_blank'
          href='https://linkedin.com/in/ManiKsi'
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
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          className='socialIcon'
          style={{ color: "inherit" }}
          target='_blank'
          href='https://instagram.com/mani_ksi_'
        >
          <Instagram></Instagram>
        </Link>
      </motion.div>
      <Line
        $click={props.click}
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
