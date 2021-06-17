import React from "react";

// import { FaGithub} from 'react-icons/fa'
// import { IconContext } from "react-icons";

import styled from "styled-components";
import { Button, Container } from "../../GlobalStyles";
import imgMain from "../../assets/ArcadeSecretary/LandingPage.png";
import imgFirstSearch from "../../assets/ArcadeSecretary/InGameFailedLetter.png";
import imgStyleGuid from "../../assets/ArcadeSecretary/GameFinish.png";

// Containers
const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  margin-top: 10%;
  margin-left: 20%;
  text-align: left;
  padding: 10px;
  width: 60%;
  @media screen and (max-width: 960px) {
    min-width: 90vw;
    margin-left: 0;
    overflow-x: hidden;
  }
`;
const Desc = styled.div`
  display: flex;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  justify-content: center;
  align-items: left;
  padding: 10px;
  width: 100%;
  margin-top: 3rem;
  @media screen and (max-width: 960px) {
    margin-top: 1rem;
    flex-direction: column;
    justify-content: flex-end;
    min-width: 90vw;
    margin-left: 0;
    overflow-x: hidden;
  }
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem 2rem;
  align-items: left;
  padding: 10px;
  min-width: 40%;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: flex-end;
    min-width: 90vw;
    margin-left: 0;
    overflow-x: hidden;
  }
`;

// Images
const ImgWrapper = styled.div`
  margin: 1rem 0;
  max-width: 860px;

  @media screen and (max-width: 960px) {
  }
`;
const Img = styled.img`
  margin: 10px -10px;
  border-radius: 15px;
  @media screen and (max-width: 960px) {
    max-width: 90vw;

    min-width: 300px;
  }
`;

// Text
const Title = styled.h1`
  font-family: "Roboto";
  font-size: 48px;
  margin: 0.5rem 0;
  color: #f2f2f2;
  @media screen and (max-width: 960px) {
    font-size: 36px;
  }
`;
const TopLineText = styled.p`
  margin: 1rem 0;
  font-size: 24px;
  color: #e7b157;
  @media screen and (max-width: 960px) {
    font-size: 18px;
  }
`;
const SubTitle = styled.p`
  margin: 1rem 0;

  font-size: 16px;
  color: #e7b157;
  @media screen and (max-width: 960px) {
    font-size: 14px;
    margin-bottom: 2rem;
  }
`;
const InnerTitles = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  color: #5dbee8;
  @media screen and (max-width: 960px) {
    font-size: 32px;
  }
`;
const InnerText = styled.p`
  font-size: 16px;
  color: #f2f2f2;
  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

const CompariTube = () => {
  return (
    <Container>
      <ContentWrapper>
        <TopLineText>Coder Academy Hackathon 2021</TopLineText>
        <Title>Arcarde Secretary</Title>
        <SubTitle>
          Designed and Developed by Roba Elshazly, Gizelle and Anthony Mann
        </SubTitle>
        <Button
          style={{ margin: "2rem 0", fontSize: "24px" }}
          primary
          href="https://arcade-secretary.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </Button>

        <ImgWrapper>
          <Img
            src={imgMain}
            width="800px"
            alt="Arcade Secretary application main Image"
          />
        </ImgWrapper>
        <Desc>
          <InnerContainer>
            <InnerTitles>The Purpose</InnerTitles>
            <InnerText>
              <p>
                {" "}
                Arcade Secretary is a score-based speed typing game. Secretaries
                are armed with their keyboards and lighting reflexes when they
                enter the fast-paced corporate battlefield where speed and
                accuracy pave the way to victory!.
              </p>
              <h2 style={{ margin: "1rem 0" }}>Criteria</h2>
              <li style={{ fontWeight: "600" }}>1. We had to use ReactJs</li>
              <li style={{ fontWeight: "600" }}>
                3. Must work in a team of at least 2 people
              </li>
              <li style={{ fontWeight: "600" }}>3. 24 hours to complete</li>

              <h2 style={{ margin: "1rem 0" }}>Application Highlights</h2>
              <li style={{ fontWeight: "600" }}>
                {" "}
                - Limited Page refreshes thanks to useState{" "}
              </li>
              <li style={{ fontWeight: "600" }}>
                - Accuracy, WPM, and Score Calculations{" "}
              </li>
              <li style={{ fontWeight: "600" }}>
                - Incorrect letter detection and visual representation.
              </li>
            </InnerText>
          </InnerContainer>
          <ImgWrapper>
            <Img
              src={imgFirstSearch}
              width="800px"
              alt="Showing mispelled Letter detection"
            />
          </ImgWrapper>
        </Desc>
        <Desc imgStart>
          <InnerContainer>
            <InnerTitles>The Design</InnerTitles>
            <InnerText>
              <p>
                The design of this application we wanted it to feel like the old
                school arcade games.
              </p>
            </InnerText>
          </InnerContainer>
          <ImgWrapper>
            <Img
              src={imgStyleGuid}
              width="800px"
              alt="Arcade Secretary Finish Page"
            />
          </ImgWrapper>
        </Desc>
      </ContentWrapper>
    </Container>
  );
};

export default CompariTube;
