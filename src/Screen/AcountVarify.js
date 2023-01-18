import {Link, Navigate, useNavigate} from 'react-router-dom';
import Header from "../Include/Header";

function AcountVarify() {
    const history = useNavigate();
    const welcome = () => {
        localStorage.setItem("isLoggedIn", true)
        const login = localStorage.getItem("isLoggedIn");

        if (login) {
                history('/welcome');
                window.location.reload(false);
        }
    }

    return (
        <>
            <main className="main-sectionWrapper">
                <div id="main-section" className="primary-scroll">
                    <Header />
                    <img src='http://demo-designprojects.com/html/sigma-bank/images/bottom-bg-img-2.png' alt='image' className='imgFluid bottom-bg' loading='lazy' />

                    <div className="page-header">
                        <div className="page-header__title">
                            <Link to="/sign-Up" ><i className='bx bx-chevron-left'></i></Link>
                            Verify Your Account
                        </div>
                    </div>

                    <div className='verify'>
                        <div className='container p-0'>
                            <div className="verify-body">
                                <div className="headingWrapper">
                                    <div className="verify-body__title">Please Verify Your account</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                </div>
                                <div className="verify-body__box">
                                    <div className="title">Documents</div>
                                    <ul>
                                        <li>
                                            <input type="checkbox" id="check1" />
                                            <label for="check1">
                                                <i className='bx bx-check'></i>
                                                Photo verification
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="check2" />
                                            <label for="check2">
                                                <i className='bx bx-check'></i>
                                                National ID
                                            </label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="check3" />
                                            <label for="check3">
                                                <i className='bx bx-check'></i>
                                                Face verification
                                            </label>
                                        </li>
                                    </ul>
                                    <a onClick={welcome} className="themeBtn themeBtn--center mb-0">Submit</a>
                                    {/* <Link to="/welcome" className="themeBtn themeBtn--center mb-0">Submit</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default AcountVarify;