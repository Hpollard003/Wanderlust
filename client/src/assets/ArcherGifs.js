import React from "react";
import archerGif from "../assets/archer.gif"
import kriegerGif from "../assets/dumb.gif"
import archerDinoGif from "../assets/stupid.gif"


import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement
} from "mdb-react-ui-kit";

const ArcherGifs = () => {
  return (
    <>
      <div>
        <MDBCarousel
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
                src={archerGif}
                alt="..."
              />
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement
                className="rounded-top border border-bottom-0 border-dark border-3"
                style={{ width: 100, height: 500 }}
                src={archerDinoGif}
                alt="..."
              />
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement
                className="rounded-top border border-bottom-0 border-dark border-3"
                style={{ width: 100, height: 500 }}
                src={kriegerGif}
                alt="..."
              />
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </div>
    </>
  );
};

export default ArcherGifs;
