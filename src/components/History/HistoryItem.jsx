import React from 'react';
import PropTypes from 'prop-types';
const HistoryItem = ({ id, method, url }) => {
  return (
    <ul id={id}>
      <p id={id}>{method}</p>
      <span id={id}>{url}</span>
    </ul>
  );
};

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default HistoryItem;
