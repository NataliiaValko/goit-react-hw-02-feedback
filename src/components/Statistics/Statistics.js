import s from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className={s.title}>Statistics</h2>
      <ul className={s.list}>
        <li className={s.good}>
          <p className={s.text}>Good: {good}</p>
        </li>
        <li className={s.neutral}>
          <p className={s.text}>Neutral: {neutral}</p>
        </li>
        <li className={s.bad}>
          <p className={s.text}>Bad: {bad}</p>
        </li>
        <li className={s.total}>
          <p className={s.text}>Total: {total}</p>
        </li>
        <li className={s.positivePercentage}>
          <p className={s.text}>Positive feedback: {positivePercentage}</p>
        </li>
      </ul>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
