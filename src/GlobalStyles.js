import styled, { createGlobalStyle } from 'styled-components'
// import { IconContext } from "react-icons";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Kurale', serif;
}
`;


export const Container = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
width:100%;

@media screen and (max-width:960px){
width: 100vw;
justify-content:center;
align-items:center;
}
`;



export const ButtonContainer = styled.div`
position: relative;
display:flex;

justify-content:center;
flex-direction: row;
align-items: center;
transition: all 0.3s ease-in;
/* margin: 0 2rem; */



/* @media screen and (max-width:1200px) {
    transition: all 0.3s ease-in;
  &:after {
  content:'';
  justify-content:space-evenly;
  margin:0 -2rem;
}
  text-align:center;
  padding-left:15px;
 
} */
/* @media screen and (max-width:960px) {
  transition: all 0.3s ease-in;
  &:before {
  content:'';
  margin:0 -2rem;
}
  text-align:center;
  width: 100%;
 
} */
`;
export const Button = styled.a`
width: 150px;
display:flex;
justify-content:space-evenly;
text-align: center;
font-family: 'Roboto', sans-serif;
box-shadow: rgba(0, 0, 0, 1) 1.95px 1.95px 2.6px;
border-radius:4px;
background:${({ primary }) => (primary ? '#e7b157' : '#5dbee8')};
white-space: nowrap;
padding:10px;
color:#f2f2f2;
font-weight:700;
font-size:18px;
/* outline:none; */
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



export default GlobalStyle