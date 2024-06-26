import React from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import LandingPage from "./screens/LandingPage";
import SignUpPage from "./screens/SignUpPage";
import LogInPage from "./screens/LogInPage";
import SearchPage from "./screens/SearchPage";
import RecommendationsPage from "./screens/RecommendationsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
      </Routes>
    </div>
  );
}

export default App;
