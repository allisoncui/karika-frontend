import React from "react";
import "./SignUpPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [email_confirmation, setEmailConfirmation] = useState("");
  const handleEmailConfirmationChange = (e) => {
    setEmailConfirmation(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const [checked1, setChecked1] = useState(false);
  const handleCheckbox1Change = (e) => {
    setChecked1(e.target.checked);
  };

  return (
    <div className="signup_page_outer_container">
      <div className="signup_page_heading">Create an account</div>
      <div className="signup_page_subheading">Already have one? Sign in.</div>
      <div className="signup_page_field_heading">Enter your email</div>
      <input
        className="signup_page_field"
        type="email"
        placeholder=""
        value={email}
        onChange={handleEmailChange}
      />

      <div className="signup_page_field_heading">Confirm your email</div>
      <input
        className="signup_page_field"
        type="email"
        placeholder=""
        value={email_confirmation}
        onChange={handleEmailConfirmationChange}
      />

      <div className="signup_page_field_heading">Create a password</div>
      <input
        className="signup_page_field"
        type="text"
        placeholder="At least 6 characters long"
        value={password}
        onChange={handlePasswordChange}
      />

      <div className="signup_page_field_heading">Your name</div>
      <div
        style={{
          display: "flex",
          marginLeft: "40px",
          marginRight: "40px",
          maxWidth: "920px",
        }}
      >
        <input
          className="signup_page_field"
          type="text"
          placeholder="First"
          value={firstName}
          onChange={handleFirstNameChange}
          style={{ marginLeft: "0px", marginRight: "5px", flexGrow: "1" }}
        />
        <input
          className="signup_page_field"
          type="text"
          placeholder="Last"
          value={lastName}
          onChange={handleLastNameChange}
          style={{ marginRight: "0px", marginLeft: "5px", flexGrow: "1" }}
        />
      </div>

      <div className="signup_page_field_heading">Date of birth</div>
      <div
        style={{
          display: "flex",
          marginLeft: "40px",
          marginRight: "40px",
          maxWidth: "920px",
        }}
      >
        <input
          className="signup_page_field"
          type="numeric"
          placeholder="MM"
          value={month}
          onChange={handleMonthChange}
          style={{
            marginLeft: "0px",
            width: "35px",
            marginRight: "5px",
          }}
        />
        <input
          className="signup_page_field"
          type="numeric"
          placeholder="DD"
          value={day}
          onChange={handleDayChange}
          style={{ width: "35px", marginLeft: "5px", marginRight: "5px" }}
        />
        <input
          className="signup_page_field"
          type="numeric"
          placeholder="YYYY"
          value={year}
          onChange={handleYearChange}
          style={{ width: "70px", marginLeft: "5px" }}
        />
      </div>

      <label
        style={{
          marginTop: "50px",
          marginLeft: "40px",
          fontSize: "1.1rem",
        }}
      >
        <input
          type="checkbox"
          checked={checked1}
          onChange={handleCheckbox1Change}
        />
        Please read and accept the Terms of Use and Privacy Policy
      </label>

      <div
        className="signup_page_save_continue"
        onClick={() => {
          navigate("/search");
        }}
      >
        Save and continue
      </div>
    </div>
  );
}

export default SignUpPage;
