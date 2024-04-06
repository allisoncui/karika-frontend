import React from "react";
import "./LogInPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogInPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const [password, setPassword] = useState("");
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="login_page_outer_container">
            <div className="login_page_heading">Log In</div>
            <span>
                <span className="login_page_subheading">Don't have an account?</span>
                <span> <a href="/sign-up" className="login_page_redirect">Sign up.</a></span>
            </span>
            <div className="login_page_field_heading">Username</div>
            <input
                className="login_page_field"
                type="email"
                value={email}
                onChange={handleEmailChange}
            />

            <div className="login_page_field_heading">Password</div>
            <input
                className="login_page_field"
                type="password"
                value={password}
                onChange={handlePasswordChange}
            />

            <div
                className="login_page_save_continue"
                onClick={() => navigate("/search")}
            >
                Login
            </div>

            <div className="login_page_subheading">
                <a href="/reset-password">Forgot password?</a>
            </div>
        </div>
    );
}

export default LogInPage;
