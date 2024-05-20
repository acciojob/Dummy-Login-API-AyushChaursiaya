import { useState } from "react";
import { InputData } from "./data";
import '../styles/App.css';


const LoginAPI = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    setTimeout(() => {
      // const user = InputData && InputData.find(user => user.email === email);
      // console.log(`Entered email: ${email}`); // Logs entered email
      // console.log(`Entered password: ${password}`); // Logs entered password
      const user = InputData && InputData.find(user => user.email === email);
      // console.log(`Found user: ${JSON.stringify(user)}`); // Logs found user
      if (!user) {
        setEmailError("User not found");
      } else if (user.password !== password) {
        setPasswordError("Password Incorrect");
      } else {
        alert("Login Successful!");
      }
    }, 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input-email">Email:</label>
          <input
            id="input-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
          />
          {emailError && <div id="user-error">{emailError}</div>}
        </div>
        <div>
          <label htmlFor="input-password">Password:</label>
          <input
            id="input-password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
          />
          {passwordError && <div id="password-error">{passwordError}</div>}
        </div>
        <button type="submit" id="submit-form-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginAPI;