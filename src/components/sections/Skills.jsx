import React from "react";
import { styled } from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";

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

const SkillContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;
const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(90, 90, 90, 0.25);
  border: 1px solid rgba(232, 232, 232, 0.125);
  box-shadow: rgba(232, 232, 232, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 768px){
    max-width: 400px;
    padding 10px 36px;
  }
  @media (max-width: 500px){
    max-width: 330px;
    padding 10px 36px;
  }
`;
const SkillTitle = styled.div`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;
const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  padding: 0.5rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc style={{ marginBottom: "40px" }}>
          Here's a list of the skills that I have been actively working on!
        </Desc>
        <SkillContainer>
          {skills.map((skill, index) => (
            <Tilt>
              <Skill key={index}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={index_x}>
                      <SkillImage src={item.image} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
