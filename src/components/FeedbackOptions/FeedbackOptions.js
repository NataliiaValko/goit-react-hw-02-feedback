import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <ul className={s.button__list}>
    {Object.keys(options).map((type) => (
      <li key={type} className={s.button__item}>
        <button
          type="button"
          className={[s.button, s[type]].join(" ")}
          onClick={() => onLeaveFeedback(type)}
        >
          {type}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.number).isRequired,
};
