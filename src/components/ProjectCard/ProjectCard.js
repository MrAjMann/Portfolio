import React from 'react'
// import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { IconContext } from "react-icons";
import { Container,ButtonContainer,Button } from '../../GlobalStyles'
import { FaGithub, FaHome } from "react-icons/fa";


const CardContainer = styled.div`
height:60vh;
margin:2rem 0;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding: 0 2rem;

@media screen and (max-width:960px) {
  min-width:90vw;
  height:auto;
  min-width:90vw;
}
`;

const ImgContainer = styled.div`
min-width:30rem;
width:100%;
max-width:30rem;
transform:translate(1rem);
position:relative;
justify-content:${({start}) =>(start ? 'flex-start' :'flex-end')};
@media screen and (max-width:960px) {
margin:10px;
min-width:80vw;

}
`;

const Img = styled.img`
width:100%;
height:auto;
transform: rotate(-10deg);
object-fit:contain;
border-radius:0.3rem;

@media screen and (max-width:960px) {
transform: rotate(0deg);
display:flex;
justify-content: center;
margin-left:-1rem;
margin-bottom:1rem;
}

`;

const ContentWrapper = styled.div`
border: 1px solid #e7b35f;
border-radius:4px;
display:flex;
flex-direction: ${({imgStart}) => (imgStart ? 'row' : 'row-reverse')};
justify-content:center;
align-items:center;

width:50vw;
padding:1rem;
box-shadow: 2px 2px 7px 2px #444;

@media screen and (max-width:960px) {
  flex-direction:column-reverse;
  justify-content:center;
  width:95vw;
}
`;


const InnerCont = styled.div`
position: relative;
display:flex;
flex-direction: column;
justify-content:center;
width:100%;
margin-left:5rem;
@media screen and (max-width:960px){
  margin-left:0rem;
  width:100%;
  align-items:center;
}
`;

const MetaTags = styled.ul`
display:flex;
justify-content:left;
align-items:center;
text-decoration:none;
margin:-1rem;
width:100%;
@media screen and (max-width:960px) {
 justify-content:center;
  align-items:center;
  text-align: center;

}
`;

const Tag = styled.li`
  display:flex;
  width:80px;
  padding:0 6px;
  border-radius:25px;
  background-color:#333;
  color: #f2f2f2;
  font-weight:600;
  align-items:center;
  font-size:16px;
  flex-direction: column;
  margin: 1rem 1rem;

`;


const AppTitle = styled.h1`
color: #e7b35f;
font-size:48px;
font-family: 'Roboto', sans-serif;
margin:1.5rem 0;
@media screen and (max-width:960px) {
  font-size:36px;
  text-align: center;
  margin:1.5rem;
  
}
`;


const AppSubTitle = styled.p`
color: #f2f2f2;

margin:1.5rem 0;
font-size:24px;

@media screen and (max-width:960px) {
  font-size:18px;
  text-align: center;
  margin:0.3rem;
  
  
}


`;


const ProjectCard = ({
  title,
  subTitle,
  imgStart,
  img,
  tags,
  alt,
  start
}) => {
  return (
    <IconContext.Provider value={{ color: '#f2f2f2', size: 34, className: "IconContext"}}>
    <CardContainer >
      <Container>
      <ContentWrapper imgStart={imgStart} >
        <InnerCont>
          <MetaTags>
            <Tag> { tags }  </Tag>
            <Tag> Canva </Tag>
          </MetaTags>
            <AppTitle>{ title }</AppTitle>
            <AppSubTitle>{subTitle}</AppSubTitle>
          <ButtonContainer>
            <Button href="http://github.com" target="_blank" rel="noopener noreferrer" fontSmall primary ><FaGithub/> GitHub </Button>
            <Button href="/" fontSmall  ><FaHome /> View Project </Button>
          </ButtonContainer>
      </InnerCont>
          <ImgContainer start="start">
            <Img src={img} alt={alt} ></Img>
          </ImgContainer>      
    </ContentWrapper>
    </Container>
  </CardContainer>
  </IconContext.Provider>
  )
}


export default ProjectCard
