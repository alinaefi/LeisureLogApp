import React from "react";
import styled from 'styled-components';

const Box = styled.div`
    padding: 2.5%;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const Footer = () => {
  return (
    <Box>
      <h5 style={{ fontSize:"16px", textAlign:"center" }}> by Alina Efimova </h5>
    </Box>
  );
}

export default Footer;