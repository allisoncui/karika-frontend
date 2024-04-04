import React from "react";
import "./RecommendationsPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecommendationsPage() {
  const navigate = useNavigate();
  const onBackToSearch = () => {
    navigate("/search");
  };
  return (
    <div className="recs_outer_container">
      <div className="recs-container">
        <div className="recs-heading">Compare Providers</div>
        <br></br>
        <div className="results">
          <button className="button" onClick={onBackToSearch}>
            Back to Results
          </button>
        </div>
      </div>

      <div className="data-container">
        <div className="dummy-data-header">
          <table border="1">
            <thead>
              <tr>
                <th></th>
                <th>Hospital A</th>
                <th>Hospital B</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even-row">
                <td className="row-headers">Address</td>
                <td className="row-data">New York</td>
                <td className="row-data">New York</td>
              </tr>
              <tr className="odd-row">
                <td className="row-headers">Price</td>
                <td className="row-data">$7500-$8500</td>
                <td className="row-data">$2300-$2800</td>
              </tr>
              <tr className="even-row">
                <td className="row-headers">Specialty</td>
                <td className="row-data">Obstetrics and Gynecology</td>
                <td className="row-data">Obstetrics and Gynecology</td>
              </tr>
              <tr className="odd-row">
                <td className="row-headers">Hospital Affiliation</td>
                <td className="row-data">N/A</td>
                <td className="row-data">N/A</td>
              </tr>
              <tr className="even-row">
                <td className="row-headers">Medical School</td>
                <td className="row-data">Georgetown University of Medicine</td>
                <td className="row-data">New York College of Medicine</td>
              </tr>
              <tr className="odd-row">
                <td className="row-headers">Graduation Year</td>
                <td className="row-data">2010</td>
                <td className="row-data">2009</td>
              </tr>
              <tr className="even-row">
                <td className="row-headers">Electronic Health Records</td>
                <td className="row-data">Yes</td>
                <td className="row-data">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>

        <span className="result">
          <button className="button" onClick={onBackToSearch}>
            Back to Results
          </button>
        </span>
        <span className="book-provider">
          <button className="button provider first_provider" onclick="submit">
            Book this Provider
          </button>
          <button className="button provider second_provider" onclick="submit">
            Book this Provider
          </button>
        </span>
      </div>
    </div>
  );
}

export default RecommendationsPage;
