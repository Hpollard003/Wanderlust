import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import WanderlustGif from "../assets/wanderlust.gif";
import PaperPlane from "../assets/paperPlane.gif";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

export const Navbar = ({ setCurrentUser, currentUser }) => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div className="">
      <div className="bg-image p-2 text-center shadow-3-strong text-white">
        <MDBNavbar
          expand="lg"
          dark
          bgColor="dark"
          className="rounded rounded-pill bg-gradient"
        >
          <MDBContainer fluid>
            <MDBNavbarBrand href="/">
              {" "}
              <img
                src={WanderlustGif}
                height="40"
                alt=""
                className="rounded rounded-circle "
                loading="lazy"
              />{" "}
              WanderLust
              <p className="fs-6 fw-lighter">Create Digital Travel Journals</p>
            </MDBNavbarBrand>

            <MDBNavbarToggler
              className="rounded rounded-circle"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>

            <MDBCollapse navbar show={showBasic}>
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                <MDBNavbarItem>
                  <MDBNavbarLink aria-current="page" href="/about">
                    About
                  </MDBNavbarLink>
                </MDBNavbarItem>
                {currentUser ? (
                  <>
                    <MDBNavbarItem>
                      <MDBNavbarLink href="/profile">Profile</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                      <MDBNavbarLink href="/journals">
                        My Journals <MDBIcon fas icon="book-open" />
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                  </>
                ) : null}
              </MDBNavbarNav>
              
                <span>
                  <img src={PaperPlane} alt="" height="100" loading="lazy" />
                </span>
              {currentUser ? (
                <>
                  <div className="nav-link position-relative top-0 end-0">
                    <Logout setCurrentUser={setCurrentUser} />
                  </div>
                </>
              ) : null}
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </div>
    </div>
  );
};
export default Navbar;
