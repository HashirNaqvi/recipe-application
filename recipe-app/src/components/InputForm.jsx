import React, { useState } from "react";
import axios from "axios";

export default function InputForm({ setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // Determine the endpoint based on login/signup
    const endpoint = isSignUp ? "signup" : "login";

    try {
      console.log(
        `Sending request to: http://localhost:5000/api/users/${endpoint}`
      );
      console.log({ email, password });

      const response = await axios.post(
        `http://localhost:5000/api/users/${endpoint}`,
        {
          email,
          password,
        }
      );

      console.log("Response received:", response.data);

      // Store token and user in local storage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Close modal or perform other state changes
      setIsOpen();
    } catch (err) {
      console.error("Error response:", err.response?.data);
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
        <br />
        {error && <h6 className="error">{error}</h6>}
        <br />
        <p onClick={() => setIsSignUp((prev) => !prev)}>
          {isSignUp
            ? "Already have an account? Login here"
            : "Create a new account"}
        </p>
      </form>
    </>
  );
}
