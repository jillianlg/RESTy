import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './ResponseDisplay.css';

const ResponseDisplay = ({ display }) => {
  return (
    <pre className={styles.ResponseDisplay} >
      <ReactJson src={display} displayDataTypes={false} />
    </pre>
  );
};

ResponseDisplay.propTypes = {
  display: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default ResponseDisplay;
