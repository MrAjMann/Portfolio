import React from "react";
import { Helmet } from "react-helmet-async";
import { Container } from "../../GlobalStyles";
import styled from "styled-components";

const InnerContainer = styled.div`
  display: flex;
  width: 70%;
  height: 90vh;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    margin-top: 2rem;
    flex-direction: column-reverse;

    width: 100%;
    overflow-x: hidden;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const FormContainerRight = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100vh;
  text-align: left;
  height: 100%;

  @media screen and (max-width: 960px) {
    height: 100%;
    max-width: 90vw;
    justify-content: center;
  }
`;

const ContactInformation = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  min-width: 500px;
  margin: 0 2rem;
  justify-content: baseline;
  align-items: center;
  height: 55%;
  background-color: #efb158;
  width: 100%;
  @media screen and (max-width: 960px) {
    margin-top: 3rem;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
const Form = styled.form`
  border-radius: 5px;
  @media screen and (max-width: 960px) {
    margin-top: 1rem;
    height: 100%;
  }
`;

const SubHeading = styled.h1`
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  @media screen and (max-width: 960px) {
    font-size: 30px;
  }
`;

const FormInputs = styled.div`
  width: 460px;
  background-color: #202628;
  border-radius: 15px;
  position: relative;
  transition: all 0.5s ease;
  margin-bottom: 1rem;
  @media screen and (max-width: 960px) {
    width: 300px;
  }
`;
const Label = styled.label`
  width: 100%;
  height: 100%;
  padding: 10px;
  font-weight: bold;
  color: #f2f2f2;
  background-color: transparent;
  border-radius: 15px;
  position: relative;
  transition: all 0.5s ease;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  box-shadow: none;
  border: none;
  border-radius: 15px;
  background: transparent;
  color: #f2f2f2;
  padding: 15px 25px 15px 25px;
  font-size: 16px;
  outline: none;
`;

const Textarea = styled.textarea`
  box-shadow: none;
  border-radius: 15px;
  background: transparent;
  resize: none;
  color: #f2f2f2;
  padding: 20px 100px 20px 45px;
  font-size: 16px;
  outline: none;
  border: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  align-items: center;
  transition: all 0.3s ease-in;
  margin: 0 2rem;

  @media screen and (max-width: 1200px) {
    transition: all 0.3s ease-in;

    text-align: center;
    padding-left: 15px;
  }
  @media screen and (max-width: 630px) {
    transition: all 0.3s ease-in;
    &:before {
      content: "";
      margin: 0 -3rem;
    }
    text-align: center;
    width: 100%;
  }
`;
export const SubmitButton = styled.button`
  width: 150px;
  height: 60px;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 1) 1.95px 1.95px 2.6px;
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#e7b158" : "#5dbee8")};

  padding: 10px;
  color: #f2f2f2;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    transform: scale(1.1);
  }

  .IconContext {
    @media screen and (max-width: 960px) {
      display: none;
    }
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    width: 130px;
    /* width: 100%; */
    font-size: 16px;
  }
`;
const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: justify;
`;
const ListItem = styled.li`
  width: 100%;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 1rem 0;
  color: #202628;
`;

const Contact = () => {
  return (
    <Container>
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Contains several ways to easily reach me"
        />
        <link rel="canonical" href="http://anthonyjmann.com/contact" />
      </Helmet>
      <InnerContainer>
        <ContactInformation>
          <SubHeading>
            <span style={{ color: "rgb(49 49 49)" }}>Interested?</span> Get in
            touch today!
          </SubHeading>
          <InfoList>
            <ListItem>Anthony Mann</ListItem>
            <ListItem>anthonyjmann87@gmail.com</ListItem>
            <ListItem>0428634295</ListItem>
          </InfoList>
        </ContactInformation>
        <FormContainerRight>
          <Form name="contact" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <Label htmlFor="name">Name:</Label>
            <FormInputs>
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </FormInputs>
            <Label htmlFor="email">Email:</Label>
            <FormInputs>
              <Input
                type="text"
                name="email"
                placeholder="Enter your email"
                required
              />
            </FormInputs>
            <Label htmlFor="subject">Subject:</Label>
            <FormInputs>
              <Input type="text" name="subject" placeholder="Enter a Subject" />
            </FormInputs>
            <Label htmlFor="message">Message:</Label>
            <FormInputs>
              <Textarea
                name="message"
                placeholder="Enter your message"
                cols="30"
                rows="5"
                required
              />
            </FormInputs>
            <ButtonContainer>
              <SubmitButton primary type="submit">
                Send Message
              </SubmitButton>
            </ButtonContainer>
          </Form>
        </FormContainerRight>
      </InnerContainer>
    </Container>
  );
};

export default Contact;
