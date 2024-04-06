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

  const [shortBio, setShortBio] = useState("");
  const handleShortBioChange = (e) => {
    setShortBio(e.target.value);
  }

  const [profession, setProfession] = useState("");
  const handleProfessionChange = (e) => {
    setProfession(e.target.value);
  }

  const [interests, setInterests] = useState("");
  const handleInterestsChange = (e) => {
    setInterests(e.target.value);
  }

  const [goals, setGoals] = useState("");
  const handleGoalsChange = (e) => {
    setGoals(e.target.value);
  }

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

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };



  return (
    <div className="signup_page_outer_container">
      <div className="signup_page_heading">Create an account</div>
      <span>
        <span className="signup_page_subheading">Already have one?</span>
        <span><a href="/log-in" className="login_page_redirect">Log in.</a></span>
      </span>

      <div className="signup_page_field_heading">Full Name:</div>
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

      <div className="signup_page_field_heading">Date of birth:</div>
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

      <div className="signup_page_field_heading">Short Bio:</div>
      <input
        className="signup_page_field"
        type="text"
        placeholder="Ex: I am a current college student at Columbia University..."
        value={shortBio}
        onChange={handleShortBioChange}
      />

      <div className="signup_page_field_heading">Profession:</div>
      <input
        className="signup_page_field"
        type="text"
        placeholder="Ex: Software Engineer"
        value={profession}
        onChange={handleProfessionChange}
      />

      <div className="signup_page_field_heading">Interests:</div>
      <input
        className="signup_page_field"
        type="text"
        placeholder="Minimum of 3"
        value={interests}
        onChange={handleInterestsChange}
      />

      <div className="signup_page_field_heading">Top Goals:</div>
      <input
        className="signup_page_field"
        type="text"
        placeholder="Minimum of 3"
        value={goals}
        onChange={handleGoalsChange}
      />

      <div className="signup_page_field_heading">Language:</div>
      <select
        className="signup_page_field"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="" disabled>Select</option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="German">German</option>
        <option value="Chinese">Chinese</option>
      </select>


      <div className="signup_page_field_heading">Countries:</div>
      <select
        className="signup_page_field"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="" disabled>Select a country</option>
        <option value="USA">United States</option>
        <option value="CAN">Canada</option>
        <option value="MEX">Mexico</option>
        <option value="UK">United Kingdom</option>

      </select>


      <div className="signup_page_field_heading">Create a password</div>
      <input
        className="signup_page_field"
        type="text"
        placeholder="Minimum 6 characters long"
        value={password}
        onChange={handlePasswordChange}
      />

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
