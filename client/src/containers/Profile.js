import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Journal from "../components/Journal/Journal";

export const Profile = (props) => {
  const [user, setUser] = useState([]);
  const [friends, setFriends] = useState([]);
  const [toggled, setToggled] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setUser(data);
          setFriends(data.friends);
        });
      }
    });
  }, []);

  const renderProfile = () => {
    return (
      <div className="position-relative text-center">
        <img
          src={
            user.image
              ? user.image
              : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-MPQv3-0XWfk%2FVSk4Gb4MgSI%2FAAAAAAAAAWI%2FJhy6FdCIPKM%2Fs1600%2FSileut%252BLuffy.jpg&f=1&nofb=1"
          }
          className="rounded rounded-circle border border-info border-5 my-3"
          style={{ height: "200px", width: "200px" }}
          alt={`${user.username} pic`}
        />
      <button
        className="position-absolute badge bg-green p-2"
        onClick={() => nav(`/profile/edit/${user.id}/${user.username}`)}
      >
        <i className="fas fa-edit"></i>
      </button>
        <h2 className="p-3 bg-green mx-5 rounded-pill">Hello {user.username}</h2>
        <a
          href={`/${user.username}/${user.id}/friends/${friends.length}`}
          className="text-light"
        >
          <h3>Friends: {friends.length}</h3>
          
        </a>
      <button
        onClick={toggler}
        className={`btn text-center ${
          !toggled ? "btn-info" : "btn-outline-danger rounded-circle"
        } `}
      >
        {!toggled ? "Journals" : "X"}
      </button>
      </div>
    );
  };

  const toggler = () => {
    toggled ? setToggled(false) : setToggled(true);
  };

  return (
    <div className="text-light py-4 m-3">
      <h2 className="text-gradient text-center">Profile </h2>
      {renderProfile()}
      <div hidden={!toggled} className="position-relative ">
      <Journal/></div>
      <Footer />
    </div>
  );
};
export default Profile;
