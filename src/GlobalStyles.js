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

export const CirclePatternTop = styled.img`
  visibility: visible;
  position: fixed;
  width: 168px;
  height: 112px;
  top: 15%;
  left: 5%;

  @media screen and (max-width:1100px) {
 display:none;

}
`
export const CirclePatternBottom = styled.img`
     visibility: visible;
      position: fixed;
      width: 168px;
      height: 112px;
      bottom: 15%;
      left: 5%;
      @media screen and (max-width:1100px) {
      display:none;

}
`

export const ButtonContainer = styled.div`
width: 100%;
display:flex;
flex-direction: row;
align-items: left;
justify-content:space-evenly;
margin:0 -1.5rem;


@media screen and (max-width:960px) {
  position: relative;
  display:flex;
  
  /* display:block; */
  text-align:center;
  width: 100%;
 
  /* align-items:center; */
}
`;
export const Button = styled.a`
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



export default GlobalStyle