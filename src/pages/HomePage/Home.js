import React from "react";
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { IconContext } from "react-icons";
import styled from 'styled-components';
import {Container, CirclePatternTop, CirclePatternBottom,ButtonContainer,Button} from'../../GlobalStyles'
import CirclePattern from '../../assets/CirclePattern.svg'
import backgroundImg from '../../assets/svg-1.svg'




const ContentWrapper = styled.section`
display:flex;
flex-direction: column;
justify-content:left;
align-items: left;
margin-top:13%;
margin-left:-30%;

@media screen and (max-width:960px) {
  /* min-width:90vw; */
/* margin-top:13%; */
margin-left:0;
  height:80vh;
  min-width:50%;
}
`;


const ImgContainer = styled.div`
position: absolute;
display:flex;
top:15%;
right:5%;
justify-content:flex-end;
@media screen and (max-width:960px) {
display:none;
}

`;
const Img = styled.img`
min-width:600px;
width: 100%;
max-width: 1200px;
z-index:-1;
/* height:1024px; */

`;
const TopLineText = styled.h4`

font-size:36px;
margin:1rem 0;
text-align:left;
font-family: 'Roboto', sans-serif;

@media screen and (max-width:630px) {
font-size:24px;
}
`;
const TitleHeading = styled.h2`
font-family: 'Roboto', sans-serif;
font-size:48px;
text-align:left;
margin:2rem 0;
@media screen and (max-width:630px) {
font-size:36px;
}
`;
const Lead = styled.h4`
font-family: 'Roboto', sans-serif;
margin:2rem 0;

text-align:left;
border-radius:4px;
color:f2f2f2;
font-weight:600;
font-size:18px;
@media screen and (max-width:630px) {
font-size:16px;
}
`;

const SocialIcons = styled.ul`
margin:1rem 1rem;
display:flex;
justify-content: left;
flex-direction: row;
align-items:left;

`;

const SocialItem = styled.a`
 margin:1rem 1rem;
 color: #f2f2f2;
 
 &:hover{
   color:#e7b157; 
   transform:scale(1.3);
  }
  `;

export default function Home(primary) {
  return (
<IconContext.Provider value={{ size: 34, className: "IconContext"}}>
  <Container>
        <CirclePatternTop src={CirclePattern} />
    <ContentWrapper>
      <ImgContainer >
        <Img src={backgroundImg}  ></Img>
      </ImgContainer>  
        <TopLineText>Hello, I'm</TopLineText>
        <TitleHeading>Anthony Manm</TitleHeading>  
        <Lead>UI Designer and Front-End Developer</Lead>
      <ButtonContainer>
        <Link to="/projects"><Button primary={ primary } >View latest work</Button></Link>
        <Link to="/about"><Button >More about me</Button></Link>
      </ButtonContainer>
      <SocialIcons>
        <SocialItem href="http://github.com/MrAjMann" > <FaGithub /> </SocialItem>
        <SocialItem href="https://twitter.com/MyCodingJourne3"> <FaTwitter /> </SocialItem>
        <SocialItem href="https://www.linkedin.com/in/anthonyjmann87/"> <FaLinkedin /> </SocialItem> 
      </SocialIcons>
    </ContentWrapper>
        <CirclePatternBottom src={CirclePattern} /> 
      </Container>
    
</IconContext.Provider>
      
  ) 
}