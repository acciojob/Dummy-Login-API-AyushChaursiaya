import { useState } from "react";

const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,4}$/;
const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d@$!%*?&]{8,}$/;
const preDefinedUserData = {
  email: emailRegex,
  password: strongRegex,
};

// const preDefinedUserData = {
//   email: "hi8272829@gmail.com",
//   password: "ayush@12345",
// };


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
        if (!preDefinedUserData.email.test(email)) {
          setEmailError("Invalid email");
        } else if (!preDefinedUserData.password.test(password)) {
          setPasswordError("Password does not meet criteria");
        } else {
          alert("Login Successful!");
        }
    }, 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input-email">Email :</label>
          <input
            id="input-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
          />
          {emailError && <div id="email">{emailError}</div>}
        </div>
        <div>
          <label htmlFor="input-password">Password :</label>
          <input
            id="input-password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
          />
          {passwordError && <div id="password">{passwordError}</div>}
        </div>
        <button type="submit" id="submit-form-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginAPI;