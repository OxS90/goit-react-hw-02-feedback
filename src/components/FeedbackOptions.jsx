import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  options = this.props.options;
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={styles.feedback_div}>
        {options.map(elem => (
          <Button name={elem} key={elem} onClickButton={onLeaveFeedback} />
        ))}
      </div>
    );
  }
}
export default FeedbackOptions;
