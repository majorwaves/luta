import React from 'react';
import styled from 'styled-components';
import Bout from './Bout';
import { device } from '../utils/devices';

const List = styled.ul`
  list-style: none;
  padding: 4rem 0 0;

  @media ${device.laptop}{
    padding: 4rem;
  }
`;

const BoutList = (props) => {

  const renderList = () => {
    return props.fights.map((fight, index) => {
      return (
        <Bout
          key={index}
          date={fight.date}
          method={fight.method}
          opponent={fight.opponent}
          result={fight.result}
          time={fight.time}
          round={fight.round}
        />
      )
    })
  }

  return (
    <List>
      {renderList()}
    </List>
  )
}

export default BoutList;
