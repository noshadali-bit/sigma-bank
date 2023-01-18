import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../Include/Header";
import Carousel from "react-bootstrap/Carousel";
import { get } from "jquery";

function Property() {
  const history = useNavigate();
  const [prop, setGetProp] = React.useState(localStorage.getItem("getProperty"));
  const [getPro, setGetPro] = React.useState([]);
  const user = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    let title = localStorage.getItem("getProperty");

    if(getPro == ''){
      let result = axios
      .get("https://demo-designprojects.com/demo/sigma-bank/api/get-property", {
        params: {
          title: title,
          user_id: user.id,
        },
      })
      .then((response) => {
        if (response.data.status === 200) {
          setGetPro(response.data.properties);
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }

  });

  function deleteProperty(){
    
      let result = axios
      .get("https://demo-designprojects.com/demo/sigma-bank/api/delete-property", {
        params: {
          title: prop,
        },
      })
      .then((response) => {
        if (response.data.status === 200) {
          history('/all-properties');
        } else {
          console.log(response.data.message);
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
          <Header />
          <div className="page-header">
            <div className="page-header__title">
              <Link to="/all-properties">
                <i className="bx bx-chevron-left"></i>
              </Link>
              All Property
            </div>
            {user.role_id == 1 &&
            <div className="page-header__icons">
              <Link to='/edit-property' className="icon">
                <i class="bx bxs-pencil"></i>
              </Link>
              <a onClick={() => { if (window.confirm('Are you sure you wish to delete this Property?')) deleteProperty() } } className="icon">
                <i class="bx bxs-trash-alt"></i>
              </a>
            </div>
            }
          </div>

          <div className="property">
            <div className="container">
              <div className="property-card">
                <div className="propertyImgSlider">
                  {getPro.image ? (
                    <div className="property-card__img">
                      <img
                        src={"http://127.0.0.1:8000/" + getPro.image}
                        alt="image"
                        className="imgFluid"
                      />
                    </div>
                  ) : (
                    <Carousel nextLabel="" prevLabel="" indicators="">
                      <Carousel.Item interval={2000}>
                        <div className="property-card__img">
                          <img
                            src="http://demo-designprojects.com/html/sigma-bank/images/property-img.png"
                            alt="image"
                            className="imgFluid"
                          />
                        </div>
                      </Carousel.Item>
                      <Carousel.Item interval={2000}>
                        <div className="property-card__img">
                          <img
                            src="http://demo-designprojects.com/html/sigma-bank/images/property-img.png"
                            alt="image"
                            className="imgFluid"
                          />
                        </div>
                      </Carousel.Item>
                      <Carousel.Item interval={2000}>
                        <div className="property-card__img">
                          <img
                            src="http://demo-designprojects.com/html/sigma-bank/images/property-img.png"
                            alt="image"
                            className="imgFluid"
                          />
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  )}
                </div>
                <div className="property-card__content">
                  {getPro.title}
                  <div className="wrapper">
                    <div className="reviews">
                      <i className="bx bxs-star"></i>
                      {getPro.rating} ({getPro.reviews} reviews)
                    </div>
                    <div className="address">
                      <i className="bx bxs-map"></i>
                      {getPro.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="owner">
                <div className="owner-details">
                  <div className="wrapper">
                    <div className="owner-details__img">
                      <img
                        src="http://demo-designprojects.com/html/sigma-bank/images/person-img-1.png"
                        alt="image"
                        className="imgFluid"
                        loading="lazy"
                      />
                    </div>
                    <div className="owner-details__info">
                      <div className="name">{getPro.fullname}</div>
                      <p>Property owner</p>
                    </div>
                  </div>
                  <ul className="owner-details__contacts">
                    <li>
                      <a href="#">
                        <i className="bx bxs-message-minus"></i>
                      </a>
                    </li>
                    <li>
                      <a href={"tel:+" + getPro.contact}>
                        <i className="bx bxs-phone bx-tada"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="owner__location">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26359630.09737905!2d-113.7240346513082!3d36.2460939887435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1673025694244!5m2!1sen!2s"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="owner__others">
                  <div className="price">${getPro.price}</div>
                  <Link to="/property-document" className="themeBtn">
                    Property Documents
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Property;
