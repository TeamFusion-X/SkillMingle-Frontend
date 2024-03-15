import React from "react";
import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  const [post, setPost] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/users/login", { ...post })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-2">SKILLMINGLE</h2>
        <div className="flex justify-around my-4">
          <button className="border-2 border-blue-500 text-blue-500 rounded px-4 py-1 focus:outline-none">
            Login
          </button>
          <button className="text-blue-500 rounded px-4 py-1 focus:outline-none">
            Signup
          </button>
        </div>
        <button className="bg-blue-500 text-white rounded py-2 px-4 mb-4 w-full flex items-center justify-center">
          <img src="/path-to-google-icon.svg" alt="Google" className="mr-2" />
          Continue with Google
        </button>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            onChange={handleInput}
            name="email"
            className="border-2 border-gray-300 p-2 rounded focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleInput}
            name="password"
            className="border-2 border-gray-300 p-2 rounded focus:outline-none"
          />
          <button type="submit" className="bg-blue-500 text-white rounded py-2">
            Log in
          </button>
        </form>
        <a
          href="#"
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-4"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
