// import s from "./App.module.css";
import PropTypes from "prop-types";
import ButtonList from "../ButtonList";

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <ButtonList onLeaveFeedback={onLeaveFeedback} options={options} />
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.number).isRequired,
};
