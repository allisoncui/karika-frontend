import React from "react";
import "./LandingPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import karikaLogo from "../karika-logo-cropped.png";

function LandingPage() {
  const [returning, setReturning] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const navigate = useNavigate();

  const returningClick = () => {
    setReturning(true);
    setNewUser(false);
  };

  const newUserClick = () => {
    setNewUser(true);
    setReturning(false);
  };

  const onNextClick = () => {
    if (newUser) navigate("/sign-up");
    if (returning) navigate("/log-in");
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
            "landing_page_newUser_container " +
            (newUser
              ? "landing_page_newUser_button_enabled"
              : "landing_page_newUser_button_disabled")
          }
          onClick={newUserClick}
        >
          Sign Up
        </div>
      </div>
      <div
        className={
          "landing_page_next_button " +
          (newUser || returning ? "" : "landing_page_next_button_disabled")
        }
        onClick={onNextClick}
      >
        Next
      </div>
    </div >
  );
}

export default LandingPage;
