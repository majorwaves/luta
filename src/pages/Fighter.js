import React, { useState, useEffect } from "react";
import { device } from "../utils/devices";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFighter } from "../actions/FighterActions";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import Flag from "../components/Flag";
import FighterName from "../components/FighterName";
import FighterRecord from "../components/FighterRecord";
import FighterImage from "../components/FighterImage";
import BoutList from "../components/BoutList";
import Stats from "../components/Stats";

const Wrapper = styled.div``;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: "";
    width: 13vw;
    height: 13vw;
    background: rgb(51, 51, 51);
    animation: ${rotate} 2s linear infinite;

    @media ${device.laptop} {
      width: 7vw;
      height: 7vw;
    }
  }
`;

const Fighter = () => {
  const [loaded, setLoaded] = useState();
  const [fighter, setFighter] = useState();

  let { id } = useParams();

  useEffect(() => {
    const fetchFighter = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/.netlify/functions/api/fighter/${id}`
      );

      console.log(response.data);
      if (response.success.data) {
        setFighter(response.data);
        setLoaded(true);
      }
    };

    fetchFighter();
  }, []);

  return (
    <Wrapper>
      {loaded ? (
        <>
          <Flag country={fighter.nationality} />
          <FighterName name={fighter.name} nickname={fighter.nickname} />
          <FighterImage name={fighter.name} />
          <FighterRecord record={fighter.record} />
          <Stats
            summary={fighter.summary}
            strikes={fighter.strikes}
            takedowns={fighter.takedowns}
          />
          <BoutList fights={fighter.fights} />
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};

export default Fighter;
