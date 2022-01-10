import React, { useState } from "react";
import ArcherGifs from "../components/ArcherGifs";
import Carousel from "../components/Carousel";

import Footer from "../components/Footer";

export const Home = ({ currentUser }) => {
  const [toggled, setToggled] = useState(false);
  const [stupidGifToggle, setStupidGifToggle] = useState(false);

  const toggler = () => {
    toggled ? setToggled(false) : setToggled(true);
  };
  const stupidGif = () => {
    stupidGifToggle ? setStupidGifToggle(false) : setStupidGifToggle(true);
    window.scroll();
  };
  return (
    <div className="text-center m-5">
      {!toggled ? (
        <div className="text-gradient">
          <h1 className="display-2">Wanderlust.</h1>
          <br></br>
          <br></br>
          <h1>
            <p>Create Digital Travel Journals.</p>
          </h1>
          <br></br>
          <br></br>
          <div hidden={!stupidGifToggle}>
            <ArcherGifs />
          </div>
        </div>
      ) : (
        <Carousel />
      )}
      <button
        className={`btn ${!toggled ? "btn-info" : "btn-danger"}`}
        onClick={toggler}
      >
        {!toggled ? (
          "Places To Visit 2022 Edition"
        ) : (
          <>
            <i className="fas fa-times"></i> Close Gallery
          </>
        )}{" "}
      </button>{" "}
      <Footer />
      <button
        className={`btn ${!stupidGifToggle ? "btn-info" : "btn-danger"}`}
        onClick={stupidGif}
      >
        {!stupidGifToggle ? (
          "Click me"
        ) : (
          <>
            <i className="fas fa-times"></i> Close{" "}
          </>
        )}
      </button>
    </div>
  );
};
export default Home;
