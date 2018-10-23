import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/devices';

const Wrapper = styled.div`
  margin: 1rem 0;
`

const Name = styled.h2`
  margin: 0;
  font-size: 60px;
  font-weight: 300;
  text-align: center;

  @media ${device.laptop}{
    font-size: 120px;
  }
`;

const NickName = styled.h2`
  font-family: 'OR';
  font-weight: 200;
  font-size: 48px;
  margin: 0;
  text-align: center;

  @media ${device.laptop}{
    font-size: 72px;
  }

  &:before {
    content: '“';
    padding-right: 1rem;
  }

  &:after {
    content: '”';
    padding-left: 1rem;
  }
`

const FighterName = (props) => (
  <Wrapper>
    <NickName>{props.nickname}</NickName>
    <Name>{props.name}</Name>
  </Wrapper>
);

export default FighterName;
