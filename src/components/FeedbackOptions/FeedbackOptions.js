// import s from "./App.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <ul>
    {Object.keys(options).map((type) => (
      <li key={type}>
        <button onClick={() => onLeaveFeedback(type)}>{type}</button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.number).isRequired,
};
