import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { Container, ButtonContainer, Button } from "../../GlobalStyles";

import backgroundImg from "../../assets/svg-1.svg";

const ContentWrapper = styled.section`
  position: relative;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 3rem;
  display: flex;
  flex-direction: row-reverse;
  height: 80%;
  border: 1px solid #e7b35f;
  box-shadow: 2px 2px 7px 2px #444;
  justify-content: center;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    min-width: 300px;
    width: 60%;

    padding: 0;
    max-width: 900px;
  }
`;

const ImgContainer = styled.div`
  flex: 1 1 50%;
  @media screen and (max-width: 960px) {
    max-width: 60vw;
    align: center;
  }
`;
const Img = styled.img`
  min-width: 600px;
  width: 100%;
  max-width: 1200px;
  z-index: -1;

  @media screen and (max-width: 960px) {
    min-width: 150px;
    padding: 1rem;

    max-width: 600px;
  }
`;

const LeftPanelWrapper = styled.div`
  flex: 1 1 30%;
  gap: 1rem;
  padding: 1rem;
  flex-direction: column;
`;
const TopLineText = styled.h1`
  font-size: 30px;
  margin: 1rem 0;
  text-align: center;
  opacity: 0.4;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 1300px) {
    word-wrap: none;
    font-size: 24px;
  }
`;
const TitleHeading = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 48px;
  text-align: center;
  margin: 2rem 0;
  @media screen and (max-width: 1300px) {
    font-size: 36px;
  }
`;

const Lead = styled.h3`
  font-family: "Roboto", sans-serif;
  margin: 2rem 0;
  text-align: center;
  border-radius: 4px;
  color: f2f2f2;
  font-weight: 600;
  font-size: 18px;
  @media screen and (max-width: 1300px) {
    font-size: 16px;
  }
`;

const SocialIcons = styled.ul`
  margin: 1rem 1rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const SocialItem = styled.a`
  margin: 1rem 1rem;
  color: #f2f2f2;
  &:hover {
    color: #e7b157;
    transform: scale(1.3);
  }
`;

export default function Home(primary) {
  return (
    <IconContext.Provider value={{ size: 34, className: "IconContext" }}>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Anthony Mann, here you will get a genreal idea of my skills and general processes used when I build websites"
        />
        <link rel="canonical" href="http://anthonyjmann.com/" />
      </Helmet>
      <Container>
        <ContentWrapper>
          <ImgContainer>
            <Img
              src={backgroundImg}
              title="Person sitting with laptop illustration"
              alt="Person sitting with laptop illustration"
              width="800px"
              height="100%"
            ></Img>
          </ImgContainer>
          <LeftPanelWrapper>
            <TopLineText>Hey how's it going, I'm</TopLineText>
            <TitleHeading>Anthony Mann</TitleHeading>
            <Lead>UI Designer and Front-End Developer</Lead>
            <ButtonContainer>
              <Link name="View Latest Work" to="/projects">
                <Button primary={primary}>View latest work</Button>
              </Link>
            </ButtonContainer>
            <SocialIcons>
              <SocialItem
                name="Github"
                href="https://github.com/MrAjMann"
                className="GithubLink"
              >
                {" "}
                <FaGithub />{" "}
              </SocialItem>
              <SocialItem href="https://twitter.com/MyCodingJourne3">
                {" "}
                <FaTwitter />{" "}
              </SocialItem>
              <SocialItem href="https://www.linkedin.com/in/anthonyjmann87/">
                {" "}
                <FaLinkedin />{" "}
              </SocialItem>
            </SocialIcons>
          </LeftPanelWrapper>
        </ContentWrapper>
      </Container>
    </IconContext.Provider>
  );
}
