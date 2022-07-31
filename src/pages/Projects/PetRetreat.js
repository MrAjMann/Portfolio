import React from "react";

// import { FaGithub } from "react-icons/fa";
// import { IconContext } from "react-icons";

import styled from "styled-components";
import { Button, Container } from "../../GlobalStyles";
import imgMain from "../../assets/PetRetreat/Landing-Page.png";
// import imgStyleGuid from "../../assets/DevSearch/Color-Chart.png";
// import imgPurpose from "../../assets/DevSearch/JobSeekerJobLists.png";
// import imgJobSeeker from "../../assets/DevSearch/JobSeekerJobLists.png";
// import imgEmployer from "../../assets/DevSearch/EmployerAddJob.png";
// import CirclePattern from '../../assets/CirclePattern.svg';

// Containers
const ContentWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: left;
	margin-top: 10%;
	margin-left: 10%;
	text-align: left;
	padding: 10px;
	width: 60%;
	@media screen and (max-width: 960px) {
		min-width: 90vw;
		margin-left: 0;
		overflow-x: hidden;
	}
`;
const Desc = styled.div`
	display: flex;
	flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
	justify-content: center;
	align-items: left;
	padding: 10px;
	width: 100%;
	margin-top: 3rem;
	@media screen and (max-width: 960px) {
		margin-top: 1rem;
		flex-direction: column;
		justify-content: flex-end;
		min-width: 90vw;
		margin-left: 0;
		overflow-x: hidden;
	}
`;
const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin: 1rem 2rem;
	align-items: left;
	padding: 10px;
	min-width: 40%;
	@media screen and (max-width: 960px) {
		flex-direction: column;
		justify-content: flex-end;
		min-width: 90vw;
		margin-left: 0;
		overflow-x: hidden;
	}
`;

const FigmaEmbed = styled.div`
	margin: 1rem 0;

	max-width: 860px;
	@media screen and (max-width: 960px) {
	}
`;

// Images
const ImgWrapper = styled.div`
	margin: 1rem 0;
	max-width: 860px;
	max-height: fit-content;
	@media screen and (max-width: 960px) {
	}
`;
const Img = styled.img`
	margin: 10px -10px;
	border-radius: 15px;
	max-height: 660px;

	@media screen and (max-width: 960px) {
		max-width: 90vw;

		min-width: 300px;
	}
`;

const Iframe = styled.iframe`
	margin: 10px -10px;

	@media screen and (max-width: 960px) {
		max-width: 90vw;

		min-width: 300px;
	}
`;

// Text
const Title = styled.h1`
	font-family: "Roboto";
	font-size: 48px;
	margin: 0.5rem 0;
	color: #f2f2f2;
	@media screen and (max-width: 960px) {
		font-size: 36px;
	}
`;
const TopLineText = styled.p`
	margin: 1rem 0;
	font-size: 24px;
	color: #e7b157;
	@media screen and (max-width: 960px) {
		font-size: 18px;
	}
`;
const SubTitle = styled.p`
	margin: 1rem 0;

	font-size: 18px;
	color: #e7b157;
	@media screen and (max-width: 960px) {
		font-size: 14px;
		margin-bottom: 2rem;
	}
`;
const InnerTitles = styled.h2`
	font-family: "Roboto", sans-serif;
	font-size: 36px;
	color: #5dbee8;

	@media screen and (max-width: 960px) {
		font-size: 32px;
	}
`;
const InnerText = styled.p`
	letter-spacing: 1.1px;
	font-size: 16px;
	color: #f2f2f2;
	@media screen and (max-width: 960px) {
		font-size: 14px;
	}
`;

const DevSearch = () => {
	return (
		<Container>
			<ContentWrapper>
				<TopLineText>WORK IN PROGRESS</TopLineText>
				<Title>Pet Retreat</Title>
				<SubTitle>
					A fullstack website based on a fictitious company. This website is has
					and will continue to be built mostly live on Twitch, you can watch the
					playlist{" "}
					<a
						style={{
							color: "#e7b157",
							fontStyle: "italic",
							letterSpacing: "1.2px",
							fontSize: "1.2rem",
							fontWeight: "bold",
							borderBottom: "1px solid #e7b157 ",
						}}
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.youtube.com/watch?v=TUTz3-LrHUs&list=PL4Ohhad0pa6Qvypn0G-tHFqR1W2FCcCpV"
					>
						here
					</a>
				</SubTitle>
				<Button
					style={{ margin: "2rem 0", fontSize: "24px" }}
					primary
					href="https://boarding-kennel-9fg2k5jpt-mrajmann.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Live Site
				</Button>

				<ImgWrapper>
					<Img src={imgMain} max-width="800px" alt="Pet Retreat Landing Page" />
				</ImgWrapper>
				<Desc>
					<InnerContainer>
						<InnerTitles>The Purpose</InnerTitles>
						<InnerText>
							<p>
								{" "}
								This pet retreat application is the start of a much bigger
								project, to create a base template for animal shelters, boarding
								kennels and pet retreat centers.
							</p>

							<h2 style={{ margin: "1rem 0", letterSpacing: "1.3px" }}>
								Current Goals for Features and Functionality
							</h2>
							<ul>
								<li style={{ fontWeight: "400" }}>
									{" "}
									- Customisable management system allowing authorised staff
									access information regarding the animals they look after.
								</li>
								<li style={{ fontWeight: "400" }}>
									- Multiple style options for any single page including the
									admin dashboard at base level with Customisability available.
								</li>
								<li style={{ fontWeight: "400" }}>
									- Pet Owners have thier own personal dashboard
								</li>
								<li style={{ fontWeight: "400" }}>
									- Stay up to date with your pets stay with photo gallery
									system, allowing the facility to upload photos of a the pet
									during thier visit. The customer then has full access to view
									and download and delete the photos as they see fit.
								</li>
							</ul>
						</InnerText>
					</InnerContainer>
				</Desc>
				{/* <Desc imgStart>
          <InnerContainer>
            <InnerTitles>Job Seekers</InnerTitles>
            <InnerText>
              <p>
                For potential employee's DevSearch allows job seekers to search
                for employment, a job seeker can apply for a position, upload
                resume's and cover letters and track their applications from
                start to finish all this while getting crucial feedback from
                potential employers.
              </p>
            </InnerText>
          </InnerContainer>
          <ImgWrapper>
            <Img
              src={imgJobSeeker}
              width="fit-content"
              height="fit-content"
              alt="CompariTube application style Guide Image"
            />
          </ImgWrapper>
        </Desc>
        <Desc imgStart>
          <InnerContainer>
            <InnerTitles>Employers</InnerTitles>
            <InnerText>
              <p>
                DevSearch provides employers the ability to easily create and
                manage current positions, while also gaining access to a
                convenient way to track an applicants progress through the
                employment process. We provide the tools necessary to completely
                manage your hiring process in one convenient location.
              </p>
            </InnerText>
          </InnerContainer>
          <ImgWrapper>
            <Img
              src={imgEmployer}
              width="600px"
              height="fit-content"
              alt="CompariTube application style Guide Image"
            />
          </ImgWrapper>
        </Desc> */}
				<Desc imgStart>
					<InnerContainer>
						<InnerTitles>The Design</InnerTitles>
						<InnerText style={{ marginTop: "1rem" }}>
							<p>
								This application will have multiple variations to each design,
								with the ability to also provide thier own unique design.
								Currently I have complete one template design with more to come
								in the future.
							</p>
						</InnerText>
					</InnerContainer>
					{/* <ImgWrapper>
						<Img
							src={imgStyleGuid}
							min-width="600px"
							width="fit-content"
							height="fit-content"
							alt="Petreat application style Guide Image"
						/>
					</ImgWrapper> */}
				</Desc>
				<FigmaEmbed>
					<Iframe
						id="figmaEmbed"
						width="800"
						height="450"
						src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FfPNKOFdYpu3bADvciAaAQR%2FBoarding-Kennel%3Fnode-id%3D0%253A1"
						allowfullscreen
					></Iframe>
				</FigmaEmbed>
			</ContentWrapper>
		</Container>
	);
};

export default DevSearch;
