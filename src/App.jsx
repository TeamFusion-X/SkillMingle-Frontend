import { useState } from "react";
import HomePage from "./Components/Home";
import LoginForm from "./Components/LoginPage";
import RegistrationForm from "./Components/SignupPage";
import VerticalNav from "./Components/VerticalNav";
import Dashboard from "./Components/Dashboard";
import Error from "./Components/Error";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<RegistrationForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />{" "}
        </Routes>
      </Router>
    </>
  );
}

export default App;
