import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  font-size: 24px;
  line-height: 30px;
  font-weight: 200;
`;

const Home = () => (
  <Wrapper>
    Try searching for a fighter (ie. Jose Aldo), sorry it's mad slow, the API is kinda janky.
  </Wrapper>
);

export default Home;
