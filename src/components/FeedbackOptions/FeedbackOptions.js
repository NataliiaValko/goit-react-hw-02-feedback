import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback, names }) => (
  <ul className={s.button__list}>
    {names.map((name) => (
      <li key={name} className={s.button__item}>
        <button
          type="button"
          className={s[name]}
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};
