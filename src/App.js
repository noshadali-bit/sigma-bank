import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Main from "./Main";
import SignUp from "./Screen/SignUp";
import SignIn from "./Screen/SignIn";
import AcountVarify from "./Screen/AcountVarify";
import Welcome from "./Screen/Welcome";
import Wallet from "./Screen/Wallet";
import Notifications from "./Screen/Notifications";
import MarketTrends from "./Screen/MarketTrends";
import AcountStatement from "./Screen/AcountStatement";
import Property from "./Screen/Property";
import EditProperty from "./Screen/EditProperty";
import SubmitPropertyDocuments from "./Screen/SubmitPropertyDocuments";
import AllProperties from "./Screen/AllProperties";
import PropertyDocument from "./Screen/PropertyDocument";

function App() {

  const login = localStorage.getItem("isLoggedIn");
  return (
    <div className='allWrapper'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Main/>} />
        </Routes>
        {!login ? (
          <Routes>
            <Route path='/sign-Up' element={<SignUp/>} />
            <Route path='/sign-In' element={<SignIn/>} />
            <Route path='/acount-Varify' element={<AcountVarify/>} />
          </Routes>
        ) : ( 
          <Routes>
            <Route exact path='/welcome' element={<Welcome/>} />
            <Route path='/wallet' element={<Wallet/>} />
            <Route path='/notifications' element={<Notifications/>} />
            <Route path='/market-trends' element={<MarketTrends/>} />
            <Route path='/acount-statement' element={<AcountStatement/>} />
            <Route path='/property' element={<Property/>} />
            <Route path='/all-properties' element={<AllProperties/>} />
            <Route path='/edit-property' element={<EditProperty/>} />
            <Route path='/property-document' element={<PropertyDocument/>} />
            <Route path='/submit-property-documents' element={<SubmitPropertyDocuments/>} />
          </Routes>
        )}
      </Router>
      {/* <script crossorigin src="./Include/js/bootstrap.min.js"></script> */}
      {/* <script crossorigin src="./Include/js/particles.js"></script> */}
      {/* <script crossorigin src="./Include/js/particles.min.js"></script> */}
      {/* <script crossorigin src="./Include/js/slick.js"></script> */}
      {/* <script crossorigin src="./Include/js/app.js"></script> */}
    </div>
  );
}

export default App;