import React from 'react';
import styled from 'styled-components';

const Fab = ({ cb, children }) => {
  return <StyledBotton onClick={cb} >{children}</StyledBotton>;
};

export default Fab;

const StyledBotton = styled.button`
  background-color: #5a3472;
  border: none;
  width: 330px;
  color: #ffffff;
  align-self: center;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 15px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  text-align: center;
`;
