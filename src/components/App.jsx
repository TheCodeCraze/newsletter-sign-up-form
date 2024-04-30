import styles from "../styles/App.module.css";

export const App = () => {
  return (
    <main className={styles.card}>
      <div className={styles["card-text"]}>
        <div className={styles.info}>
          <h1 className={styles.title}>Stay updated!</h1>
          <p className={styles.description}>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className={styles.points}>
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
        <form className={styles.form}></form>
      </div>
      <img
        src="/illustration-sign-up-desktop.svg"
        alt="Sign up form illustration"
        className={styles["card-image"]}
      />
    </main>
  );
};

// Email address
// email@company.com

// Subscribe to monthly newsletter

// <!-- Success message start -->

// Thanks for subscribing!

// A confirmation email has been sent to ash@loremcompany.com.
// Please open it and click the button inside to confirm your subscription.

// Dismiss message

// <!-- Success message end -->
