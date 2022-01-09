import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Footer = ({ currentUser }) => {
  return (
    <footer className=" text-light text-center ">
      <MDBContainer className="py-5 my-5">
        <MDBRow className="my-5 mb-0 pt-5">


          <MDBCol lg="7" md="6" className="">
            <h5 className="text-uppercase">Contact</h5>
            <p>
              <i className="fas fa-envelope me-3"></i>
              hunter.pollard003@gmail.com
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/hunter-pollard-iii-7ba79a225/"
              role="button"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/Hpollard003"
              role="button"
              title="Github"
            >
              <i className="fab fa-github"></i>
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </footer>
  );
};

export default Footer;
