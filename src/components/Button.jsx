import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

class Button extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onClickButton: PropTypes.func.isRequired,
  };
  render() {
    const { name, onClickButton } = this.props;
    return (
      <button className={styles.button} type="button" onClick={onClickButton}>
        {name}
      </button>
    );
  }
}
export default Button;
