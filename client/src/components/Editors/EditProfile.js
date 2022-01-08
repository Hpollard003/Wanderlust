import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import Uploader from "../components/FilePond";

const EditProfile = () => {
  const navigate = useNavigate();
  const { user_id, userName } = useParams();
  const [username, setUsername] = useState(`${userName}`);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username" , username);
    formData.append("password" , password);
    formData.append("password_confirmation" , passwordConfirmation);
    formData.append( "image" ,image)
    fetch(`/users/${user_id}`, {
      method: "PATCH",
      body: formData
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
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
        <div className="alert alert-warning w-50 " role="alert">
          {err}
        </div>
      );
    });
  };

  const fileHandler = (e) => {
    setImage(e.target.files[0])
    console.log(image)
  }


  return (
    <div className="card shadow-lg w-25 position-absolute top-50 start-50 translate-middle bg-transparent">
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
        <input
          className="form-control"
          type="file"
          accept="image/*"
          multiple={false}
          onChange={fileHandler}
        />
        <button className="btn btn-green" type="submit">
          Save
        </button>
        {/* <Uploader/> */}
        {errors ? errorRender() : null}
      </form>
    </div>
  );
};

export default EditProfile;
