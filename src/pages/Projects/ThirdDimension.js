import React from 'react'

// import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
// import { IconContext } from "react-icons";
import ThirdDimensionLP from '../../assets/ThirdDimension/ThirdDimensionLP.png';
import imgShopPage from '../../assets/ThirdDimension/ShopPageDesktop.png';
import imgLoginMobile from '../../assets/ThirdDimension/SignInPageMobile.png';
import styled from 'styled-components';
import { Button, Container} from '../../GlobalStyles'
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
margin:10px 0;
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


const ThirdDimension = () => {
  
  return (
    <Container >
      <ContentWrapper>
      <TopLineText>One stop shop for Diorama and 3D models</TopLineText>
        <Title>Third Dimension</Title>
        <SubTitle>Designed and Developed by Anthony Mann</SubTitle>
        <Button style={{margin: '2rem 0', fontSize: "24px"}} primary href="https://thirddimension.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</Button>
        <ImgWrapper>
          <Img src={ThirdDimensionLP} width="800px" alt="Main Image of thirdDimension car features Landing Page"/>
        </ImgWrapper>
        <Desc  >
      <InnerContainer>
        <InnerTitles>
          The Purpose
      </InnerTitles>
            <InnerText>
              To design and develop a Two Sided Marketplace, using the Ruby on Rails framework with PostgreSQL for the database.
              <h2 style={{margin: '1rem 0'}}>Features</h2>
              <li>- User Authentication</li>
              <li>- User Dashboard With Prouduct Management</li>
              <li>- Custom Profile Images, with a gravatar default image</li>
              <li>- Connected to Stripes payment gateway</li>

              <h2 style={{margin: '1rem 0'}}>Tech Stack</h2>
              <li>- Ruby on Rails</li>
              <li>- Bootstrap</li>
              <li>- Heroku</li>
              <li>- Cloudinary</li>
              <li>- GitHub</li>


        </InnerText>
      </InnerContainer>
        <ImgWrapper>
            <Img src={imgShopPage}width="800px" alt="Second Image of thirdDimension car features shop page"/>
        </ImgWrapper>
        </Desc>
        <Desc imgStart>
          <InnerContainer>     
        <InnerTitles>
          The Design
      </InnerTitles>
            <InnerText>
            <p>I wanted this marketplace to feel atmospheric and kind of dark, yet be simple in its design. I struggled with getting High quality images though I made the best of what was available to me at the time. I am very proud of what I achieved with this project and when I have time will definitely take it to the next level.</p>
           </InnerText>
        </InnerContainer>
        <ImgWrapper>
          <Img src={imgLoginMobile } width="320px" height="568px" alt="Main Image of thirdDimension car features Mobile Login Page"/>
        </ImgWrapper>
        </Desc>        
        <FigmaEmbed>
          <Iframe  width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0BKfLJqugqiiPCjpgB4TXq%2FThird-Dimension%3Fnode-id%3D0%253A1" allowfullscreen></Iframe>
        </FigmaEmbed>
    </ContentWrapper>
    </Container>
  )
}

export default ThirdDimension
