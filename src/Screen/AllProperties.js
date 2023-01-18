import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import Header from "../Include/Header";
import AddProperty from "./AddProperty";

import Carousel from "react-bootstrap/Carousel";

function AllProperties() {
  const [add, setAdd] = React.useState(false);
  const [property, setProperty] = React.useState([]);
  const [getpro, setGetPro] = React.useState([]);
  const [newpro, setNewpro] = React.useState(true);
  const user = JSON.parse(localStorage.getItem("userData"));

  function addproperty() {
    setAdd(true);
  }

  useEffect(() => {
    if (newpro == true) {
      let result = axios
        .get("https://demo-designprojects.com/demo/sigma-bank/api/get-property",{
        params: {
            user_id: user.id,
          }
        })
        .then((response) => {
          if (response.data.status === 200) {
            setProperty(response.data.properties);
            setNewpro(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      setNewpro(false);
    }
  });

  const history = useNavigate();
  function propertyDetail(ev) {
    let title = ev.target.dataset.value;
    localStorage.setItem("getProperty", title);
    history("/property");
  }

  return (
    <>
      {add ? (
        <AddProperty />
      ) : (
        <main className="main-sectionWrapper">
          <div id="main-section" className="primary-scroll">
            <Header />
            <img
              src="http://demo-designprojects.com/html/sigma-bank/images/bottom-bg-img-2.png"
              alt="image"
              className="imgFluid bottom-bg"
              loading="lazy"
            />

            <div className="page-header">
              <div className="page-header__title">
                <Link to="/welcome">
                  <i className="bx bx-chevron-left"></i>
                </Link>
                All Properties
              </div>
              <div className="page-header__title"></div>
              {user.role_id == 1 &&
              <a onClick={addproperty} className="icon">
                <i class="bx bx-plus-circle"></i>
              </a>
              }
            </div>

            <div className="currency-updatesWrapper">
              <div className="container">
                <ul className="currency-updates">
                  {property.map((item, index) => (
                    <li className="currency-updates__single" key={index}>
                      <div className="coin">
                        <div className="coin__img">
                          <img
                            src={"http://127.0.0.1:8000/" + item.image}
                            alt="image"
                            className="imgFluid"
                            loading="lazy"
                            data-value={item.id}
                            onClick={propertyDetail}
                          />
                        </div>
                        <div className="coin-info">
                          <div className="coin-info__shortname">
                            {item.title}
                          </div>
                          <div className="coin-info__fullname">
                            {item.fullname}
                          </div>
                        </div>
                      </div>
                      <div className="coin-chart">
                        <canvas id="myChart1" width="80" height="40"></canvas>
                      </div>
                      <div className="uptdated">
                        <div className="uptdated__price">${item.price}</div>
                        <div className="uptdated__index up">
                          +{item.rating}%
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
export default AllProperties;
