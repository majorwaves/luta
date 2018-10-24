import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/devices';

const Wrapper = styled.div`
  margin: 4rem 0;

  @media ${device.laptop}{
    display: grid;
    padding: 2rem 4rem 0;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5vw;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-align: center;
  margin-bottom: 2rem;

  @media ${device.laptop}{
    margin: 0;

    &:first-of-type{
      text-align: left;
    }

    &:last-of-type {
      text-align: right;
    }
  }
`;

const Header = styled.div`
  font-family: 'OR';
  font-size: 30px;
  margin-bottom: 1rem;

  @media ${device.laptop}{
    font-size: 48px;
  }
`;

const Item = styled.li`
  font-size: 30px;
  text-transform: uppercase;

  @media ${device.laptop}{
    font-size: 48px;
  }

  &:after {
    content: ',';
  }

  &:last-of-type {
    &:after {
      content: ''
    }
  }
`;

const Stats = (props) => {

  const renderStyles = () => {
    return props.summary.map((item, index) => {
      return <Item key={index}>{item}</Item>
    })
  }

  const strikeAccuracy = Math.ceil((props.strikes.successful / props.strikes.attempted) * 100);
  const takedownAccuracy = Math.ceil((props.takedowns.successful / props.takedowns.attempted) * 100);

  return (
    <Wrapper>
      <List>
        <Header>Attributes</Header>
        {renderStyles()}
      </List>
      <List>
        <Header>Strikes</Header>
        <Item>{props.strikes.successful} Total</Item>
        <Item>{props.strikes.attempted} Attempted</Item>
        <Item>{strikeAccuracy}% Accuracy</Item>
      </List>
      <List>
        <Header>Takedowns</Header>
        <Item>{props.takedowns.successful} Total</Item>
        <Item>{props.takedowns.attempted} Attempted</Item>
        <Item>{takedownAccuracy}% Accuracy</Item>
      </List>
    </Wrapper>
  )
}

export default Stats;
