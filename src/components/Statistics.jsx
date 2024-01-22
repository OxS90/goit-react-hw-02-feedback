import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul className={styles.statistics_group}>
        <li className={styles.statistics_item}>Good: {good}</li>
        <li className={styles.statistics_item}>Neutral:{neutral}</li>
        <li className={styles.statistics_item}>Bad: {bad}</li>
        <li className={styles.statistics_item}>Total: {total}</li>
        <li className={styles.statistics_item}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
