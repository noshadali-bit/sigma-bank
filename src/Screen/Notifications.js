import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Header from "../Include/Header";

function Notifications() {
    const [togglea, setTogglea] = React.useState(true);
    const [toggleb, setToggleb] = React.useState(true);
    const [togglec, setTogglec] = React.useState(true);
    return (
        <>
            <main className="main-sectionWrapper">
                <div id="main-section" className="primary-scroll">
                    <Header />
                    
                    <img src='http://demo-designprojects.com/html/sigma-bank/images/welcome-vector.png' alt='image' className='imgFluid bottom-bg' loading='lazy' />

                    <div className="page-header">
                        <div className="page-header__title">
                            <Link to="/welcome" ><i className='bx bx-chevron-left'></i></Link>Notifications
                        </div>
                        <a href="#" className="notification-bell"><i className='bx bxs-bell bx-tada'></i>
                            <span className="total">1</span>
                        </a>
                    </div>

                    <div className='notification'>
                        <div className='container'>
                            <ul className="customer">
                                <li className="customer-single">
                                    <div className="customer-single__details">
                                        <div>
                                            <img src='http://demo-designprojects.com/html/sigma-bank/images/customer-img.png' alt='image' className='imgFluid' loading='lazy' />
                                        </div>
                                        <div className="info">
                                            <div className="name">Customer Verification</div>
                                            <span>Adress#1234 abcd demo</span>
                                        </div>
                                    </div>
                                    <div className="customer-single__status">
                                        <span onClick={() => (setTogglea(!togglea))} className={togglea && 'active'}>Submited</span>
                                        <span onClick={() => (setTogglea(!togglea))} className={!togglea && 'active'}>Pending</span>
                                    </div>
                                </li>
                                <li className="customer-single">
                                    <div className="customer-single__details">
                                        <div>
                                            <img src='http://demo-designprojects.com/html/sigma-bank/images/customer-img.png' alt='image' className='imgFluid' loading='lazy' />
                                        </div>
                                        <div className="info">
                                            <div className="name">Customer Verification</div>
                                            <span>Adress#1234 abcd demo</span>
                                        </div>
                                    </div>
                                    <div className="customer-single__status">
                                        <span onClick={() => (setToggleb(!toggleb))} className={toggleb && 'active'}>Submited</span>
                                        <span onClick={() => (setToggleb(!toggleb))} className={!toggleb && 'active'}>Pending</span>
                                    </div>
                                </li>
                                <li className="customer-single">
                                    <div className="customer-single__details">
                                        <div>
                                            <img src='http://demo-designprojects.com/html/sigma-bank/images/customer-img.png' alt='image' className='imgFluid' loading='lazy' />
                                        </div>
                                        <div className="info">
                                            <div className="name">Customer Verification</div>
                                            <span>Adress#1234 abcd demo</span>
                                        </div>
                                    </div>
                                    <div className="customer-single__status">
                                        <span onClick={() => (setTogglec(!togglec))} className={togglec && 'active'}>Submited</span>
                                        <span onClick={() => (setTogglec(!togglec))} className={!togglec && 'active'}>Pending</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
export default Notifications;