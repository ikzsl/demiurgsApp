import React from 'react';
import styled from 'styled-components';

import itemTypes from '../utils/itemTypes';

const Pic = ({ itemType }) => {
  return (
    <StyledItem
      bgcolor={itemTypes[itemType].bgcolor}
      border={itemTypes[itemType].border}
      shadow={itemTypes[itemType].shadow}
    >
      <Img src={itemTypes[itemType].image} />
    </StyledItem>
  );
};

export default Pic;

const Img = styled.img`
  src: url(${(props) => props.src});
  width: 20px;
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 15px;
  border: ${(props) => (props.border ? '1px solid #000000' : 'none')};
  box-shadow: ${(props) =>
    props.shadow ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none'};
  background: linear-gradient(
    180deg,
    ${(props) => props.bgcolor[0]} 0%,
    ${(props) => props.bgcolor[1]} 100%
  );
`;
