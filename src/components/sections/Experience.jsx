import { styled } from "styled-components";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-bottom: 2rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 3.25rem;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 2rem;
  }
`;
const Desc = styled.div`
  font-size: 1.125rem;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const Experience = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Experience</Title>
        <Desc>Blah Blah Blah</Desc>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              experience={experience}
              key={`experience-${index}`}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
