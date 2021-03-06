/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import styles from './HistoryList.css';

const HistoryList = ({ history }) => {

  const historyElements = history.map((item, i) => {
    return (
      <li key={`${item.method}+${item.url}`} >
        <HistoryItem method={item.method} url={item.url} id={i} />
      </li>
    );
  });

  return (
    <ul className={styles.History}>
      {historyElements}
    </ul>
  );
};

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
  })).isRequired,
};

export default HistoryList;
