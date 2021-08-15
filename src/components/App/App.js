import { Component } from "react";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Section from "../Section";
import Container from "../Container";
import Notification from "../Notification";

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onLeaveFeedback = (value) => {
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return (total += value);
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const onLeaveFeedback = this.onLeaveFeedback;
    const options = this.state;
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please, leave your feedback">
          <Container>
            <FeedbackOptions
              onLeaveFeedback={onLeaveFeedback}
              options={options}
            />
          </Container>
        </Section>
        <Section>
          <Container>
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="No feedback given" />
            )}
          </Container>
        </Section>
      </>
    );
  }
}

export default App;
