import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function SignUp({ setCurrentUser }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        image,
      }),
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
      return <div className="" >{err}</div>
    })
  }

  return (
    <div className="card shadow-lg w-25 position-absolute top-50 start-50 translate-middle bg-transparent">
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
        <input
           className="list-group-item"
          type="img"
          id="imageUrl"
          placeholder="Set Img Url for profile picture"
          value={image}
          onChange={(e) => setImage(e.target.value)}
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
