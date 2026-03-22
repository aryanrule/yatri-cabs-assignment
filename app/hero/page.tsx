import React from "react";
import "./Hero.css";
import Image from "next/image";
import Form from "../form/page";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image-form-container">
        <div className="image-wrapper">
          <img className="screen-image" src="/screen.jpg" />

          <img className="shadow-image" src="/shadow.png" />

          <p className="text-1">
            INDIA'S{" "}
            <span className="highlight-1">
              LEADING <br /> ONE WAY INTERCITY
            </span>{" "}
            <br /> CAB SERVICE PROVIDER
          </p>

          <div className="main-form">{/* <Form/> */}</div>


          <div className="Info-container">
            <div className="Info-1">
              <p>Transparent Billing</p>
              <p>GPS Based Billing | No Km Tampering</p>
            </div>

            <p>|</p>

            <div className="Info-2">
              <p>Download Now!</p>

              <div className="apple_google_store">
                <img src="/google_play.png" />

                <img src="/apple_store.png" />
              </div>
            </div>

            <p>|</p>

            <div className="Info-3">
              <p>No return fare</p>
              <p>Oneway cab fare I No hidden charges</p>
            </div>
          </div>
        </div>
      </div>

      <div>

      </div>
    </section>
  );
};

export default Hero;
