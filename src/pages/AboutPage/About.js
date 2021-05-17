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
  flex-direction: column;
  justify-content:flex-start;
  align-items: left;
  margin-top:13%;
  margin-left:20%;
  text-align:left;
  padding:10px;
  width: 60%;
@media screen and (max-width:960px) {
  min-width:90vw;
  margin-left:0;
  overflow-x: hidden;
}
`;

const ImgContainer = styled.div`
  display:flex;
  width:100% ;
  align-items:right;
  justify-content:center;
  flex-wrap:wrap;
`;
const Img = styled.img`
  align-self: baseline;
  max-width:300px;
  z-index:-1;
@media screen and (max-width:930px) {
  width:100%;
  margin-left:3rem;
  justify-content:flex-end;
  align-items:center;
}
`;
const TitleHeading = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size:48px;
  width: 100%;
  margin:2rem 0;
@media screen and (max-width:630px) {
  font-size:36px;
  padding:10px;
  width:100vw;

}
`;
const SubHeading = styled.h4`
  font-family: 'Roboto', sans-serif;
  margin:1.5rem 0;
  text-align:left;
  border-radius:4px;
  color:#e7b157;
  font-weight:600;
  font-size:24px;
@media screen and (max-width:630px) {
  font-size:18px;
  padding:10px;
  width:100vw;
}
`;

const Desc = styled.p`
  display:flex;
  width:100%;
  flex-wrap:wrap;
  flex-direction:column;
  align-items:left;
  justify-content:flex-start;
  
@media screen and (max-width:630px) {
  padding:10px;
  width:100vw;
  font-size:16px;
}
  `;

const Lead = styled.h6`
  text-align:left;
  font-size:20px;
  font-weight:600;
  margin:0.5rem 0;
  @media screen and (max-width:630px) {
  word-wrap:wrap;
  padding:10px;
  width:80vw;
  font-size:16px;
}
  
`;
const Paragraph = styled.p`
  width:60%;
  margin:1rem 0;
  font-size:18px;
@media screen and (max-width:630px) {
  width:80%;
  font-size:16px;
  flex-wrap:nowrap;
}
`;

const SocialIcons = styled.ul`
  margin:0.5rem 8rem;
  display:flex;
  justify-content: left;
  flex-direction: row;
  align-items:left;
@media screen and (max-width: 960px){
  margin:0 3rem;;
  width:100%;
  align-items:center;
}
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
  <ImgContainer >
    <Img src={backgroundImg}  ></Img>
  </ImgContainer> 
    <SubHeading>Hello, I'm Anthony and this is my why...</SubHeading>
  <Desc> 
    <Lead>
        Former Assistant Nurse in Aged Care - turned web / app developer    
    </Lead>
 
    <Paragraph>
              For the past 4 years, I have worked in a Aged Care facility helping residents with varying physical and mental abilities make the most of the years they have left. However, I always felt that I could do more, just not within the confines of the facility.
    </Paragraph>
  </Desc>
  <Desc>

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