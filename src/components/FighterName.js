import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/devices';

const Wrapper = styled.div`
  margin: 1rem 0;
`

const Name = styled.h2`
  margin: 0;
  font-size: 60px;
  line-height: 48px;
  padding-top: 1rem;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;

  @media ${device.laptop}{
    font-size: 120px;
    line-height: 160px;
    padding: 0;
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

    @media ${device.laptop}{
      padding-right: 1rem;
    }
  }

  &:after {
    content: '”';

    @media ${device.laptop}{
      padding-left: 1rem;
    }
  }
`

const FighterName = (props) => {



  const renderNickName = () => {
    if(props.nickname !== ''){
      return <NickName>{props.nickname}</NickName>
    } else {
      return
    }
  }

  return (
    <Wrapper>
      {renderNickName()}
      <Name>{props.name}</Name>
    </Wrapper>
  )
}

export default FighterName;
