import { useState } from "react";
import { SignUpForm } from "./SignUpForm";
import { Notification } from "./Notification";

export const App = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [notification, setNotification] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setError(false);
      setNotification(true);
    } else {
      setError(true);
    }
  };

  return (
    <main>
      {!notification ? (
        <SignUpForm
          email={email}
          error={error}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Notification
          email={email}
          setEmail={setEmail}
          setNotification={setNotification}
        />
      )}
    </main>
  );
};
