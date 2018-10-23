import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/devices';
import { Link } from 'react-router-dom';

const Wrapper = styled.li`
  padding: 2rem 0;
  border-top: 3px solid rgb(51,51,51);
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.laptop}{
    padding: 3rem;
    display: grid;
    grid-template-columns: 1fr 5fr 5fr;
  }

  &:last-of-type {
    border-bottom: 3px solid rgb(51,51,51);
  }
`;

const Opp = styled.h2`
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 1rem;

  a {
    color: rgb(51,51,51);
    text-decoration: none;
  }

  @media ${device.laptop}{
    font-size: 48px;
    margin: 0;
  }
`

const Result = styled.span`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: inline-block;
  background: ${props => props.win ? 'rgb(51,51,51)' : 'transparent'};
  border: 2px solid rgba(51,51,51);
  margin-bottom: 1rem;

  @media ${device.laptop}{
    width: 2vw;
    height: 2vw;
    margin: 0;
  }
`

const Method = styled.span`
  font-weight: 300;
  font-size: 30px;
  margin: 0;
  text-align: right;

  @media ${device.laptop}{
    font-size: 48px;
  }
`

const Bout = (props) => (
  <Wrapper>
    <Result win={props.result === 'win'} />
    <Opp><Link to={`/fighter/${props.opponent}`}>{props.opponent}</Link></Opp>
    <Method>{props.method}</Method>
  </Wrapper>
);

export default Bout;
