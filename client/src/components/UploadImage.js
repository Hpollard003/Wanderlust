import React, { useState } from "react";

const UploadImage = ({ user_id, username, password, passwordConfirmation }) => {
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("password_confirmation", passwordConfirmation);
    formData.append("image", image);
    fetch(`/users/${user_id}`, {
      method: "PATCH",
      body: formData,
    }).then((r) => {
      if (r.ok) {
        r.json().then(() => {});
      } else {
        r.json().then((err) => (err ? setErrors(err.errors) : setErrors(null)));
      }
    });
  }

  const errorRender = () => {
    return (
      <div className="bg-danger rounded p-1 mx-2 my-1 opacity-75" role="alert">
        Password and Confirmation Required
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="list-group list-group-flush">
      {errors ? errorRender() : null}
      <input
        className="form-control"
        type="file"
        accept="image/.jpg, .jpeg, .png, .gif"
        multiple={false}
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button className="btn btn-green" type="submit">
        Upload
      </button>
    </form>
  );
};

export default UploadImage;
