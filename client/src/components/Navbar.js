import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Auth/Logout";
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
  const nav = useNavigate();

  return (
    <div className="">
      <div className="bg-imagetext-center shadow-3-strong text-white">
        <MDBNavbar expand="lg" className="">
          <MDBContainer fluid>
            <MDBNavbarBrand className="text-gradient" onClick={() => nav("/home")}>
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
            <span>
              <img src={PaperPlane} alt="" height="90" loading="lazy" />
            </span>

            <MDBNavbarToggler
              className="fw-lighter"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowBasic(!showBasic)}
            >
              {!showBasic ? (
                <MDBIcon className="text-light" icon="angle-double-down" fas />
              ) : (
                <MDBIcon className="text-light" icon="angle-double-up" fas />
              )}
            </MDBNavbarToggler>

            <MDBCollapse navbar show={showBasic}>
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 navbar-gradient">
                <MDBNavbarItem>
                  <MDBNavbarLink onClick={() => nav("/about")}>
                    About
                  </MDBNavbarLink>
                </MDBNavbarItem>
                {currentUser ? (
                  <>
                    <MDBNavbarItem>
                      <MDBNavbarLink
                        onClick={() => nav(`/profile/${currentUser.username}`)}
                      >
                        Profile
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                      <MDBNavbarLink
                        onClick={() => nav(`/journals/${currentUser.username}`)}
                      >
                        Journals
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                      <MDBNavbarLink
                        onClick={() => nav(`/${currentUser.username}/${currentUser.id}/friends/`)}
                      >
                        Friends
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                  </>
                ) : null}
              </MDBNavbarNav>
              {currentUser ? (
               
                  <div className="nav-link ">
                    <Logout setCurrentUser={setCurrentUser} />
                  </div>
                
              ) : (
                <div className="row">
                  <button
                    className="shadow-lg btn btn-outline-info btn-sm"
                    onClick={() => nav("/login")}
                  >
                    Login
                  </button>
                  <button
                    className="shadow-lg btn btn-info btn-sm"
                    onClick={() => nav("/signup")}
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </div>
    </div>
  );
};
export default Navbar;
