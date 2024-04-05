import React from "react";
import "./LandingPage.css";
import dummy_photo from "../assets/dummy_photo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import karikaLogo from "../karika-logo-cropped.png";

function LandingPage() {
  const [returning, setReturning] = useState(false);
  const [provider, setProvider] = useState(false);
  const navigate = useNavigate();

  const returningClick = () => {
    setReturning(true);
    setProvider(false);
  };

  const providerClick = () => {
    setProvider(true);
    setReturning(false);
  };

  const onNextClick = () => {
    if (returning || provider) navigate("/sign-up");
  };
  return (
    <div className="landing_page_outer_container">
      <div className="heading-container">
        <div className="image-container">
          <img src={karikaLogo} alt="Karika Republic logo" className="logo_img" />
        </div>
        <div className="text-container">
          <div className="landing_page_heading">KARIKA</div>
          <div className="landing_page_heading2">REPUBLIC</div>
        </div>
      </div>
      <div className="landing_page_subheading">
        Learn how to network and build a personal brand to grow your business & accelerate your career!
      </div>

      <div className="landing_page_button_container">
        <div
          className={
            "landing_page_returning_container " +
            (returning
              ? "landing_page_returning_button_enabled"
              : "landing_page_returning_button_disabled")
          }
          onClick={returningClick}
        >
          I have an account
        </div>
        <div
          className={
            "landing_page_provider_container " +
            (provider
              ? "landing_page_provider_button_enabled"
              : "landing_page_provider_button_disabled")
          }
          onClick={providerClick}
        >
          Sign Up
        </div>
      </div>
      <div
        className={
          "landing_page_next_button " +
          (provider || returning ? "" : "landing_page_next_button_disabled")
        }
        onClick={onNextClick}
      >
        Next
      </div>
    </div >
  );
}

export default LandingPage;
