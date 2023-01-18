import { useNavigate, Link, Navigate} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Welcome() {
    const [modalShow, setModalShow] = React.useState(false);
    const [proTitle, setProTitle] = React.useState('');
    const [islog, setIslog] = React.useState(localStorage.getItem("isLoggedIn"));
    const openFingerPrint = () =>{
      setModalShow(!modalShow)
    }

    const user = JSON.parse(localStorage.getItem("userData"));
    const history = useNavigate();

    function logout(){
        localStorage.setItem("isLoggedIn", false);
        setIslog(localStorage.getItem("isLoggedIn"))
        localStorage.clear();
        history('/');
        window.location.reload(false);
    }

    useEffect(() => {
        if(islog == false || islog == 'false'){
            history('/');
        }
        // return <Navigate to="/" />;
    });

    function get_property(){
        let url =  'https://demo-designprojects.com/demo/sigma-bank/api/get-property/'+proTitle 
        console.log(url)
        let result = axios.get(url).then((response) => {
                
            if (response.data.status === 200) {
                localStorage.setItem("getProperty", JSON.stringify(response.data.properties));
                console.log(response.data.properties)
                history('/property');
            }else{
                console.log(response)
            } 
            
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
  return (
        <>
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
                            <div className="title mb-0 title--lg">Enter Property Code to sell</div>
                            <form action="#" className="custom-modal-body__form">
                                <input type="text" placeholder="#1234456" onChange={ (e) => setProTitle(e.target.value) } />
                                <a onClick={get_property} className="circle-arrow"><i className='bx bx-right-arrow-alt'></i></a>
                            </form>
                        </div>
                    </div>
                    <img src='http://demo-designprojects.com/html/sigma-bank/images/bottom-bg-img-3.png' alt='image' className='imgFluid bottom-bg' loading='lazy' />

                    <div className='welcome'>
                        <div className='container p-0'>
                            <div className="page-header page-header--transparent">
                                <div className="page-header__title"></div>
                                <a onClick={logout} className="themeBtn logout"><i class='bx bx-log-out'></i>logout</a>
                            </div>
                            <img src='http://demo-designprojects.com/html/sigma-bank/images/welcome-vector.png' alt='image' className='imgFluid welcome-bg' loading='lazy' />
                            <div className="welcome__heading">Welcome <br /> {user.fullname} <br /> To Sigma Bank</div>
                            <div className="welcome__subHeading">Expect The Unexpected</div>
                            <p>Don’t Worry About Loan, You Are In Safe Hand!</p>
                            <ul className="welcome-actions">
                                {/* {user.role_id == 2 &&
                                <li>
                                    <a onClick={() => openFingerPrint()} className="welcome-actions__single">
                                        <div className="sky-img">
                                            <img src='http://demo-designprojects.com/html/sigma-bank/images/rocket-img.png' alt='image' className='imgFluid' loading='lazy' />
                                        </div>
                                        <div className="info">
                                            <div>
                                                <div className="title">View Property </div>
                                                <p>Get your property on a single click</p>
                                            </div>
                                            <div className="circle-arrow"><i className='bx bx-right-arrow-alt'></i></div>
                                        </div>
                                    </a>
                                </li>
                                } */}
                                {/* {user.role_id == 1 && */}
                                <li>
                                    <Link to="/all-properties" className="welcome-actions__single">
                                        <div className="sky-img">
                                            <img src='http://demo-designprojects.com/html/sigma-bank/images/wallet-img.png' alt='image' className='imgFluid' loading='lazy' />
                                        </div>
                                        <div className="info">
                                            <div>
                                                <div className="title">View All Property </div>
                                                <p>Bitcoins, NFTS, Cash</p>
                                            </div>
                                            <div className="circle-arrow"><i className='bx bx-right-arrow-alt'></i></div>
                                        </div>
                                    </Link>
                                </li>
                                {/* } */}
                                <li>
                                    <Link to="/wallet" className="welcome-actions__single">
                                        <div className="sky-img">
                                            <img src='http://demo-designprojects.com/html/sigma-bank/images/wallet-img.png' alt='image' className='imgFluid' loading='lazy' />
                                        </div>
                                        <div className="info">
                                            <div>
                                                <div className="title">Wallet / Account statment </div>
                                                <p>Bitcoins, NFTS, Cash</p>
                                            </div>
                                            <div className="circle-arrow"><i className='bx bx-right-arrow-alt'></i></div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/market-trends" className="welcome-actions__single">
                                        <div className="sky-img">
                                            <img src='http://demo-designprojects.com/html/sigma-bank/images/rocket-img.png' alt='image' className='imgFluid' loading='lazy' />
                                        </div>
                                        <div className="info">
                                            <div>
                                                <div className="title">Market</div>
                                                <p>View Market Trends</p>
                                            </div>
                                            <div className="circle-arrow"><i className='bx bx-right-arrow-alt'></i></div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/notifications" className="welcome-actions__single">
                                        <img src='http://demo-designprojects.com/html/sigma-bank/images/rocket-img.png' alt='image' className='imgFluid' loading='lazy' />
                                        <div className="info">
                                            <div>
                                                <div className="title">Notifications</div>
                                                <p>Get your property on a single click</p>
                                            </div>
                                            <div className="circle-arrow"><i className='bx bx-right-arrow-alt'></i></div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Welcome;