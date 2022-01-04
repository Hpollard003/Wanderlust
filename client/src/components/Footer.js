import React from "react";

const Footer = () => {
  return (
    <div>

<footer className="bg-dark text-center text-white fixed-bottom position-relative ">

  <div className="container p-4">
      <h6 className="text-uppercase fw-bold mb-4">
            Contact 
          </h6>

    <section className="mb-4">



      <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/hunter-pollard-iii-7ba79a225/" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

  
      <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Hpollard003" role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>

    <section className="mb-4">
    
          <p><i className="fas fa-home me-3"></i> Washington DC & Remote</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            hunter.pollard003@gmail.com
          </p>
    </section>
</div>
</footer>

    </div>
  );
};

export default Footer;
