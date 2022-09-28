import React from "react";
import styled, { ThemeProvider } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponent from "../subComponents/ParticleComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { Design, Develope } from "./AllSvgs";
import { LightTheme } from "./Themes";
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
  @media (max-width: 700px) {
    flex-direction: column;
    padding-top: 10vh;
  }
`;

const Box = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 34vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  cursor: text;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 700px) {
    width: 70vw;
    height: 45vh;
    margin-bottom: 3vh;
  }
  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Title = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: calc(0.8em + 1vw);
  margin-bottom: 1rem;
  & > :first-child {
    margin-right: 1rem;
  }
  ${Box}:hover &>* {
    fill: ${(props) => props.theme.body};
  }
`;
const Description = styled.div`
  font-size: calc(0.3em + 1vw);
  padding: 0.5rem 0;
  strong {
    text-transform: uppercase;
    font-weight: 800;
    display: block;
  }
  & > :last-child {
    padding: 0 2rem;
  }
`;

const SkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <SocialIcons theme='dark' />
      <PowerButton />
      <LogoComponent />
      <SoundBar />

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
        <ParticleComponent theme='light' />
        <Box>
          <Title>
            <Design width={40} height={40} /> Front-End
          </Title>
          <Description>
            I can design and code beautiful UIs using wide range of frameworks
            and libraries.
          </Description>
          <Description>
            <strong>Skillset</strong>
            <ul>
              <li>React and Redux</li>
              <li>Angular</li>
              <li>HTML&CSS and Javascript</li>
              <li>Bootstrap, Tailwind CSS</li>
              <li>Webpack, SASS, Styled Components</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Git</li>
              <li>Visual Studio Code</li>
              <li>Adobe XD</li>
            </ul>
          </Description>
        </Box>
        <Box>
          <Title>
            <Develope width={40} height={40} /> Back-End
          </Title>
          <Description>
            I can develope and deploy Node and Express apps and APIs.
          </Description>
          <Description>
            <strong>Skills</strong>
            <ul>
              <li>Node Js, Express Js</li>
              <li>Working knowledge of MongoDB, DynamoDb and MySql.</li>
              <li>Previously worked with PHP.</li>
              <li>
                Have experience in Deploying apps to AWS,Heroku and Firebase.
              </li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>AWS CLI,Heroku CLI and Firebase CLI</p>
          </Description>
        </Box>
        <BigTitle text='SKILLS' top='80%' right='20%' color='light' />
      </Main>
    </ThemeProvider>
  );
};

export default SkillsPage;
