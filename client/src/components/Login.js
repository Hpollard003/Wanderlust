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
    <div className="">
      <NavLink className="" to="/">
        Home
      </NavLink>
      <div className="">Login</div>
      {error ? (<div className="" role="alert">{error}</div>) : (<div hidden={true} >{error}</div>)}
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        <input
          className="list-group-item"
          type="password"
          id="password"
          autoComplete="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <button className="btn btn-outline-info w-100" type="submit">
          Login
        </button>
      </form>
      <NavLink className="btn btn-outline-info" to="/Signup">
        Click Here to create an account
      </NavLink>
    </div>
  );
}

export default Login;