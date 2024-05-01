import styles from "../styles/SignUpForm.module.css";
import PropTypes from "prop-types";

export const SignUpForm = ({ email, error, handleChange, handleSubmit }) => {
  const inputClassName = `${styles.input} ${error ? styles.error : null}`;

  return (
    <div className={styles.card}>
      <div className={styles["card-text"]}>
        <div className={styles.info}>
          <h1 className={styles.title}>Stay updated!</h1>
          <p className={styles.description}>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className={styles.list}>
            <li>
              <span>Product discovery and building what matters</span>
            </li>
            <li>
              <span>Measuring to ensure updates are a success</span>
            </li>
            <li>
              <span>And much more!</span>
            </li>
          </ul>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <label className={styles.label}>Email address</label>
            <input
              type="text"
              name="email"
              placeholder="email@company.com"
              className={inputClassName}
              value={email}
              onChange={handleChange}
            />
            {error ? (
              <p className={styles["error-message"]}>Valid email required</p>
            ) : null}
          </div>
          <button className={styles.button}>
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <img
        src="/illustration-sign-up-desktop.svg"
        alt="Sign up form illustration"
        className={styles["card-image"]}
      />
    </div>
  );
};

SignUpForm.propTypes = {
  email: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
