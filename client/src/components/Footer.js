import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
<MDBFooter bgColor='primary' className='footer text-white text-center text-lg-left navbar-bg-gradient'>
    <MDBContainer className='p-4'>
      <MDBRow>
        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
          <h5 className='text-uppercase'>Contact</h5>


          <p><i className="fas fa-home me-3"></i> Washington DC & Remote</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            hunter.pollard003@gmail.com
          </p>
        </MDBCol>

        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
        <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/hunter-pollard-iii-7ba79a225/"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

          
        </MDBCol>

        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
        <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/Hpollard003"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>

          
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </MDBFooter>
  );
};

export default Footer;
