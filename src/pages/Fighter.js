import React, { useState, useEffect } from "react";
import { device } from "../utils/devices";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import Flag from "../components/Flag";
import FighterName from "../components/FighterName";
import FighterRecord from "../components/FighterRecord";
import FighterImage from "../components/FighterImage";
import BoutList from "../components/BoutList";
import Stats from "../components/Stats";
import Chart from "../components/Chart";

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
  const [fighter, setFighter] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    let api = `http://localhost:34567`;

    if (process.env.NODE_ENV === "production") {
      api = `https://luta.netlify.com`;
    }

    const fetchFighter = async () => {
      if (loaded) {
        setLoaded(false);
      }
      const response = await axios.get(
        `${api}/.netlify/functions/api/fighter/${id}`
      );

      if (response.data.success) {
        setFighter(response.data.data);
        setLoaded(true);
      }
    };

    fetchFighter();
  }, [id]);

  const {
    nationality,
    name,
    nickname,
    wins,
    losses,
    fights,
    strikes,
    takedowns,
    summary
  } = fighter;

  return (
    <Wrapper>
      {loaded ? (
        <>
          <Flag country={nationality} />
          <FighterName name={name} nickname={nickname} />
          <FighterImage name={name} />
          <FighterRecord wins={wins} losses={losses} />
          <Chart
            fights={fights}
            width={window.innerWidth * 0.4}
            height={window.innerWidth * 0.1}
          />
          <Stats
            fights={fights}
            summary={summary}
            strikes={strikes}
            takedowns={takedowns}
          />
          <BoutList fights={fights} />
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};

export default Fighter;
