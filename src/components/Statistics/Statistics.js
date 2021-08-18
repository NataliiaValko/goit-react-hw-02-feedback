import s from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <>
      <h2 className={s.title}>Statistics</h2>
      <ul className={s.list}>
        {Object.keys(options).map((name) => (
          <li key={name} className={s[name]}>
            <p className={s.text}>
              {name}: {options[name]}
            </p>
          </li>
        ))}
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
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
