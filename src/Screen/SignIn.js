import React, { useState } from "react";
import axios from "axios";

import { Link, Navigate, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

import Header from "../Include/Header";
import $ from 'jquery';

function SignIn(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [modalShow, setModalShow] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [redirect, setRedirect] = React.useState(false);
    const [errMsgEmail, setErrMsgEmail] = React.useState(false);
    const [errMsgPwd, setErrMsgPwd] = React.useState(false);
    const [errMsg, setErrMsg] = React.useState(false);
    const [msg, setMsg] = React.useState(false);
    const location = useLocation();
    const { role } = location.state

    const openFingerPrint = () =>{
      setModalShow(!modalShow)
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

    const islogin = () =>{
        setIsLoading(true);
        let result = axios.post("https://demo-designprojects.com/demo/sigma-bank/api/sign-in", {email: email, password: password, role: role}).then((response) => {
            setIsLoading(false);
            if (response.data.status === 200) {
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("userData", JSON.stringify(response.data.data));
                setMsg(response.data.message)
                setRedirect(true)
                return <Navigate to="/acount-Varify" />;
            }

            if (response.data.status === "failed" && response.data.success === undefined) 
            {
                setErrMsgEmail(response.data.validation_error.email)
                setErrMsgPwd(response.data.validation_error.password)

                setTimeout(() => {
                    setErrMsgEmail('')
                    setErrMsgPwd('')
                }, 2000);
            } 
            else if (response.data.status === "failed" && response.data.success === false) 
            {
                setErrMsg(response.data.message)
                setTimeout(() => {
                    setErrMsg('')
                }, 2000);
            }
          })
          .catch((error) => {
            console.log(error);
          });
    }
    if (redirect) {
        return <Navigate to="/acount-Varify" />;
    }
    const login = localStorage.getItem("isLoggedIn");
    // if (!login) {
    //     return <Navigate to="/acount-Varify" />;
    // }

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

                    <img src='http://demo-designprojects.com/html/sigma-bank/images/bottom-bg-img.png' alt='image' className='imgFluid bottom-bg' loading='lazy' />
                    <div className='auth primary-scroll'>
                        <div className='container'>
                            <ul className="auth-tabs">
                                <li className="auth-tabs__single">
                                    <Link to="/sign-In"state={{ role: role }}  className="active">Sign In</Link>
                                </li>
                                <li className="auth-tabs__single">
                                    <Link to="/sign-Up" state={{ role: role }} >Sign Up</Link>
                                </li>
                            </ul>
                            <div className="auth__title">Sign in</div>
                            <form action="#" className="auth-form">
                                <div className="auth-form__fields">
                                    <label>
                                        Email
                                        <a href="#">Register with mobile</a>
                                    </label>
                                    <input type="email" name="email" placeholder="Please enter email" onChange={(e) => setEmail(e.target.value)} />
                                    
                                    <span className="text-danger">{errMsgEmail}</span>
                                </div>
                                <div className="auth-form__fields">
                                    <label>Password</label>
                                    <div className="passwordWrapper">
                                        <input type="password" name="password" className="password-field" placeholder="Please enter Password" onChange={(e) => setPassword(e.target.value)} />
                                        <span className="text-danger">{errMsgPwd}</span>
                                        <i className='icon toggle-password bx bxs-show'></i>
                                    </div>
                                    <a href="#" className="mt-2">Forgot password?</a>
                                    <span className="text-danger">{errMsg}</span>
                                </div>

                                <div className="auth-form__fields">
                                    <span className="text-danger">{msg}</span>
                                    <a onClick={islogin} className="themeBtn themeBtn--full">Sign In</a>
                                    {/* <Link to="/acount-Varify" className="themeBtn themeBtn--full">Sign In</Link> */}
                                </div>
                            </form>
                            <div className="auth-other">
                                <div className="auth-other__title">Or Sign up with</div>
                                <ul className="auth-other__options">
                                    <li><a href="#"><img src='http://demo-designprojects.com/html/sigma-bank/images/facebook.png' alt='image' className='imgFluid' loading='lazy' />
                                            Facebook</a></li>
                                    <li><a href="#"><img src='http://demo-designprojects.com/html/sigma-bank/images/google.png' alt='image' className='imgFluid' loading='lazy' />
                                            Google</a></li>
                                </ul>
                            </div>
                            <a onClick={() => openFingerPrint()} className="finger-print finger-print--static">
                                <img src='http://demo-designprojects.com/html/sigma-bank/images/finger-print-img.png' alt='image' className='imgFluid finger-print__img' loading='lazy' />
                                <div className="finger-print__title">Use fingerprint instead?</div>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default SignIn;