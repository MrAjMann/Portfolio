import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { IconContext } from "react-icons";
import styled from 'styled-components';
import { Container, CirclePatternTop, CirclePatternBottom} from '../../GlobalStyles'
import CirclePattern from '../../assets/CirclePattern.svg';
import backgroundImg from '../../assets/ProfileImage.png'




// Styling 

const ContentWrapper = styled.section`
display:flex;
margin-top:10%;
padding:10px;
  
width:50vw;
height:100vh;
flex-direction:column;
justify-content:start;
align-items: left;
word-wrap:wrap;

`;

const ImgContainer = styled.div`
display:flex;
justify-content:flex-end;
word-wrap:wrap;
`;
const Img = styled.img`
position: absolute;
max-width:300px;
width: 100%;
top:55%;

z-index:-1;
/* height:1024px; */
`;
const TitleHeading = styled.h2`
font-family: 'Roboto', sans-serif;
font-size:48px;
text-align:left;
margin:2rem 0;
`;
const SubHeading = styled.h4`
font-family: 'Roboto', sans-serif;
margin:1rem 0;
text-align:left;
border-radius:4px;
color:#e7b157;
font-weight:600;
font-size:24px;
`;

const Desc = styled.p`
  width:100%;
  display:flex;
  justify-content: space-between;
  flex-direction:column;
  margin:1rem 0;
  `;

const Lead = styled.h6`
font-size:1.3rem;
font-weight:600;
margin:0.5rem 0;
`;
const Paragraph = styled.p`
flex-wrap:wrap;
width:60%;
margin:1rem 0;
font-size:18px;

`;

const SocialIcons = styled.ul`
margin:0.5rem 8rem;
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


const About = () => {
  return (
  <IconContext.Provider value={{ size: 34, className: "IconContext"}}>
  <Container>
        <CirclePatternTop src={CirclePattern} />
        <ContentWrapper>

    <TitleHeading>About Me</TitleHeading>

    <SubHeading>Hello, this is my why...</SubHeading>
    <Desc> 
        <Lead>
        Former Assistant Nurse in Aged Care - turned web / app developer    
        </Lead>
        <Paragraph>
              For the past 4 years, I have worked in a Aged Care facility helping residents with varying physical and mental abilities make the most of the years they have left. However, I always felt that I could do more, just not within the confines of the facility.
        </Paragraph>
        <ImgContainer >
        <Img src={backgroundImg}  ></Img>
      </ImgContainer>      
        <Lead>
          …Did the soul work to identify my next step, and took it. 
        </Lead>
        <Paragraph>
          As a young guy, I always said I wanted to get into game development, but the more I looked into the industry, the more I realised it wasn't for me. I was helping a Registered Nurse dress a resident who had a large wound known as a pressure sore, it was stage 4 (really really bad). The reason I am telling you this is because of my career change. I had an idea that day for an app that would not only help prevent wounds from dying, but would also allow nurses and doctors to treat patients faster.
        </Paragraph>
        <Paragraph>
          Now I understand that not everyone can make the next Uber, but that day I knew I could make a difference as a developer.
        </Paragraph>
    </Desc>
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

export default About