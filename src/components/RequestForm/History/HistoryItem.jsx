import React from 'react';
import PropTypes from 'prop-types';
const HistoryItem = ({ id, method, url }) => {
  return (
    <ul key={id}>
      <p key={id}>{method}</p>
      <span key={id}>{url}</span>
    </ul>
  );
};

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default HistoryItem;

