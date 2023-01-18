import {Link} from 'react-router-dom';
import Header from "../Include/Header";

function AcountStatement() {
    return (
        <>
            <main className="main-sectionWrapper">
                <div id="main-section" className="primary-scroll">
                    <Header />
                    <img src='http://demo-designprojects.com/html/sigma-bank/images/bottom-bg-img-2.png' alt='image' className='imgFluid bottom-bg' loading='lazy' />

                    <div className="page-header">
                        <div className="page-header__title">
                            <Link to="/wallet" ><i className='bx bx-chevron-left'></i></Link>
                            Account Statement
                        </div>
                    </div>

                    <div className="account">
                        <div className="container p-0">
                            <div className="account-header">
                                <div className="wrapper wrapper--loan">
                                    <div className="loan-title">Loan</div>
                                    <div className="loan-amount">xxxx034</div>
                                </div>
                                <div className="wrapper">
                                    <div className="amount-type">Excess Amount</div>
                                    <div className="amount-type"><span>Excess Amount</span></div>
                                </div>
                                <div className="wrapper">
                                    <div className="price"><span>$0.00</span></div>
                                    <div className="price price--sm"><span>$15,57,562</span></div>
                                </div>
                            </div>
                            <div className="account-body">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Month</th>
                                            <th>Charges</th>
                                            <th>Paid</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Jan, 22</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Jan, 22</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Jan, 22</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Jan, 22</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Jan, 22</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Jan, 22</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Jan, 22</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Jan, 22</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                        </tr>
                                        <tr>
                                            <td>Jan, 22</td>
                                            <td>$0.00</td>
                                            <td>$0.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>
        </>
    );
}
export default AcountStatement;