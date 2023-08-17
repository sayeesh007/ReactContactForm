import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-top">
        <h1 className="hero-title">Contact Us</h1>
        <h3 className="hero-desc">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </h3>
      </div>
      <div className="hero-bottom">
        <div className="contact-form">
          <form action="#">
            <div className="name-div">
              <label className="label-name" htmlFor="name">
                Name
              </label>
              <input className="name-ip" type="text" name="name" id="name" />
            </div>
            <div className="email-div">
              <label className="label-email" htmlFor="e-mail">Email</label>
              <input
                className="email-ip"
                type="e-mail"
                name="e-mail"
                id="e-mail"
              />
            </div>
            <div className="desc-div">
              <label className="label-desc" htmlFor="desc">Description</label>
              <textarea
                className="desc-ip"
                name="desc"
                id="desc"
                cols="60"
                rows="7"
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
        <div className="hero-img">
          <img src="/hero.svg" alt="contact" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
