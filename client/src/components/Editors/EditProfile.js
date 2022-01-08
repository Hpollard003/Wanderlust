import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UploadImage from "../UploadImage";

const EditProfile = () => {
  const navigate = useNavigate();
  const { user_id, userName } = useParams();
  const [username, setUsername] = useState(`${userName}`);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState("");
  const [toggled, setToggled] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("password_confirmation", passwordConfirmation);
    fetch(`/users/${user_id}`, {
      method: "PATCH",
      body: formData,
    }).then((r) => {
      if (r.ok) {
        r.json().then(() => {
          navigate(`/profile/${username}`);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  const errorRender = () => {
    return errors.map((err) => {
      return (
        <div className="bg-danger rounded p-1 mx-2 my-1 opacity-75" role="alert">
          {err}
        </div>
      );
    });
  };

  const toggler = () => {
    toggled ? setToggled(false) : setToggled(true);
  };

  return (
    <div className="card position-absolute top-50 start-50 translate-middle bg-transparent border-0">
      <h1 className="card-header fs-3 text-center bg-green fs-5">
        Edit Profile
      </h1>
      <form
        onSubmit={handleSubmit}
        className="list-group list-group-flush"
        autoComplete="on"
      >
        <input
          className="form-control"
          type="text"
          id="username"
          autoComplete="on"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="form-control"
          type="password"
          id="password"
          autoComplete="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="form-control"
          type="password"
          id="password_confirmation"
          autoComplete="password"
          placeholder="One more time"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button className="btn btn-green" type="submit">
          Save
        </button>
        {errors ? errorRender() : null}
      </form>
      <div className="my-3 text-center">
      <button onClick={toggler} className={`btn ${!toggled ? "btn-info" : "btn-danger w-25"} btn-sm`}>{!toggled ? "Edit Pfp" : "Close"}</button>
      <div hidden={!toggled}>
      <UploadImage
        user_id={user_id}
        password={password}
        passwordConfirmation={passwordConfirmation}
      />
      </div>
      </div>
    </div>
  );
};

export default EditProfile;
