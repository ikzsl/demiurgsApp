import React from 'react';
import styled from 'styled-components';
import itemTypes from '../utils/itemTypes';

import Pic from './Pic';

const Item = ({ type }) => {
  const { title, subtitle } = itemTypes[type];
  return (
    <StyledItem>
      <Pic itemType={type} />
      <TextContainet>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </TextContainet>
    </StyledItem>
  );
};

export default Item;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  width: 328px;
  height: 72px;
  background-color: white;
  border-radius: 8px;
  /* padding: 16px; */
  margin: 5px;
`;

const StyledTitle = styled.span`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
`;

const StyledSubtitle = styled.span`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

const TextContainet = styled.div`
  display: flex;
  flex-direction: column;
`;
