import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function SignUp({ setCurrentUser }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username" , username);
    formData.append("password" , password);
    formData.append("password_confirmation" , passwordConfirmation);
    fetch("/signup", {
      method: "POST",
      body: formData
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
          navigate('/')
        });
      } else {
        r.json().then((err) => setErrors(err.errors))}
    });
  }

  const errorRender = () => {
    return errors.map(err => {
      return <div className="alert alert-danger" role="alert" >{err}</div>
    })
  }


  return (
    <div className="card shadow-lg position-absolute top-50 start-50 translate-middle bg-transparent">
      <div className="card-header fs-3 text-center bg-green">Signup</div>
      <form
        onSubmit={handleSubmit}
        className="list-group list-group-flush"
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
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <input
          className="list-group-item"
          type="password"
          id="password_confirmation"
          autoComplete="password"
          placeholder="One more time"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          {errors ? errorRender() : null}
          <button className="btn btn-info w-100" type="submit">
            Sign up
          </button>
      </form>
      <NavLink to="/login" className="btn btn-green p-1">Already a user? Login here.</NavLink>
    </div>
  );
}

export default SignUp;
