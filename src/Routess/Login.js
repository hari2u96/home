import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navi = useNavigate();
  function handleChange() {
    navi("/dash");
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleChange}>Login</button>
    </div>
  );
}

export default Login;
