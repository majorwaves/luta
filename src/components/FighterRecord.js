import React from "react";
import styled from "styled-components";

const Record = styled.div`
  text-align: center;
  font-size: 48px;
`;

const FighterRecord = ({ wins, losses }) => {
  return (
    <Record>
      {wins.total} — {losses.total}
    </Record>
  );
};

export default FighterRecord;
