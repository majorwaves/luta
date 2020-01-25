import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LineChart from "react-linechart";
import "../../node_modules/react-linechart/dist/styles.css";

const Wrapper = styled.div`
  margin: 4rem auto;
  display: flex;
  justify-content: center;

  svg {
    path {
      stroke-width: 3px;
    }
  }
`;

const Chart = ({ fights, width, height }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const renderData = () => {
      const chartData = [];

      let fightsCopy = [...fights].reverse();

      fightsCopy.map((fight, index) => {
        if (fight.result === "win") {
          return chartData.push({ x: index, y: 1 });
        } else {
          return chartData.push({ x: index, y: 0 });
        }
      });

      console.log(chartData);
      setData(chartData);
    };

    return renderData();
  }, [fights]);

  return (
    <Wrapper>
      {data.length > 0 && (
        <LineChart
          width={width}
          height={height}
          hideXLabel
          hideYLabel
          hideXAxis
          hideYAxis
          hidePoints
          pointRadius={20}
          data={[
            {
              color: "black",
              points: data
            }
          ]}
        />
      )}
    </Wrapper>
  );
};

export default Chart;
