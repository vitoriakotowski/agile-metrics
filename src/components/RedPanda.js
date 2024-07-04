// src/components/RedPanda.js
import React from "react";
import styled from "styled-components";
import redPandaImage from "../assets/WILSON.svg"; // Replace with your actual image path

const RedPandaImage = styled.img`
  width: 700px; /* Increased size */
  height: auto;
  margin-left: -50px; /* Overlapping the red block */
`;

const RedPanda = () => {
  return <RedPandaImage src={redPandaImage} alt="Red Panda" />;
};

export default RedPanda;
