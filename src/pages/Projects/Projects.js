import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import {
  ProjectCardObjOne,
  ProjectCardObjTwo,
  ProjectCardObjThree,
  ProjectCardObjFour,
} from "./Data";
import { Container } from "../../GlobalStyles";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectsContainer = styled.section`
  margin-top: 10%;
  overflow-x: hidden;
`;

const Heading = styled.h2`
  display: flex;
  color: #f2f2f2;
  width: 100%;
  margin-left: 50%;
  font-family: "Roboto", sans-serif;
  /* text-align:left; */
  justify-content: left;
  align-items: left;
  font-size: 48px;
  margin-top: 3rem;

  @media screen and (max-width: 960px) {
    margin-top: 1rem;
    text-align: left;
    font-size: 48px;
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <Helmet>
        <title>Projects</title>
        <meta
          name="description"
          content="View all of my work, including what was used to build them and a links to the project itself"
        />
        <link rel="canonical" href="http://anthonyjmann.com/projects" />
      </Helmet>
      <Container>
        <Heading>Projects</Heading>
        <ProjectCard {...ProjectCardObjOne} />
        <ProjectCard {...ProjectCardObjTwo} />
        <ProjectCard {...ProjectCardObjThree} />
        <ProjectCard {...ProjectCardObjFour} />
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;
