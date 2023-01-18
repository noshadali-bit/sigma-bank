import {Link} from 'react-router-dom';
import Header from "../Include/Header";

function MarketTrends() {
    return (
        <>
            <main className="main-sectionWrapper">
                <div id="main-section" className="primary-scroll">
                    <Header />
                    <img src='http://demo-designprojects.com/html/sigma-bank/images/bottom-bg-img-2.png' alt='image' className='imgFluid bottom-bg' loading='lazy' />

                    <div className="page-header">
                        <div className="page-header__title">
                            <Link to="/welcome" ><i className='bx bx-chevron-left'></i></Link>
                            Market Trends
                        </div>
                    </div>

                    <div className="currency-updatesWrapper">
                        <div className="container">
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
                    </div>
                </div>
            </main>
        </>
    );
}
export default MarketTrends;