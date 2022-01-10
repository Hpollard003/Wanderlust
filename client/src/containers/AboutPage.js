import React from "react";
import Earfy from "../assets/earthy.gif";
import Footer from "../components/Footer";

const AboutPage = () => (
  <div className="text-light text-center">
    <h2 className="text-gradient">About</h2>
    <article className="card navbar-bg-gradient p-3 text-center m-5">
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
    <img
      src={Earfy}
      height="300"
      alt=""
      className="rounded rounded-circle "
      loading="lazy"
    />
    <Footer />
  </div>
);

export default AboutPage;
