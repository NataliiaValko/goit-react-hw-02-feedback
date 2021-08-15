import s from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = (props) => {
  return (
    <>
      <h2 className={s.title}>Statistics</h2>
      <ul className={s.list}>
        {Object.keys(props).map((prop) => (
          <li key={prop} className={s[prop]}>
            <p className={s.text}>
              {prop === "positivePercentage" ? "positive feedback" : prop}:{" "}
              {props[prop]}
            </p>
          </li>
        ))}
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
  positivePercentage: PropTypes.number.isRequired,
};
