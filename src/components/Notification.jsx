import styles from "../styles/Notification.module.css";
import PropTypes from "prop-types";

export const Notification = ({ email, setEmail, setNotification }) => {
  const handleClick = () => {
    setNotification(false);
    setEmail("");
  };

  return (
    <div className={styles.card}>
      <img
        src="/icon-success.svg"
        alt="Subscription successful"
        className={styles.icon}
      />
      <h2 className={styles.title}>Thanks for subscribing!</h2>
      <p className={styles.description}>
        A confirmation email has been sent to <span>{email}</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button className={styles.button} onClick={handleClick}>
        Dismiss message
      </button>
    </div>
  );
};

Notification.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
};
