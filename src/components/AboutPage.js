import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponent from "../subComponents/ParticleComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { DarkTheme } from "./Themes";
import astronaut from "../assets/Images/spaceman.png";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";
import SoundBar from "../subComponents/SoundBar";

const Main = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 55vw;
  height: 65vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  @media (max-width: 700px) {
    width: 65vw;
    height: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
  }
`;

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Main
        initial={{ opacity: 0 }}
        animate={{
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
        <SocialIcons theme='light' />
        <PowerButton />
        <LogoComponent />
        <SoundBar />
        <ParticleComponent theme='dark' />
        <Spaceman>
          <img src={astronaut} alt='spaceman' />
        </Spaceman>
        <Box>
          I'm a full stack web developer located in Hyderabad, Currently working
          at Deloitte.
          <br /> <br />
          I can work on both front-end and the back-end, I especially love
          working on the front end to create beautiful user interfaces with
          smooth transitions.
          <br /> <br />I consider my biggest strength to be my adaptability. I
          love traveling solo.
          <br></br>
          You can connect with me via social links.
        </Box>
        <BigTitle text='ABOUT' top='10%' left='5%' />
      </Main>
    </ThemeProvider>
  );
};

export default AboutPage;
