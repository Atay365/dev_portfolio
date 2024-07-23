import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImg.jpeg";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative:
  padding: 80px 30px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 90%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  postion: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  gap: 16px;

  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    order: 1;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 640px) {
    margin-bottom: 30px
`;

const Title = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  font-size: 3rem;
  line-height: 4rem;

  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    text-align: center;
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 0.5rem;
  }
`;
const TextLoop = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  font-size: 2rem;
  line-height: 4rem;
  display: flex;
  gap: 12px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
  @media (max-width: 640px) {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 0.5rem;
  }
`;
const Span = styled.div`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const SubTitle = styled.div`
  font-size: 1.25rem;
  line-height: 2rem;
  margin-bottom: 2.625rem;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.75rem;
    margin-bottom: 0.5rem;
  }
`;
const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 1rem 0;

  background: linear-gradient(
    146deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(90, 90, 90, 1) 57%,
    rgba(208, 208, 208, 1) 100%
  );
  border-radius: 50px;
  font-size: 1.125rem;
  font-weight: 600;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 1.125rem;
  }

  margin-bottom: 2rem;
`;
const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 12px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 50%;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  justify-content: end;
`;

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <StarCanvas />
        <HeroBg></HeroBg>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi I'm <br /> {Bio.name}
                </Title>
              </motion.div>
              <TextLoop>
                I am a
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>
              <ResumeButton>Checkout Resume</ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src={HeroImg} />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
