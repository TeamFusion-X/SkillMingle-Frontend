import axios from "axios";
import React, { useState } from "react";

const RegistrationForm = () => {
  const [post, setPost] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/users/signup", { ...post })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <button className="google-sign-in">Continue with Google</button>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />

        <button type="submit" className="submit-button">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
