// import s from "./App.module.css";
import PropTypes from "prop-types";

const Section = ({ title = "", children }) => (
  <section className="">
    {title && <h1>{title}</h1>}
    {children}
  </section>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
