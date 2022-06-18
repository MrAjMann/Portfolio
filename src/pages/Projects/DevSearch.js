import React from "react";

// import { FaGithub} from 'react-icons/fa'
// import { IconContext } from "react-icons";

import styled from "styled-components";
import { Button, Container } from "../../GlobalStyles";
import imgMain from "../../assets/DevSearch/DevSearchLandingPage.png";
import imgStyleGuid from "../../assets/DevSearch/Color-Chart.png";
import imgPurpose from "../../assets/DevSearch/JobSeekerJobLists.png";
import imgJobSeeker from "../../assets/DevSearch/JobSeekerJobLists.png";
import imgEmployer from "../../assets/DevSearch/EmployerAddJob.png";
// import CirclePattern from '../../assets/CirclePattern.svg';

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

const FigmaEmbed = styled.div`
  margin: 1rem 0;

  max-width: 860px;
  @media screen and (max-width: 960px) {
  }
`;

// Images
const ImgWrapper = styled.div`
  margin: 1rem 0;
  max-width: 860px;
  max-height: fit-content;
  @media screen and (max-width: 960px) {
  }
`;
const Img = styled.img`
  margin: 10px -10px;
  border-radius: 15px;
  max-height: 660px;

  @media screen and (max-width: 960px) {
    max-width: 90vw;

    min-width: 300px;
  }
`;

const Iframe = styled.iframe`
  margin: 10px -10px;

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
  letter-spacing: 1.1px;
  font-size: 16px;
  color: #f2f2f2;
  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

const DevSearch = () => {
  return (
    <Container>
      <ContentWrapper>
        <TopLineText>Coder Academy Final Project 2021</TopLineText>
        <Title>DevSearch.io</Title>
        <SubTitle>
          Designed and Developed by Roba Elshazly and Anthony Mann
        </SubTitle>
        <Button
          style={{ margin: "2rem 0", fontSize: "24px" }}
          primary
          href="https://www.devsearch.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </Button>

        <ImgWrapper>
          <Img
            src={imgMain}
            width="800px"
            alt="CompariTube application main Image"
          />
        </ImgWrapper>
        <Desc>
          <InnerContainer>
            <InnerTitles>The Purpose</InnerTitles>
            <InnerText>
              <p>
                {" "}
                DevSearch is a new innovative job search engine, connecting
                employers within the tech industry to potential employee's.
              </p>

              <h2 style={{ margin: "1rem 0", letterSpacing: "1.3px" }}>
                Features and Functionality
              </h2>
              <ul>
                <h5 style={{ color: "#e7b157", letterSpacing: "1.3px" }}>
                  <em>Combined - This is features both parties share</em>
                </h5>
                <li style={{ fontWeight: "400" }}>
                  1. User Authentication and Authorisation
                </li>
                <li style={{ fontWeight: "400" }}>
                  2. The ability to login and logout of DevSearch
                </li>
                <li style={{ fontWeight: "400" }}>
                  2. The ability to login and logout of DevSearch
                </li>
              </ul>

              <h5 style={{ color: "#e7b157", letterSpacing: "1.3px" }}>
                <em>Employer Specific Features</em>
              </h5>

              <li style={{ fontWeight: "600" }}>
                {" "}
                - The Employers have the ability to create a company profile
              </li>
              <li style={{ fontWeight: "600" }}>
                - View an applicants job applications{" "}
              </li>
              <li style={{ fontWeight: "600" }}>- Create a new Job Posting</li>
              <li style={{ fontWeight: "600" }}>
                - Provide Feedback to applicants
              </li>
              <li style={{ fontWeight: "600" }}>
                - Track an applicant through the hiring process
              </li>

              <h5 style={{ color: "#e7b157", letterSpacing: "1.3px" }}>
                <em>Job Seeker Specific Features</em>
              </h5>
              <li style={{ fontWeight: "600" }}>
                {" "}
                - Create a personal profile
              </li>
              <li style={{ fontWeight: "600" }}>- View Job Listings </li>
              <li style={{ fontWeight: "600" }}>- Apply to a Job</li>
              <li style={{ fontWeight: "600" }}>
                - Automated progress tracking
              </li>
            </InnerText>
          </InnerContainer>
          <ImgWrapper>
            <Img
              src={imgPurpose}
              width="fit-content"
              height="fit-content"
              alt="CompariTube application first search Image"
            />
          </ImgWrapper>
        </Desc>
        <Desc imgStart>
          <InnerContainer>
            <InnerTitles>Job Seekers</InnerTitles>
            <InnerText>
              <p>
                For potential employee's DevSearch allows job seekers to search
                for employment, a job seeker can apply for a position, upload
                resume's and cover letters and track their applications from
                start to finish all this while getting crucial feedback from
                potential employers.
              </p>
            </InnerText>
          </InnerContainer>
          <ImgWrapper>
            <Img
              src={imgJobSeeker}
              width="fit-content"
              height="fit-content"
              alt="CompariTube application style Guide Image"
            />
          </ImgWrapper>
        </Desc>
        <Desc imgStart>
          <InnerContainer>
            <InnerTitles>Employers</InnerTitles>
            <InnerText>
              <p>
                DevSearch provides employers the ability to easily create and
                manage current positions, while also gaining access to a
                convenient way to track an applicants progress through the
                employment process. We provide the tools necessary to completely
                manage your hiring process in one convenient location.
              </p>
            </InnerText>
          </InnerContainer>
          <ImgWrapper>
            <Img
              src={imgEmployer}
              width="600px"
              height="fit-content"
              alt="CompariTube application style Guide Image"
            />
          </ImgWrapper>
        </Desc>
        <Desc imgStart>
          <InnerContainer>
            <InnerTitles>The Design</InnerTitles>
            <InnerText>
              <p>
                As the application is incredibly large and complex, we had many
                factors to think about whilest building this application. It had
                to be user friendly, Mobile responsive, and look good.
              </p>
            </InnerText>
          </InnerContainer>
          <ImgWrapper>
            <Img
              src={imgStyleGuid}
              min-width="600px"
              width="fit-content"
              height="fit-content"
              alt="DevSearch application style Guide Image"
            />
          </ImgWrapper>
        </Desc>
        <FigmaEmbed>
          <Iframe
            id="figmaEmbed"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FE9KSA9VcggekHrZqaQTocy%2FDevSearch%3Fnode-id%3D0%253A1"
            allowfullscreen
          ></Iframe>
        </FigmaEmbed>
      </ContentWrapper>
    </Container>
  );
};

export default DevSearch;
