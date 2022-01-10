import React from "react";
import Earfy from "../assets/earthy.gif";
import Footer from "../components/Footer";

const AboutPage = () => (
  <div className="text-light text-center">
    <h1 className="text-gradient">About</h1>
    <br></br>
    <article className="card navbar-bg-gradient p-3 text-center rounded-3 shadow-lg"
    style={{ width: "50rem" , marginLeft: "auto", marginRight: "auto"}}>
      <h1>Wanderlust</h1>
      <p>
        A very strong or irresistible impulse to travel.
        <br></br>
        It's an incurable disease that consumes your soul and destroys your bank
        account.
      </p>
      <br></br>
      <p>
        Who knows what that really means but here is your <br></br> one stop
        shop to journal and catalogue your adventures and stories
        <br></br>
        Follow other users on our platform and keep up to date on all the things{" "}
        <br></br> you think you're missing out on.
      </p>
    </article>
    <br></br>

    <img
      src={Earfy}
      height="300"
      alt="Earfy"
      className="rounded rounded-circle "
      loading="lazy"
    />
    <Footer />
  </div>
);

export default AboutPage;
