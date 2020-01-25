import React from "react";
import styled from "styled-components";
import { device } from "../utils/devices";
import calculateStreak from "../utils/calculateStreak";
import Moment from "react-moment";

const Wrapper = styled.div`
  margin: 4rem 0;

  @media ${device.laptop} {
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

  @media ${device.laptop} {
    margin: 0;

    &:first-of-type,
    &:nth-of-type(4n) {
      text-align: left;
    }

    &:nth-of-type(3n) {
      text-align: right;
    }
  }
`;

const Header = styled.div`
  font-family: "OR";
  font-size: 30px;
  margin-bottom: 1rem;

  @media ${device.laptop} {
    font-size: 48px;
  }
`;

const Item = styled.li`
  font-size: 30px;
  text-transform: uppercase;

  @media ${device.laptop} {
    font-size: 48px;
  }

  &:after {
    content: ",";
  }

  &:last-of-type {
    &:after {
      content: "";
    }
  }
`;

const Stats = ({ strikes, takedowns, fights, summary }) => {
  const renderStyles = () => {
    return summary.map((item, index) => {
      return <Item key={index}>{item}</Item>;
    });
  };

  const strikeAccuracy = Math.ceil(
    (strikes.successful / strikes.attempted) * 100
  );
  const takedownAccuracy = Math.ceil(
    (takedowns.successful / takedowns.attempted) * 100
  );

  return (
    <Wrapper>
      {/*
      <List>
        <Header>Attributes</Header>
        {renderStyles()}
      </List>
      <List>
        <Header>Strikes</Header>
        <Item>{strikes.successful} Total</Item>
        <Item>{strikes.attempted} Attempted</Item>
        <Item>{strikeAccuracy}% Accuracy</Item>
      </List>
      <List>
        <Header>Takedowns</Header>
        <Item>{takedowns.successful} Total</Item>
        <Item>{takedowns.attempted} Attempted</Item>
        <Item>{takedownAccuracy}% Accuracy</Item>
      </List>
      */}
      <List>
        <Header>Current Win Streak</Header>
        <Item>{calculateStreak(fights).current}</Item>
      </List>
      <List>
        <Header>Longest Win Streak</Header>
        <Item>{calculateStreak(fights).longest}</Item>
      </List>
      <List>
        <Header>Last Fight</Header>
        <Item>
          <Moment format="LL">{fights[0].date}</Moment>
        </Item>
      </List>
    </Wrapper>
  );
};

export default Stats;
