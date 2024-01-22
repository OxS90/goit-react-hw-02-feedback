import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};
class App extends Component {
  state = { ...initialState };

  handleIncrement = e => {
    const { good, neutral, bad } = this.state;
    const buttonName = e.target.innerText;
    if (buttonName === 'Good') {
      this.setState({ good: good + 1 });
    } else if (buttonName === 'Neutral') {
      this.setState({ neutral: neutral + 1 });
    } else if (buttonName === 'Bad') {
      this.setState({ bad: bad + 1 });
    }
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = Math.round((good / total) * 100);
    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
