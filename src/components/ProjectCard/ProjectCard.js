import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { Container } from "../../GlobalStyles";
import { FaGithub, FaHome } from "react-icons/fa";

const CardContainer = styled.div`
  height: 60vh;
  margin: 2rem 0;
  width: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 960px) {
    min-width: 90vw;
    height: auto;
    min-width: 90vw;
  }
`;

const ImgContainer = styled.div`
  min-width: 30rem;
  width: 100%;
  max-width: 30rem;
  transform: translate(1rem);
  position: relative;
  flex-direction: ${({ imgStart }) => (imgStart ? "row" : "row-reverse")};
  @media screen and (max-width: 960px) {
    margin: 10px;
    min-width: 80vw;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  transform: rotate(-10deg);
  object-fit: contain;
  border-radius: 0.3rem;
  box-shadow: 2px 3px 4px 0px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 960px) {
    transform: rotate(0deg);
    display: flex;
    object-fit: cover;

    /* max-width: 90vw; */
    width: 100%;
    padding: 20px;
    justify-content: center;
    margin-left: -1rem;
    margin-bottom: 1rem;
  }
`;

const ContentWrapper = styled.div`
  border: 1px solid #e7b35f;
  border-radius: 4px;
  display: flex;

  min-width: 900px;
  max-width: 1100px;
  width: 100%;
  justify-content: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row" : "row-reverse")};
  align-items: center;

  box-shadow: 2px 2px 7px 2px #444;

  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
    justify-content: center;
    min-width: 300px;
    max-width: 95vw;
  }
`;

const InnerCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-left: 6rem;
  @media screen and (max-width: 960px) {
    max-height: "400px" !important;
    margin-left: 0rem;
    width: 100%;
    align-items: center;
  }
`;

const MetaTags = styled.ul`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  text-decoration: none;
  margin-top: 1rem;
  width: 100%;
  @media screen and (max-width: 960px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const Tag = styled.li`
  display: flex;
  min-width: 80px;
  padding: 0 6px;
  border-radius: 25px;
  background-color: #333;
  color: #f2f2f2;
  font-weight: 600;
  align-items: center;
  font-size: 16px;
  flex-direction: column;
  margin: 1rem 0.2rem;
`;

const AppTitle = styled.h1`
  color: #e7b35f;
  font-size: 48px;
  font-family: "Roboto", sans-serif;
  margin: 1.5rem 0;
  @media screen and (max-width: 960px) {
    font-size: 36px;
    text-align: center;
    margin: 1.5rem;
  }
`;

const AppSubTitle = styled.p`
  color: #f2f2f2;

  margin: 1.5rem 0;
  font-size: 24px;

  @media screen and (max-width: 960px) {
    font-size: 18px;
    text-align: center;
    margin: 0.3rem;
  }
`;
export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: flex-start;
  flex-direction: row;
  align-items: left;
  transition: all 0.3s ease-in;
  /* margin-left: 0 -2rem; */

  @media screen and (max-width: 1200px) {
    transition: all 0.3s ease-in;
    justify-content: center;
    margin: 1rem;

    text-align: center;
    padding-left: 15px;
  }
  @media screen and (max-width: 630px) {
    transition: all 0.3s ease-in;
    &:before {
      content: "";
      margin: 0 -2rem;
    }
    text-align: center;
    width: 100%;
  }
`;
export const Button = styled.a`
  width: 150px;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 1) 1.95px 1.95px 2.6px;
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#e7b157" : "#5dbee8")};
  white-space: nowrap;
  padding: 10px;
  color: #f2f2f2;
  font-size: ${({ fontSmall }) => (fontSmall ? "16px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    transform: scale(1.1);
  }

  .IconContext {
    @media screen and (max-width: 960px) {
      display: none;
    }
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    width: 130px;
    /* width: 100%; */
    font-size: 16px;
  }
`;

const ProjectCard = ({
  id,
  title,
  subTitle,
  ProjectPage,
  GitRepo,
  imgStartIsTrue,
  imgStart,
  img,
  tags,
  alt,
  start,
}) => {
  return (
    <IconContext.Provider
      value={{ color: "#f2f2f2", size: 34, className: "IconContext" }}
    >
      <CardContainer>
        <Container>
          <ContentWrapper imgStart={imgStart}>
            <InnerCont
              imgStartIsTrue={imgStartIsTrue}
              style={{ minHeight: "400px" }}
            >
              <MetaTags className="MetaTags">
                {tags.map(function (tag, id) {
                  return <Tag key={id}>{tag}</Tag>;
                })}
              </MetaTags>
              <AppTitle>{title}</AppTitle>
              <AppSubTitle>{subTitle}</AppSubTitle>
              <ButtonContainer>
                <Button
                  href={GitRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSmall
                  primary
                >
                  <FaGithub /> GitHub{" "}
                </Button>
                <Link to={ProjectPage}>
                  <Button fontSmall>
                    <FaHome /> View Project{" "}
                  </Button>
                </Link>
              </ButtonContainer>
            </InnerCont>
            <ImgContainer start="start" style={{ maxWidth: "500px" }}>
              <Img style={{ maxWidth: "500px" }} src={img} alt={alt}></Img>
            </ImgContainer>
          </ContentWrapper>
        </Container>
      </CardContainer>
    </IconContext.Provider>
  );
};

export default ProjectCard;
