import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Header from "../Include/Header";

function Wallet() {
    const [toggle, setToggle] = React.useState(true);
    return (
        <>
            <main className="main-sectionWrapper">
                <div id="main-section" className="primary-scroll">
                    <Header />
                    <div className="page-header">
                        <div className="page-header__title">
                            <Link to="/welcome" ><i className='bx bx-chevron-left'></i></Link>
                            Wallet
                        </div>
                    </div>

                    <div className="blur-circle"></div>

                    <div className="wallet">
                        <div className="container">
                            <div className="text-center">
                                <div className="wallet__title">Current Wallet Balance</div>
                                <div className="wallet__amount">$ 7,737,373<i className='bx bxs-chevron-down'></i></div>
                            </div>
                            <div className="currency">
                                <div className="wrapper">
                                    <div className="currency__name">BTC:</div>
                                    <div className="currency__converted">0,00335</div>
                                </div>
                                <div className="currency__status">
                                    <i className='bx bxs-up-arrow'></i>+6.54%
                                </div>
                            </div>
                            <ul className="nav wallet-tabs" id="currency-tabs" role="tablist">
                                <li className="wallet-tabs__single">
                                    <a onClick={() => (setToggle(!toggle))} className={toggle && 'active'} id="nav-token-tab" data-toggle="tab"role="tab" aria-controls="nav-token" aria-selected={toggle}>Tokens</a>
                                </li>
                                <li className="wallet-tabs__single">
                                    <a onClick={() => (setToggle(!toggle))} className={!toggle && 'active'} id="nav-nft-tab" data-toggle="tab" role="tab" aria-controls="nav-nft" aria-selected={toggle}>NFTs</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="currency-tabsContent">
                                <div className="tab-pane fade show active" id="nav-token" role="tabpanel" aria-labelledby="nav-token-tab">
                                    <ul className="currency-updates">
                                        <li className="currency-updates__single">
                                            <div className="coin">
                                                <div className="coin__img">
                                                    <img src='http://demo-designprojects.com/html/sigma-bank/images/coin-img-1.png' alt='image' className='imgFluid' loading='lazy' />
                                                </div>
                                                <div className="coin-info">
                                                    <div className="coin-info__shortname">BTC</div>
                                                    <div className="coin-info__fullname">Bitcoin</div>
                                                </div>
                                            </div>
                                            <div className="coin-chart">
                                                <canvas id="myChart1" width="80" height="40"></canvas>
                                            </div>
                                            <div className="uptdated">
                                                <div className="uptdated__price">$37,700,00</div>
                                                <div className="uptdated__index up">+6.30%</div>
                                            </div>
                                        </li>
                                        <li className="currency-updates__single">
                                            <div className="coin">
                                                <div className="coin__img">
                                                    <img src='http://demo-designprojects.com/html/sigma-bank/images/coin-img-2.png' alt='image' className='imgFluid' loading='lazy' />
                                                </div>
                                                <div className="coin-info">
                                                    <div className="coin-info__shortname">ETH</div>
                                                    <div className="coin-info__fullname">Ethereum</div>
                                                </div>
                                            </div>
                                            <div className="coin-chart">
                                                <canvas id="myChart2" width="80" height="40"></canvas>
                                            </div>
                                            <div className="uptdated">
                                                <div className="uptdated__price">$2,600,00</div>
                                                <div className="uptdated__index down">-5.21%</div>
                                            </div>
                                        </li>
                                        <li className="currency-updates__single">
                                            <div className="coin">
                                                <div className="coin__img">
                                                    <img src='http://demo-designprojects.com/html/sigma-bank/images/coin-img-3.png' alt='image' className='imgFluid' loading='lazy' />
                                                </div>
                                                <div className="coin-info">
                                                    <div className="coin-info__shortname">SOL</div>
                                                    <div className="coin-info__fullname">Solona</div>
                                                </div>
                                            </div>
                                            <div className="coin-chart">
                                                <canvas id="myChart3" width="80" height="40"></canvas>
                                            </div>
                                            <div className="uptdated">
                                                <div className="uptdated__price">$400,00</div>
                                                <div className="uptdated__index down">-2.31%</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-pane fade" id="nav-nft" role="tabpanel" aria-labelledby="nav-nft-tab">
                                    <ul className="currency-updates">
                                        <li className="currency-updates__single">
                                            <div className="coin">
                                                <div className="coin__img">
                                                    <img src='http://demo-designprojects.com/html/sigma-bank/images/coin-img-1.png' alt='image' className='imgFluid' loading='lazy' />
                                                </div>
                                                <div className="coin-info">
                                                    <div className="coin-info__shortname">BTC</div>
                                                    <div className="coin-info__fullname">Bitcoin</div>
                                                </div>
                                            </div>
                                            <div className="coin-chart">
                                                <canvas id="myChart4" width="80" height="40"></canvas>
                                            </div>
                                            <div className="uptdated">
                                                <div className="uptdated__price">$37,700,00</div>
                                                <div className="uptdated__index up">+6.30%</div>
                                            </div>
                                        </li>
                                        <li className="currency-updates__single">
                                            <div className="coin">
                                                <div className="coin__img">
                                                    <img src='http://demo-designprojects.com/html/sigma-bank/images/coin-img-2.png' alt='image' className='imgFluid' loading='lazy' />
                                                </div>
                                                <div className="coin-info">
                                                    <div className="coin-info__shortname">ETH</div>
                                                    <div className="coin-info__fullname">Ethereum</div>
                                                </div>
                                            </div>
                                            <div className="coin-chart">
                                                <canvas id="myChart5" width="80" height="40"></canvas>
                                            </div>
                                            <div className="uptdated">
                                                <div className="uptdated__price">$2,600,00</div>
                                                <div className="uptdated__index down">-5.21%</div>
                                            </div>
                                        </li>
                                        <li className="currency-updates__single">
                                            <div className="coin">
                                                <div className="coin__img">
                                                    <img src='http://demo-designprojects.com/html/sigma-bank/images/coin-img-3.png' alt='image' className='imgFluid' loading='lazy' />
                                                </div>
                                                <div className="coin-info">
                                                    <div className="coin-info__shortname">SOL</div>
                                                    <div className="coin-info__fullname">Solona</div>
                                                </div>
                                            </div>
                                            <div className="coin-chart">
                                                <canvas id="myChart6" width="80" height="40"></canvas>
                                            </div>
                                            <div className="uptdated">
                                                <div className="uptdated__price">$400,00</div>
                                                <div className="uptdated__index down">-2.31%</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link to="/acount-statement" className='themeBtn themeBtn--full mt-4'>View Account Statement</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Wallet;