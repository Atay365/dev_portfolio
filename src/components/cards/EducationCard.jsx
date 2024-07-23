import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 12px;
  margin-top: 5px;
  @media (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const School = styled.div`
  font-weight: 600px;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text_primary + 99};
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Degree = styled.div`
  color: ${({ theme }) => theme.text_secondary + 99};
  font-size: 0.875rem;
  font-weight: 500px;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
const Date = styled.div`
  color: ${({ theme }) => theme.text_secondary + 99};
  font-size: 0.75rem;
  font-weight: 400px;
  @media (max-width: 768px) {
    font-size: 0.65rem;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education?.school}
          src={education?.img}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "rgba(90, 90, 90, 0.25)",
        color: "#fff",
        boxShadow: "rgba(232, 232, 232, 0.15) 0px 4px 24px",
        border: "1px solid rgba(232, 232, 232, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(232, 232, 232, 0.3)",
      }}
      date={education.date}
    >
      <Top>
        <Image src={education.img} />
        <Body>
          <School>{education.school}</School>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
