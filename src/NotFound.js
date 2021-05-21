import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import errorImg from './assets/PageNotFound.svg';
import {  FaHome } from "react-icons/fa";
import { IconContext } from "react-icons";

const Container = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
overflow-x: hidden;
transform:translate(50%  50%);
width:100%;
height:90vh;
@media screen and (max-width:960px){

width: 100vw;
justify-content:center;
align-items:center;
}
`;

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

export const Button = styled.li`
width: 150px;
display:flex;
justify-content:space-evenly;
text-align: center;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 1) 1.95px 1.95px 2.6px;
border-radius:4px;
background:${({ primary }) => (primary ? '#e7b157' : '#5dbee8')};
white-space: nowrap;
padding:10px;
color:#f2f2f2;
font-size: ${({ fontSmall }) => (fontSmall ? '16px' : '16px')};
outline:none;
border:none;
cursor:pointer;

&:hover{
  transition:all 0.3s ease-out;
  transform: scale(1.1);
}

.IconContext{
  @media screen and (max-width:960px) {
    display:none;
  }
}
@media screen and (max-width:960px) {

  text-align: center;
  margin-top:1rem;
  justify-content:center;
  align-items:center;
  width:130px;
  /* width: 100%; */
  font-size:16px;
  
}
`;

const NotFound = () => (
  <Container>
    <IconContext.Provider value={{ color: '#f2f2f2', size: 34, className: "IconContext" }}>
      
    <ImgWrapper>
       <Img src={errorImg} alt="Error404 Page Image"/>
    </ImgWrapper>

    <Link to="/" >
    <Link to="/" ><Button primary ><FaHome /> HOME </Button></Link>
    </Link>
    </IconContext.Provider>
    </Container>
);

export default NotFound;
