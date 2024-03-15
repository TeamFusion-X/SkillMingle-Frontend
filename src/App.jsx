import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HomePage from "./Components/Home";
import LoginForm from "./Components/LoginPage";
import RegistrationForm from "./Components/SignupPage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <HomePage/> */}
      {/* <LoginForm /> */}
      <RegistrationForm/>
    </>
  );
}

export default App;
