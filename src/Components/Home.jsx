import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <nav className="flex justify-between items-center py-">
        <div className="text-2xl font-bold">LOGO</div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition duration-300"
          >
            Contact
          </a>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-5 py-2 px-4 rounded transition duration-300">
            <Link to="/signup">Sign up</Link>
          </button>
        </div>
      </nav>

      <header className=" flex flex-col justify-between align-left items-start my-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Connect Your Skills
        </h1>
        <h2 className="text-2xl text-blue-600 my-4">
          Elevate Your Learning Effortlessly
        </h2>
        <p className="mb-6 text-gray-600">
          A space where learning meets connection. Dive into a world where your
          skills are your currency, enabling you to engage, share, and grow with
          others just like you.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300">
          LEARN A NEW SKILL NOW!
        </button>
      </header>

      <section className="my-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4">
            <p className="text-lg font-semibold text-gray-800">
              Amazing Website
            </p>
            <p className="text-gray-600">I got to learn a new Skill</p>
          </div>
          {/* Add additional review cards here */}
        </div>
      </section>

      <section className="my-10">
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Trending Skills
        </h3>
        <div className="flex justify-center space-x-4">
          <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded transition duration-300">
            Python
          </button>
          <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded transition duration-300">
            C++
          </button>
          {/* Add additional skill tags here */}
        </div>
      </section>

      <footer className="text-center my-10">
        <p className="text-gray-600">
          © 2024 SkillMingle. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
