import React from 'react';
import styled from 'styled-components';

const Record = styled.div`
  text-align: center;
  font-size: 48px;
`;

const FighterRecord = ({ record }) => {

  const array = record.split('-');
  const wins = array[0];
  const losses = array[1];
  const other = array[2];

  return (
    <Record>{wins} — {losses} — {other}</Record>
  )
}

export default FighterRecord;
