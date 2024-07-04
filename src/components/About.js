import React from "react";
import styled from "styled-components";
import RedPanda from "./RedPanda";

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  padding: 40px;
  background: linear-gradient(
    to right,
    #d12f3d 60%,
    #333 40%
  ); /* Adjusted percentage */
`;

const TextContainer = styled.div`
  color: #fff;
  max-width: 50%;
  padding: 20px;

  h1 {
    font-size: 10rem; /* Set the font size of the h1 text */
    line-height: 1.1; /* Adjust line height for better text appearance */
    margin-bottom: 20px; /* Optional: add some space below the h1 */
    display: flex;
    align-items: center; /* Center align text vertically */
    /* Add these properties for better text alignment */
    border: 1px solid red; /* Add a border to see if the height is applied */
    background-color: rgba(
      255,
      0,
      0,
      0.1
    ); /* Add a background color for visibility */

    @media (max-width: 768px) {
      height: 200px; /* Adjust height for smaller screens */
    }
  }
`;

const About = () => {
  return (
    <AboutSection>
      <TextContainer>
        <h1>AGILE METRICS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Venenatis id urna lacus diam
          faucibus pellentesque at adipiscing. Lectus neque nisl viverra rhoncus
          tristique convallis amet. Sit at ut amet aenean sem viverra magnis mi.
        </p>
      </TextContainer>
      <RedPanda />
    </AboutSection>
  );
};

export default About;
