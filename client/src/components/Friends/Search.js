import React, { useState } from "react";

const Search = ({ friends , sendInvite , followUser }) => {
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name"]);
  const filter = (q) => friends.filter((item) => {
    return searchParam.some((newItem) => {
        return (
            item[newItem]
                .toString()
                .toLowerCase()
                .indexOf(q.toLowerCase()) > -1
        );
    });
});

  return (
    <div className="wrapper w-50">
      <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <span className="sr-only">Search countries here</span>
        </label>
      </div>
      <ul className="card-grid position-sticky">
        {friends.map((friend , ind ) => (
          <article className="m-2 text-light" key={ind}>
            <div className="card-image d-inline-flex">
              <img
                src={friend.image}
                width={50}
                height={50}
                className="img-responsive border rounded-circle"
                alt={friend.username}
              />
              <h4 className="card-name mx-4 border border-3 p-2 border-info rounded-3 border-top-0 border-end-0">
                {friend.username}
              </h4>
            </div>
            <button id={friend.id} onClick={sendInvite} className="btn btn-primary btn-sm ">Send Invite</button>
            <button id={friend.id} onClick={followUser} className="btn btn-primary btn-sm mx-3">Follow</button>
          </article>
        ))}
      </ul>
    </div>
  );
};

export default Search;
