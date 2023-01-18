import React, { useState } from "react";

import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

import Header from "../Include/Header";
import SignIn from "./SignIn";
import $ from 'jquery';

import { useRegisterUserMutation } from "../services/useAuthApi";

function SignUp(props) {
  
    const [fullname, setFullname] = React.useState('');
    const [email, setEmail] = React.useState(false);
    const [password, setPassword] = React.useState(false);
    const [redirect, setRedirect] = React.useState(false);
    const [confirmPassword, setConfirmPassword] = React.useState(false);
    const [msg, setMsg] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const location = useLocation();
    const { role } = location.state

    const [modalShow, setModalShow] = React.useState(false);

    const [registerUser] = useRegisterUserMutation();

    const openFingerPrint = () =>{
        setModalShow(!modalShow)
    }
    const history = useNavigate();
    const onSubmitHandler = (e) => {
        let item = {email, password, confirmPassword, fullname, role };
        e.preventDefault();
        setIsLoading(true);
        const result = axios.post("https://demo-designprojects.com/demo/sigma-bank/api/sign-up", item)
        .then((response) => {
            setIsLoading(false );
            if (response.data.status === 200) {

                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("userData", JSON.stringify(response.data.data));
                setMsg(response.data.message)
                setRedirect(true)
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                return <Navigate to="/acount-Varify" />;

                // setTimeout(() => {
                //     setMsg("")
                //     return <SignIn state={{role:response.data.data.role_id}} />;
                //     // history('/sign-In');
                // }, 2000);
            }

            if (response.data.status === "failed") {
                setMsg(response.data.message)
                setTimeout(() => {
                    setMsg("")
                }, 2000);
            }
        });
    };
    if (redirect) {
        return <Navigate to="/acount-Varify" />;
    }

    $(".toggle-password").on('click', function () {
        $(this).toggleClass("show");
        let input = $(this).parent().find(".password-field")
        if (input.attr("type") == "password") {
        input.attr("type", "text");
        } else {
        input.attr("type", "password");
        }
    });
    return (

        <>
        {modalShow && <Header />}
        <main className="main-sectionWrapper">
            <div id="main-section" className="primary-scroll">
            
            <div className={modalShow ? "custom-modal open": "custom-modal" }>
                <div className="custom-modal-body text-center">
                <button onClick={() => openFingerPrint()} type="button" className="custom-modal-body__close">
                    <span>
                    {" "}
                    <i className="bx bx-x"></i>
                    </span>
                </button>
                <div className="title mb-0">This Functionality is in Process</div>
                </div>
            </div>

            <img
                src="http://demo-designprojects.com/html/sigma-bank/images/bottom-bg-img.png"
                alt="image"
                className="imgFluid bottom-bg"
                loading="lazy"
            />
            <div className="auth primary-scroll">
                <div className="container">
                <ul className="auth-tabs">
                    <li className="auth-tabs__single">
                    <Link to="/sign-In">Sign In</Link>
                    </li>
                    <li className="auth-tabs__single">
                    <Link to="/sign-Up" className="active">
                        Sign Up
                    </Link>
                    </li>
                </ul>
                <div className="auth__title">Sign up </div>
                <form action="#" className="auth-form">
                    <div className="auth-form__fields">
                    <label>
                        Full Name
                        <span>Register with mobile</span>
                    </label>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Please enter Full Name"
                        onChange={ (e) => setFullname(e.target.value) }
                    />
                    </div>
                    <div className="auth-form__fields">
                    <label>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Please enter email"
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                    </div>
                    <div className="auth-form__fields">
                    <label>Password</label>
                    <div className="passwordWrapper">
                        <input
                        type="password"
                        name="password"
                        className="password-field"
                        placeholder="Please enter Password"
                        onChange={ (e) => setPassword(e.target.value) } 
                        />
                        <i className="icon toggle-password bx bxs-show"></i>
                    </div>
                    </div>
                    <div className="auth-form__fields">
                    <label>Confirm Password</label>
                    <div className="passwordWrapper">
                        <input
                        type="password"
                        name="password"
                        className="password-field"
                        placeholder="Confirm Password"
                        onChange={ (e) => setConfirmPassword(e.target.value) }
                        />
                        <i className="icon toggle-password bx bxs-show"></i>
                    </div>
                    <span>{msg}</span>
                    </div>
                    <div className="auth-form__fields">
                    
                    <a onClick={onSubmitHandler} className="themeBtn themeBtn--full">
                        Sign Up
                    </a>
                    {/* <Link to="/acount-Varify" className="themeBtn themeBtn--full">
                        Sign Up
                    </Link> */}
                    </div>
                </form>
                <div className="auth-other">
                    <div className="auth-other__title">Or Sign up with</div>
                    <ul className="auth-other__options">
                    <li>
                        <a href="#">
                        <img
                            src="http://demo-designprojects.com/html/sigma-bank/images/facebook.png"
                            alt="image"
                            className="imgFluid"
                            loading="lazy"
                        />
                        Facebook
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <img
                            src="http://demo-designprojects.com/html/sigma-bank/images/google.png"
                            alt="image"
                            className="imgFluid"
                            loading="lazy"
                        />
                        Google
                        </a>
                    </li>
                    </ul>
                </div>
                <a
                    onClick={() => openFingerPrint()}
                    className="finger-print finger-print--static"
                >
                    <img
                    src="http://demo-designprojects.com/html/sigma-bank/images/finger-print-img.png"
                    alt="image"
                    className="imgFluid finger-print__img"
                    loading="lazy"
                    />
                    <div className="finger-print__title">
                    Use fingerprint instead?
                    </div>
                </a>
                </div>
            </div>
            </div>
        </main>
        </>
    );
}
export default SignUp;
