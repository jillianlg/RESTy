import React from 'react';

const HistoryItem = ({ id, method, url }) => {
  return (
    <ul key={id}>
      <p key={id}>{method}</p>
      <span key={id}>{url}</span>
    </ul>
  );
};

export default HistoryItem;

