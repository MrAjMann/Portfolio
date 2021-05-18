import React from 'react'
import { Container, Button } from '../../GlobalStyles'
import styled from 'styled-components'



const FormContainerRight = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin:auto;
  height:100vh;
  text-align:left;
  height:100%;
  
@media screen and (max-width:960px) {
  min-width:90vw;
  
  margin-left:1rem;
  overflow-x: hidden;
}
`;


const Form = styled.form`
border-radius: 5px;
`;


const SubHeading = styled.h2`
margin-top: 3rem;
margin-bottom: 3rem;
font-family: 'Roboto', sans-serif;
font-size: 36px;
@media screen and (max-width:960px) {
font-size:30px;
}
`;

const FormInputs = styled.div`
  width: 460px;
  background-color: #202628;
  border-radius: 15px;
  position: relative;
  transition: all 0.5s ease;
  margin-bottom:1rem;
  @media screen and (max-width:960px) {
  width:300px;

}
`;
const Label = styled.label`
  width: 100%;
  height:100%;
  padding: 10px;
  font-weight:bold;
  color: #f2f2f2;
  background-color: transparent;
  border-radius: 15px;
  position: relative;
  transition: all 0.5s ease;`;


const Input = styled.input`
  width: 100%;
  height: 100%;
  box-shadow: none;
  border-radius: 15px;
  border: solid 1px #fff;
  background: transparent;
  color: #f2f2f2;
  padding: 15px 25px 15px 25px;
  font-size: 16px;
  outline: none;
`;

const Textarea = styled.textarea`
  box-shadow: none;
  border-radius: 15pxpx;
  background: transparent;
  resize:none;
  color: #f2f2f2;
  padding: 20px 100px 20px 45px;
  font-size: 16px;
  outline: none;
  border:none;
`;

  const Contact = () => {

  return (
    <Container>
      <FormContainerRight>
        <Form name="contact" action="/contact" method="POST"data-netlify="true" >
          <SubHeading>Get in touch today!</SubHeading>
          <FormInputs>
            <Input
              type="hidden"
              name="form-name"
              value="contact"             
              />
          </FormInputs>
            <Label htmlFor="name"  >Name:</Label>
          <FormInputs>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              
              />
          </FormInputs>
            <Label htmlFor="email" >Email:</Label>
          <FormInputs>
            <Input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
              
              />
              
          </FormInputs>
            <Label htmlFor="subject" >Subject:</Label>
          <FormInputs>
            <Input
              type="text"
              name="subject"
              placeholder="Enter a Subject"
              
              />       
          </FormInputs>
            <Label htmlFor="message" >Message:</Label>
          <FormInputs>
            <Textarea
              
              name="message"
              placeholder="Enter your message"
              cols="30"
              rows="5"
              required
              />       
          </FormInputs>
          <Button primary style={{ marginBottom: '2rem',fontFamily:'Roboto', FontWeight: '600',color:'#fff',fontSize:'1.2rem'}} type="submit">Send Message</Button>
        </Form>
      </FormContainerRight>
      
    </Container>
  )
}

export default Contact
