import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import { device } from '../utils/devices';
import { Link } from 'react-router-dom';

const Head = styled.header`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  background: rgb(0,0,0);
  color: white;
  z-index: 1;

  @media ${device.laptop}{
    padding: 2rem 5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 10px 22px -9px rgba(0,0,0,0.06);
  }
`;

const Logo = styled.h1`
  font-family: 'OR';
  font-weight: 400;
  font-size: 36px;
  margin: 0;
  padding: 1rem;
  text-align: center;

  a {
    color: white;
    text-decoration: none;
  }

  @media ${device.laptop}{
    font-size: 72px;
    text-align: left;
    padding: 0;
  }
`

const Header = (props) => (
  <Head>
    <Logo><Link to='/'>Luta</Link></Logo>
    <Search />
  </Head>
);

export default Header;
