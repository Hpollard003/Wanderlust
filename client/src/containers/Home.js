import React, { useState } from "react";


import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import ArcherGifs from "../components/ArcherGifs";

export const Home = ({currentUser}) => {
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
    <div className="text-center m-5 ">
      {!toggled ? (<h1>
        Hello World.
        <p>This is Wanderlust.</p>

        <p>Create Digital Travel Journals.</p>
      <div hidden={!stupidGifToggle}>
        <ArcherGifs/>
      </div>
      </h1>) : (<MDBCarousel
          showControls
          className="m-4"
          fade
          interval={9000}
          style={{ maxHeight: "50rem" }}
        >
          <MDBCarouselInner>
            <MDBCarouselItem className="active">
              <MDBCarouselElement
                className="rounded-top border border-bottom-0 border-dark border-3"
                style={{ width: 100, height: 500 }}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7965887.jpg&f=1&nofb=1"
                alt="..."
              />
              <MDBCarouselCaption className=" text-gradient">
                <h5>MOSCOW</h5>
                <p>
                  The political, scientific, historical, architectural and
                  business center of Russia, Moscow displays the country's
                  contrasts at their most extreme. The ancient and modern are
                  juxtaposed side by side in this city of 10 million.
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement
                className="rounded-top border border-bottom-0 border-dark border-3"
                style={{ width: 100, height: 500 }}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsamsboringblog.com%2Fwp-content%2Fuploads%2F2017%2F06%2FAustralia-header-FB.jpg&f=1&nofb=1"
                alt="..."
              />
              <MDBCarouselCaption className="text-gradient ">
                <h5>Austrailia</h5>
                <p>
                  A land of incredible natural beauty, buzzing cities,
                  incredible beaches and laid-back people. When it comes to
                  visiting a country that is so huge, it can be very difficult
                  to know exactly where to go.{" "}
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement
                className="rounded-top border border-bottom-0 border-dark border-3"
                style={{ width: 100, height: 500 }}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres-5.cloudinary.com%2Fenchanting%2Fimages%2Fw_1600%2Ch_700%2Cc_fill%2Fet-web%2F2018%2F12%2FEnchanting-Travels-Morocco-Tours-historical-Medina-of-city-of-Rabat%2Fdestination-rabat-morocco.jpg&f=1&nofb=1"
                alt="..."
              />
              <MDBCarouselCaption className="text-gradient ">
                <h5>RABAT</h5>
                <p>
                  Rabat, the charming capital of Morocco, was granted its UNESCO
                  Heritage site status in 2012. Standing at the confluence of
                  the Bouregreg River and the Atlantic, this pleasant coastal
                  metropolis is an elegant fusion of medieval Islamic heritage
                  and a French colonial legacy.{" "}
                </p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>)}
      
      <button className={`btn ${!toggled ? "btn-info" : "btn-danger"}`} onClick={toggler}>{!toggled ? "Gallery" : <><i class="fas fa-times"></i> Close Gallery</>} </button>
      {" "}
      <button className={`btn ${!stupidGifToggle ? "btn-info" : "btn-danger"}`} onClick={stupidGif} >{!stupidGifToggle ? "Click me" : <><i class="fas fa-times"></i> Close </>}</button>
    </div>
  );
};
export default Home;
