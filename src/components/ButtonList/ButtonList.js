// import s from "./App.module.css";
import PropTypes from "prop-types";

const ButtonList = ({ options, onLeaveFeedback }) => (
  <ul>
    {Object.keys(options).map((type) => (
      <li key={type}>
        <button onClick={() => onLeaveFeedback(type)}>{type}</button>
      </li>
    ))}
  </ul>
);

export default ButtonList;

ButtonList.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.number).isRequired,
};
