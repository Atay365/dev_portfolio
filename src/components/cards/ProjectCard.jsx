import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 490px;
  width: 330px;
  background-color: rgba(90, 90, 90, 0.25);
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid rgba(232, 232, 232, 0.125);
  box-shadow: rgba(232, 232, 232, 0.15) 0px 4px 24px;
  padding: 26px 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    filter: brightness(1.3);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  background-color: white;
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0 2px;
`;
const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const Date = styled.div`
  font-size: 0.75rem;
  font-weight: 500px;
  margin-left: 2px;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    font-size: 0.65rem;
  }
`;
const Desc = styled.div`
  font-size: 1rem;
  font-weight: 500;
  overflow: hidden;
  margin-top: 8px;
  color: ${({ theme }) => theme.text_secondary + 99};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
const Button = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  margin-top: 1rem;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />
      <Tags></Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Desc>{project.description}</Desc>
      </Details>
      <Button href={project.github} target="_blank">
        View Code
      </Button>
    </Card>
  );
};

export default ProjectCard;
