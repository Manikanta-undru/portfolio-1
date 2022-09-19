import React, { useEffect, useRef } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { DarkTheme } from "./Themes";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";
import SoundBar from "../subComponents/SoundBar";

const Main = styled(motion.div)`
  background-color: ${(props) => props.theme.body};

  height: 400vh;
  position: relative;
  scrollbar-width: none;
`;

const Box = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 50vh;
  display: flex;
  @media (max-width: 700px) {
    left: calc(1rem + 10vw);
    top: 14rem;
  }
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;

  z-index: 1;

  height: 80px;
  width: 80px;
  @media (max-width: 700px) {
    right: 2rem;
    bottom: 2rem;
    height: 60px;
    width: 60px;
  }
`;

//Framer motion
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.scrollY}px)`;
      yinyang.current.style.transform = `rotate(${-window.scrollY}deg)`;
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <SoundBar />
      <Main
        initial={{ x: -1000, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.2,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            type: "spring",
            duration: 0.5,
          },
        }}
      >
        <BigTitle top='10%' right='20%' text='WORK' />
        <SocialIcons theme='dark' />
        <PowerButton />
        <LogoComponent />
        <Rotate ref={yinyang}>
          <YinYang fill={DarkTheme.text} />
        </Rotate>
        <Box ref={ref} variants={container} initial='hidden' animate='show'>
          {Work.map((data, key) => {
            return <Card key={key} data={data} />;
          })}
        </Box>
      </Main>
    </ThemeProvider>
  );
};

export default WorkPage;
