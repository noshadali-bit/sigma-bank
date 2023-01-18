import React, { useState } from "react";
import axios from 'axios';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import Header from "../Include/Header";
import Carousel from "react-bootstrap/Carousel";

function AddProperty() {
    const history = useNavigate();
    const [title, setTitle] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [rating, setRating] = React.useState('');
    const [reviews, setReviews] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [link, setLink] = React.useState('');
    const [userData, setUserData] = React.useState(JSON.parse(localStorage.getItem("userData")));
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [msg, setMsg] = React.useState('');

    const add_property = () =>{
        const formData = new FormData()
        formData.append("user_id", userData.id);
        formData.append("title", title);
        formData.append("price", price);
        formData.append("contact", contact);
        formData.append("rating", rating);
        formData.append("reviews", reviews);
        formData.append("location", location);
        formData.append("link", link);
        formData.append("selectedFile", selectedFile);
        let result = axios.post("https://demo-designprojects.com/demo/sigma-bank/api/add-propety", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then((response) => {
            if (response.data.status === 200) {
                localStorage.setItem("property", JSON.stringify(response.data.data));
                setMsg(response.data.message)
                setTimeout(() => {
                  setMsg('')
                  history('/all-properties')
              }, 1000);

            }

            if (response.data.status === "failed" && response.data.success === false) 
            {
                setMsg(response.data.message)
                setTimeout(() => {
                    setMsg('')
                }, 2000);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }

  return (
    <>
      <main className="main-sectionWrapper">
        <div id="main-section" className="primary-scroll">
          <Header />
          <div className="page-header">
            <div className="page-header__title">
              <Link to="/welcome">
                <i className="bx bx-chevron-left"></i>
              </Link>
              Property
            </div>
          </div>

          <div className="property">
            <div className="container">
              <div className="auth__title">Add Property</div>
               <form action="#" className="auth-form" > 

                <div className="auth-form__fields">
                  <label>
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Please Enter Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="auth-form__fields">
                  <label>Price</label>
                  <div>
                    <input
                      type="number"
                      name="price"
                      placeholder="Please Enter Price"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>

                <div className="auth-form__fields">
                  <label>Contact</label>
                  <div>
                    <input
                      type="number"
                      name="contact"
                      placeholder="Please Enter Contact"
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                </div>

                <div className="auth-form__fields">
                  <label>Rating</label>
                  <div>
                    <input
                      type="number"
                      name="rating"
                      max={5}
                      placeholder="Please Enter Rating"
                      onChange={(e) => setRating(e.target.value)}
                    />
                  </div>
                </div>
                <div className="auth-form__fields">
                  <label>Reviews</label>
                  <div>
                    <input
                      type="number"
                      name="reviews"
                      placeholder="Please Enter Reviews"
                      onChange={(e) => setReviews(e.target.value)}
                    />
                  </div>
                </div>
                <div className="auth-form__fields">
                  <label>Location</label>
                  <div>
                    <input
                      type="text"
                      name="location"
                      placeholder="Please Enter Location"
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="auth-form__fields">
                  <label>location Link</label>
                  <div>
                    <input
                      type="text"
                      name="link"
                      placeholder="Please Enter Contact"
                      onChange={(e) => setLink(e.target.value)}
                    />
                  </div>
                </div>
                <div className="property-upload">
                    <label for="gallery" className="themeBtn">
                        <i className='bx bxs-image'></i>Images
                        <input type="file" id="gallery" onChange={handleFileSelect}/>
                    </label>
                </div>

                <div className="auth-form__fields">
                  <span className="text-danger">{msg}</span>
                  <a onClick={add_property} className="themeBtn themeBtn--full"> 
                    Add property
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default AddProperty;
