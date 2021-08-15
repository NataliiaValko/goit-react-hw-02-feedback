// import s from "./App.module.css";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return <p className="">{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
