// @ts-ignore
import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
// @ts-ignore
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [post, setPost] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

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
      .then((response) => {
        console.log(response);
        // Assuming the JWT token is in the response data under 'token'
        if (response.data && response.data.token) {
          // Store the token in cookies
          Cookies.set("jwt", response.data.token, { expires: 7 }); // Expires in 7 days
          // Redirect to dashboard page
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex flex-col items-center justify-center max-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
        <h1 className="text-2xl font-bold text-center">SKILLMINGLE</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <button
            type="button"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Continue with Google
          </button>

          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              // value={formValues.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              // value={formValues.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              // value={formValues.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              // value={formValues.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              // value={formValues.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
