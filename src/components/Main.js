import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import { motion } from "framer-motion";
import SoundBar from "../subComponents/SoundBar";

const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 1vw);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 700px) {
    right: 1rem;
    /* color: ${(props) => props.theme.body}; */
  }
`;

const Work = styled(Link)`
  color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: 2.7rem;
  transform: translate(-50%, -50%) rotate(-90deg);

  text-decoration: none;
  z-index: 1;
  transition: color 0.2s ease 0.5s;
  @media (max-width: 700px) {
    left: 1.5rem;
    text-shadow: 1px 1px 10px #000;
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Skills = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
`;
const About = styled(Link)`
  color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  transition: color 0.2s ease 0.5s;
  @media (max-width: 700px) {
    color: ${(props) => props.theme.text};
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.$click ? "85%" : "50%")};
  left: ${(props) => (props.$click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 1s ease;

  @media (max-width: 700px) {
    top: ${(props) => (props.$click ? "90%" : "50%")};
    left: ${(props) => (props.$click ? "92%" : "50%")};
    & > :first-child {
      width: ${(props) => (props.$click ? "40px" : "150px")} !important;
      height: ${(props) => (props.$click ? "40px" : "150px")} !important;
    }
  }

  & > :first-child {
    width: ${(props) => (props.$click ? "120px" : "200px")};
    height: ${(props) => (props.$click ? "120px" : "200px")};
    animation: ${rotate} infinite 1.5s linear;
  }
  & > :last-child {
    padding-top: 1rem;
  }
`;

const DivideDiv = styled.div`
  position: absolute;
  right: 50%;
  top: 0;
  bottom: 0;
  height: ${(props) => (props.$click ? "100%" : "0%")};
  width: ${(props) => (props.$click ? "50%" : "0%")};
  background-color: #000;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
  @media (max-width: 700px) {
    right: 0;
    top: 0;
    bottom: 50%;

    width: ${(props) => (props.$click ? "100%" : "0%")} !important;
    height: ${(props) => (props.$click ? "50%" : "0%")} !important;
  }
`;

const Main = () => {
  const [click, setClick] = useState(false);
  return (
    <MainContainer
      initial={{
        opactiy: 0,
      }}
      animate={{
        opactiy: 1,
        transition: { type: "linear", duration: 1, delay: 0.5 },
      }}
      exit={{
        opactiy: 0,
        y: -800,
        transition: { type: "linear", duration: 0.8 },
      }}
    >
      <DivideDiv $click={click} />
      <Container>
        <LogoComponent click={click}></LogoComponent>
        <SoundBar />
        <PowerButton></PowerButton>

        <SocialIcons theme={click ? "light" : "dark"} click={click} />
        <Center $click={click}>
          <YinYang onClick={() => setClick(!click)}></YinYang>
          <span hidden={click}>click here</span>
        </Center>
        <Contact target='_blank' href='mailto:manikantaksi2@gmail.com'>
          <motion.h3
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi...
          </motion.h3>
        </Contact>
        <Work to='/work' $click={click}>
          <motion.h2
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </Work>
        <BottomBar>
          <About to='/about' $click={click}>
            <motion.h2
              initial={{
                y: 200,
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </About>
          <Skills to='/skills'>
            <motion.h2
              initial={{
                y: 200,
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills.
            </motion.h2>
          </Skills>
        </BottomBar>
        {click ? <Intro /> : null}
      </Container>
    </MainContainer>
  );
};

export default Main;
