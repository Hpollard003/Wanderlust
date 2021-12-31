import React, { useState, useEffect } from "react";

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
          className="shadow-lg rounded-circle w-50 border border-info border-end-0 border-5"
          alt={`${user.username} pic`}
        />
        <h2 className="shadow fs-1 text-info fst-italic d-inline-flex p-2 text-gradient border-start border-dark border-bottom rounded-pill border-5">{user.username}</h2>
      </div>
    );
  };

  return (
    <div className="text-center position-absolute top-50 start-50 translate-middle mw-100">
      <h2 className="shadow fst-italic fs-1 border-info border-bottom border-5 rounded-circle m-5 p-3">Profile</h2>
      {renderProfile()}
    </div>
  );
};
export default Profile;