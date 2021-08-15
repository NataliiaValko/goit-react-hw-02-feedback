import s from "./Section.module.css";
import PropTypes from "prop-types";
import Container from "../Container";

const Section = ({ title = "", children }) => (
  <section className={s.section}>
    <Container>
      {title && (
        <h1 className={s.title} aria-label="Please leave your feedback">
          {title}
        </h1>
      )}
      {children}
    </Container>
  </section>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
