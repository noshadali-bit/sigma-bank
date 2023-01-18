import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from './Include/Header';

function Main() {
    const [modalShow, setModalShow] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem("isLoggedIn"));
    
    const openFingerPrint = () =>{
        setModalShow(!modalShow)
    }
    return (
    <>
        <main className="main-sectionWrapper">
            <div id="main-section" className="primary-scroll">
                <Header />

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

                <div className=" home">
                    <div className="container ">
                        <div id="particles-js" className="particles"></div>

                            <a onPress={() => Link('/')} className="home__logo">
                                <img src='http://demo-designprojects.com/html/sigma-bank/images/logo.png' alt='image' className='imgFluid' loading='lazy' />
                            </a>
                            
                            {!localStorage.getItem("isLoggedIn") ?
                            <div className="wrapper">
                                <Link to='/sign-In' state={{ role: "1" }} className="themeBtn themeBtn--full" >Seller</Link>
                                <Link to='/sign-In' state={{ role: "2" }} className="themeBtn themeBtn--full themeBtn--secondary" >Buyer</Link>
                            </div>
                            :
                            <div className="wrapper">
                                {
                                    isLoggedIn.role_id == 1 ? 
                                    <Link to="/welcome" className="themeBtn themeBtn--full">Seller</Link>
                                    :
                                    <Link to="/welcome" className="themeBtn themeBtn--full themeBtn--secondary">Buyer</Link>
                                }
                            </div>
                            }

                        <a onClick={() => openFingerPrint()} className="finger-print">
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
export default Main;
