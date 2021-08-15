// import s from "./App.module.css";
import PropTypes from "prop-types";

import Container from "../Container";

const Statistics = (props) => {
  return (
    <section className="statistics">
      <Container>
        <h2>Statistics</h2>
        <ul>
          {Object.keys(props).map((prop) => (
            <li key={prop}>
              <p>
                {prop}: {props[prop]}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
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
