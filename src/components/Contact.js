// src/components/Contact.js
import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  background-color: #000;
  color: #fff;
  padding: 40px;
  text-align: center;
`;

const Contact = () => {
  return (
    <ContactSection>
      <h2>Contact</h2>
      <p>Contact information...</p>
    </ContactSection>
  );
};

export default Contact;
