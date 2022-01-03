import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Uploader from "../components/FilePond";

export const Profile = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);

  const renderProfile = () => {
    return (
      <div>
        <img
          src={`${user.img_url}` ? `${user.img_url}` : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-MPQv3-0XWfk%2FVSk4Gb4MgSI%2FAAAAAAAAAWI%2FJhy6FdCIPKM%2Fs1600%2FSileut%252BLuffy.jpg&f=1&nofb=1"}
          className=""
          alt={`${user.username} pic`}
        />
        <h2 className="">{user.username}</h2>
      </div>
    );
  };

  

  return (
    <div className="">
      <h2 className="">Profile</h2>
      {renderProfile()}
      <Link className="btn btn-outline-info" to={`/profile/edit/${user.id}`}>Edit Profile</Link>
      <Link className="btn btn-outline-info" to="/journals">New Journal</Link>
      {/* <Uploader/> */}
    </div>
  );
};
export default Profile;