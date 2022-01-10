import React, { useState } from "react";

const Search = ({ friends, sendInvite, followUser, currentUser }) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = friends.filter((value) => {
      return value.username.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredUsers([]);
    } else {
      setFilteredUsers(newFilter);
    }
  };

  return (
    <div className="position-relative me-3 end-0 w-50">
      <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="text"
            placeholder="Search..."
            value={wordEntered}
            onChange={handleFilter}
          />
        </label>
      </div>
      <ul className="card-grid position-sticky">
        {filteredUsers.length !== 0 && (
          <div className="dataResult">
            {filteredUsers.slice(0, 15).map((friend, ind) => {
              return (
                <article className="m-2 text-light" key={ind}>
                  <div className="card-image d-inline-flex">
                    <img
                      src={
                        friend.image
                          ? friend.image
                          : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-MPQv3-0XWfk%2FVSk4Gb4MgSI%2FAAAAAAAAAWI%2FJhy6FdCIPKM%2Fs1600%2FSileut%252BLuffy.jpg&f=1&nofb=1"
                      }
                      width={50}
                      height={50}
                      className="img-responsive border rounded-circle"
                      alt={friend.username}
                    />
                    <h4 className="card-name mx-4 border border-3 p-2 border-info rounded-3 border-top-0 border-end-0">
                      {friend.username}
                    </h4>
                  </div>
                  <button
                    id={friend.id}
                    onClick={sendInvite}
                    className="btn btn-primary btn-sm "
                  >
                    Send Invite
                  </button>
                  <button
                    id={friend.id}
                    onClick={followUser}
                    className="btn btn-primary btn-sm mx-3"
                  >
                    Follow
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </ul>
    </div>
  );
};

export default Search;
