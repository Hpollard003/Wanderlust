import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login({ setCurrentUser }) {
    const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
          navigate('/')
        })
      } else {
        r.json().then((err) => setError(err.errors))
      }
    })
  }

  
  return (
    <div className="card shadow-lg w-25 position-absolute top-50 start-50 translate-middle bg-transparent">
      <h1 className="card-header fs-3 text-center bg-green">Login</h1>
      {error ? (<div className="alert alert-danger" role="alert">{error}</div>) : null}
      <form
        onSubmit={handleSubmit}
        className="list-group list-group-flush"
        autoComplete="on"
        >
        <input
        
          className="list-group-item"
          type="text"
          id="username"
          placeholder="Username"
          maxLength="30"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        <input
        
          className="list-group-item"
          type="password"
          id="password"
          autoComplete="password"
          placeholder="Password"
          maxLength="50"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <button className="btn btn-info w-100 p-1" type="submit">
          Login
        </button>
      </form>
      <NavLink className="btn btn-green p-1" to="/Signup">
        Click Here to create an account
      </NavLink>
    </div>
  );
}

export default Login;