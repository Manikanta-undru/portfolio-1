import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import track from "../assets/audio/u-said-it-v13-1167.mp3";

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 8rem;
  top: 3rem;
  z-index: 10;
  @media (max-width: 700px) {
    left: 1rem;
    top: 10rem;
    & > :not(:last-child) {
      height: 0.6rem;
      width: 2px;
      margin: 0 2px;
    }
  }
  & > :nth-child(1) {
    animation-delay: 0s;
  }
  & > :nth-child(2) {
    animation-delay: 0.2s;
  }
  & > :nth-child(3) {
    animation-delay: 0.4s;
  }
  & > :nth-child(4) {
    animation-delay: 0.6s;
  }
  & > :nth-child(5) {
    animation-delay: 0.8s;
  }
`;
const play = keyframes`
    0%{
        transform: scaleY(1);
    }
    50%{
        transform: scaleY(2);
    }
    100%{
        transform: scaleY(1);
    }
`;
const Link = styled.span`
  height: 1.2rem;
  width: 4px;
  border: 1px solid ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.text};
  margin: 0 0.1rem;
  animation: ${play} 1.1s ease infinite;
  animation-play-state: ${(props) => (props.$on ? "running" : "paused")};
`;
const SoundBar = () => {
  const ref = useRef(null);
  const [musicOn, setMusicOn] = useState(false);
  const handleClick = () => {
    setMusicOn(!musicOn);
    if (!musicOn) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <Box onClick={() => handleClick()}>
      <Link $on={musicOn} />
      <Link $on={musicOn} />
      <Link $on={musicOn} />
      <Link $on={musicOn} />
      <Link $on={musicOn} />

      <audio src={track} ref={ref} loop></audio>
    </Box>
  );
};

export default SoundBar;
