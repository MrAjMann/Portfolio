import React from "react";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import profileImg from "../../assets/ProfileImage.jpg";

// Styling

const ContentWrapper = styled.section`
  position: relative;
  margin-top: 5%;

  padding: 1rem;
  display: flex;
  flex-direction: row-reverse;
  height: 80%;
  border: 1px solid #e7b35f;
  box-shadow: 2px 2px 7px 2px #444;
  justify-content: center;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 1600px) {
    flex-direction: column;
    min-width: 300px;
    width: 60%;
    height: 100%;
    margin: 1rem 0;
    padding: 0;
    max-width: 900px;
  }
`;

const ImgContainer = styled.div`
  flex: 1 1 30%;
  margin-top: 1%;
  @media screen and (max-width: 960px) {
    max-width: 60vw;
    align: center;
  }
`;
const Img = styled.img`
  object-fit: contain;
  min-width: 600px;
  max-height: 75vh;
  width: 100%;
  max-width: 800px;
  z-index: -1;

  @media screen and (max-width: 960px) {
    min-width: 150px;
    padding: 1rem;
    max-width: 600px;
  }
`;
const LeftPanelWrapper = styled.div`
  flex: 1 1 40%;
  gap: 1rem;
  padding: 1rem;
  flex-direction: column;
  @media screen and (max-width: 1400px) {
    margin: 1.2rem 0rem;
  }
`;

const SubHeading = styled.h1`
  font-family: "Roboto", sans-serif;
  margin: 1.5rem 0;
  text-align: left;
  border-radius: 4px;
  color: #e7b157;
  font-weight: 600;
  font-size: 24px;
  @media screen and (max-width: 1200px) {
    font-size: 18px;
    padding: 10px;
    /* width:100vw; */
  }
`;

const Desc = styled.p`
  width: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    /* padding:10px;
    width:100vw;
    font-size:16px; */
  }
`;

const Lead = styled.h6`
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  margin: 0.5rem 0;
  @media screen and (max-width: 1200px) {
    word-wrap: wrap;
    padding: 10px;
    /* width:80vw; */
    font-size: 16px;
  }
`;
const Paragraph = styled.p`
  /* width:60%; */
  margin: 1rem 0;
  font-size: 18px;
  @media screen and (max-width: 630px) {
    /* width:80%; */
    font-size: 16px;
    flex-wrap: nowrap;
  }
`;
const SocialWrapper = styled.div`
  position: absolute;
  // margin-top: 1rem;
  margin: 1rem;
  left: 20%;
  bottom: 1%;
  @media screen and (max-width: 1400px) {
    position: absolute;
    margin-bottom: -1rem;
    left: 35%;
    bottom: 0%;
  }
  @media screen and (max-width: 1200px) {
    position: absolute;
    margin-bottom: -1rem;
    left: 30%;
    bottom: 0%;
  }
  @media screen and (max-width: 960px) {
    position: absolute;
    margin-bottom: -1rem;
    left: 30%;
    bottom: 0%;
  }
  @media screen and (max-width: 760px) {
    position: absolute;
    margin-bottom: -1rem;
    left: 20%;
    bottom: 0%;
  }
  @media screen and (max-width: 660px) {
    position: absolute;
    margin-bottom: -1rem;
    left: 15%;
    bottom: 0%;
  }
  @media screen and (max-width: 560px) {
    position: absolute;
    margin-bottom: -1rem;
    left: 10%;
    bottom: 0%;
  }
`;
const SocialIcons = styled.ul`
  display: flex;
  width: 100%;
  // border: 1px solid red;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 960px) {
    justify-content: center;
    width: 100%;
    align-items: center;
  }
`;

const SocialItem = styled.a`
  margin: 1rem 1rem;

  color: #f2f2f2;
  margin-bottom: 5%;
  &:hover {
    color: #e7b157;
    transform: scale(1.3);
  }
`;

const About = () => {
  return (
    <IconContext.Provider value={{ size: 34, className: "IconContext" }}>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="About Anthony and his journey from a Personal Carer to a Website Developer"
        />
        <link rel="canonical" href="http://anthonyjmann.com/about" />
      </Helmet>
      <Container>
        <ContentWrapper>
          <ImgContainer>
            <Img
              src={profileImg}
              alt="Image of Anthony"
              width="800px"
              height="100%"
              loading="lazy"
              title="Profile Image"
            ></Img>
          </ImgContainer>
          <LeftPanelWrapper>
            <SubHeading>Hello, I'm Anthony and this is my why...</SubHeading>
            <Desc>
              <Lead>
                Former Assistant Nurse in Aged Care - turned web / app developer
              </Lead>

              <Paragraph>
                For the past 4 years, I have worked in a Aged Care facility
                helping residents with varying physical and mental abilities
                make the most of the years they have left. However, I always
                felt that I could do more, just not within the confines of the
                facility.
              </Paragraph>
            </Desc>
            <Desc>
              <Lead>
                …Did the soul work to identify my next step, and took it.
              </Lead>
              <Paragraph>
                As a young guy, I always said I wanted to get into game
                development, but the more I looked into the industry, the more I
                realised it wasn't for me. I was helping a Registered Nurse
                dress a resident who had a large wound known as a pressure sore,
                it was stage 4 (really really bad). The reason I am telling you
                this is because of my career change. I had an idea that day for
                an app that would not only help prevent wounds from dying, but
                would also allow nurses and doctors to treat patients faster.
              </Paragraph>
              <Paragraph>
                Now I understand that not everyone can make the next Uber, but
                that day I knew I could make a difference as a developer.
              </Paragraph>
            </Desc>
          </LeftPanelWrapper>
          <SocialWrapper>
            <SocialIcons>
              <SocialItem href="http://github.com/MrAjMann">
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
          </SocialWrapper>
        </ContentWrapper>
      </Container>
    </IconContext.Provider>
  );
};

export default About;
