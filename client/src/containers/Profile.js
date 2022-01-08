import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";





export const Profile = (props) => {
  const [user, setUser] = useState([]);
  const nav = useNavigate()

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
      <div >
        <img
          src={user.image ? user.image : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-MPQv3-0XWfk%2FVSk4Gb4MgSI%2FAAAAAAAAAWI%2FJhy6FdCIPKM%2Fs1600%2FSileut%252BLuffy.jpg&f=1&nofb=1"}
          className="rounded rounded-circle border border-info border-5"
          style={{height: "200px", width: "200px"}}
          alt={`${user.username} pic`}
        />
        <h2 className="p-3 text-gradient">Hello {user.username}</h2>
      </div>
    );
  };

  

  return (
    <div className="text-light text-center py-4 ">
      <h2 className="text-gradient">Profile </h2>             
      {renderProfile()}
      <button className="btn btn-info" onClick={() => nav(`/profile/edit/${user.id}/${user.username}`)}>Edit Profile</button>
      {" "}
      <button className="btn btn-info" onClick={() => nav(`/journals/${user.username}`)}>New Journal</button>
      
    </div>
  );
};
export default Profile;