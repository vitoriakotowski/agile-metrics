// src/components/StepByStep.js
import React from "react";
import styled from "styled-components";

const StepSection = styled.section`
  background-color: #444;
  color: #fff;
  padding: 40px;
  text-align: center;
`;

const StepByStep = () => {
  return (
    <StepSection>
      <h2>Step by step</h2>
      <ul>
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
        {/* Add other steps */}
      </ul>
    </StepSection>
  );
};

export default StepByStep;
