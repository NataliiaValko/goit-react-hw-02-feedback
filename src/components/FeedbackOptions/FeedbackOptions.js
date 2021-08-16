import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <ul className={s.button__list}>
    <li className={s.button__item}>
      <button
        type="button"
        className={s.good}
        onClick={() => onLeaveFeedback("good")}
      >
        Good
      </button>
    </li>
    <li className={s.button__item}>
      <button
        type="button"
        className={s.neutral}
        onClick={() => onLeaveFeedback("neutral")}
      >
        Neutral
      </button>
    </li>
    <li className={s.button__item}>
      <button
        type="button"
        className={s.bad}
        onClick={() => onLeaveFeedback("bad")}
      >
        Bad
      </button>
    </li>
  </ul>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.number).isRequired,
};
