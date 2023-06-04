import React from "react";
import GoogleButton from "react-google-button";
import { signinwithgoogle } from "./fiebase";
import { Jumbotron, Button } from "react-bootstrap";
import "./HeroSection.css"; // optional CSS file to style the hero section
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
const Google = () => {
  const navigate = useNavigate();
  const signin = () => {
    signinwithgoogle(navigate);
  };
  return (
    <div>
      <div className="hero" fluid>
        <div className="overlay"></div>{" "}
        {/* optional overlay to darken the image */}
        <div className="container">
          {/* <h1>My Hero Section</h1>
          <p>This is a sample hero section using React Bootstrap</p>
          */}
          <div className="google d-flex">
            <p className="googlebtn">
              {" "}
              <Typewriter
                options={{
                  strings: [
                    "ChatGpt-For Developers",
                    "Get Instant Codes In any Programming Language",
                    "Design By Jatin",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />{" "}
            </p>
            <br />
          </div>
          <div className="d-flex google">
            <GoogleButton
              className="googlebtn"
              type="light"
              onClick={() => {
                signin();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Google;
