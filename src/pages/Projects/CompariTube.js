import React from 'react'

// import { FaGithub} from 'react-icons/fa'
// import { IconContext } from "react-icons";

import styled from 'styled-components';
import { Button, Container } from '../../GlobalStyles'
import imgMain from '../../assets/CompariTube.png'
import imgFirstSearch from '../../assets/Hackathon/FirstSearchCompariTube.png'
import imgStyleGuid from '../../assets/Hackathon/StyleGuide.png'
// import CirclePattern from '../../assets/CirclePattern.svg';


// Containers
const ContentWrapper = styled.section`
  display:flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: left;
  margin-top:10%;
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
const Desc = styled.div`
  display:flex;
  flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')} ;
  justify-content:center;
  align-items: left;
  padding:10px;
  width: 100%;
  margin-top:3rem;
@media screen and (max-width:960px) {
  margin-top:1rem;
  flex-direction:column;
  justify-content:flex-end;
  min-width:90vw;
  margin-left:0;
  overflow-x: hidden;
}
`;
const InnerContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:flex-start;
  margin:1rem 2rem;
  align-items: left;
  padding:10px;
  min-width:40%;
@media screen and (max-width:960px) {
  flex-direction:column;
  justify-content:flex-end;
  min-width:90vw;
  margin-left:0;
  overflow-x: hidden;
}
`;


const FigmaEmbed = styled.div`
margin:1rem 0;

max-width:860px;
@media screen and (max-width:960px) {

}
`;



// Images
const ImgWrapper = styled.div`
margin:1rem 0;
max-width:860px;

@media screen and (max-width:960px){
}
`;
const Img = styled.img`

margin:10px -10px;
border-radius:15px;
@media screen and (max-width:960px){
max-width:90vw;

min-width:300px;
}
`;

const Iframe = styled.iframe`
margin:10px -10px;

@media screen and (max-width:960px){
max-width:90vw;

min-width:300px;
}
`;

// Text
const Title = styled.h1`
font-family:'Roboto';
font-size:48px;
margin:0.5rem 0;
color: #f2f2f2;
@media screen and (max-width:960px){
font-size:36px;
}
`;
const TopLineText = styled.p`
margin:1rem 0;
font-size:24px;
color: #E7B157;
@media screen and (max-width:960px){
font-size:18px;
}
`;
const SubTitle = styled.p`
margin:1rem 0;

font-size:16px;
color: #E7B157;
@media screen and (max-width:960px){
font-size:14px;
margin-bottom:2rem;
}
`;
const InnerTitles = styled.h2`
font-family: 'Roboto', sans-serif;
font-size:36px;
color: #5DBEE8;
@media screen and (max-width:960px){
font-size:32px;
}
`;
const InnerText = styled.p`
font-size:16px;
color: #f2f2f2;
@media screen and (max-width:960px){
font-size:14px;
}
`;



const CompariTube = () => {
  
  return (
    <Container >
      <ContentWrapper>
      <TopLineText>Coder Academy Hackathon 2021</TopLineText>
        <Title>CompariTube</Title>
        <SubTitle>Designed and Developed by Roba Elshazly and  Anthony Mann</SubTitle>
        <Button style={{ margin: '2rem 0', fontSize: "24px" }} primary href="https://tubicompare.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</Button>
        
        <ImgWrapper>
          <Img src={imgMain} width="800px" alt="CompariTube application main Image"/>
        </ImgWrapper>
        <Desc  >
      <InnerContainer>
        <InnerTitles>
          The Purpose
      </InnerTitles>
            <InnerText>
              <p> Comparitube is a YouTube comparison app, it was designed and built over a period of 24hours.</p>
              <h2 style={{margin: '1rem 0'}}>Criteria</h2>
              <li style={{fontWeight:"600"}} >1. We could only use Vanilla JavaScript</li>
              <li style={{ fontWeight: "600" }} >2. We had to include a public API</li>
              <li style={{ fontWeight: "600" }} >3. Must work in a team of at least 2 people</li>
              
              <h2 style={{margin: '1rem 0'}}>Application Highlights</h2>
              <li style={{fontWeight:"600"}} > - Passing multiple fetch requests</li>
              <li style={{ fontWeight: "600" }} >- Hiding DOM elements after specifica actions </li>
              <li style={{ fontWeight: "600" }} >- Creating two seperate search request</li>


        </InnerText>
      </InnerContainer>
        <ImgWrapper>
          <Img src={imgFirstSearch} width="800px" alt="CompariTube application first search Image"/>
        </ImgWrapper>
        </Desc>
        <Desc imgStart>
          <InnerContainer>     
        <InnerTitles>
          The Design
      </InnerTitles>
            <InnerText>
              <p>The design of this application needed to be minimal and easy to use. We wanted to find a way to show users all the information they need without adding too many steps to the process. Since the application was created in just 24 hours, there is obviously a lot of room for improvement and I will update it in the future.</p>
      </InnerText>
        </InnerContainer>
        <ImgWrapper>
          <Img src={imgStyleGuid} width="800px" alt="CompariTube application style Guide Image"/>
        </ImgWrapper>
        </Desc>        
        <FigmaEmbed>
          <Iframe id="figmaEmbed" width="800" height="450"  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fz0Ji5QKrMYBPb2ZmZdQzh1%2FHackathon%26hide-ui=2%3Fnode-id%3D0%253A1" allowfullscreen></Iframe>
        </FigmaEmbed>
    </ContentWrapper>
    </Container>
  )
}

export default CompariTube
