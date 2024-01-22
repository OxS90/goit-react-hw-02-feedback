import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

class Notification extends Component {
  render() {
    return <p className={styles.notification}>{this.props.message}</p>;
  }
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
