import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, Navigate, useLocation } from "react-router-dom";

import Header from "../Include/Header";
import Carousel from "react-bootstrap/Carousel";

function EditProperty() {
    const [title, setTitle] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [image, setImage] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [rating, setRating] = React.useState('');
    const [reviews, setReviews] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [link, setLink] = React.useState('');
    const [userData, setUserData] = React.useState(JSON.parse(localStorage.getItem("userData")));
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [msg, setMsg] = React.useState('');
    const [getPro, setGetPro] = React.useState([]);

    useEffect(() => {
        if(getPro == ''){
            let title = localStorage.getItem("getProperty");
            let result = axios.get("https://demo-designprojects.com/demo/sigma-bank/api/get-property", {
                params: {
                    title: title,
                    user_id: userData.id,
                },
            })
            .then((response) => {
            if (response.data.status === 200) {
                setTitle(response.data.properties.title)
                setImage(response.data.properties.image)
                setPrice(response.data.properties.price)
                setContact(response.data.properties.contact)
                setRating(response.data.properties.rating)
                setReviews(response.data.properties.reviews)
                setLocation(response.data.properties.location)
                setLink(response.data.properties.link)

                setGetPro(response.data.properties);
                console.log(response.data.properties)
            } else {
                console.log(response.data.message);
            }
            })
            .catch((error) => {
                console.log(error);
            });
        }

    });

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
        formData.append("getProperty", JSON.parse(localStorage.getItem("getProperty")));
        let result = axios.post("https://demo-designprojects.com/demo/sigma-bank/api/add-propety", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then((response) => {
            if (response.data.status === 200) {
                localStorage.setItem("property", JSON.stringify(response.data.data));
                setMsg(response.data.message)
                return <Navigate to="/all-properties" />;
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
              <Link to="/all-properties">
                <i className="bx bx-chevron-left"></i>
              </Link>
              Property
            </div>
          </div>

          <div className="property">
            <div className="container">
              <div className="auth__title">Edit Property</div>
               <form action="#" className="auth-form" > 

                <div className="auth-form__fields">
                  <label>
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={title}
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
                      value={price}
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
                      value={contact}
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
                      value={rating}
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
                      value={reviews}
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
                      value={location}
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
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                    />
                  </div>
                </div>
                <img src={'http://127.0.0.1:8000/'+image} className='edit-file' />
                <div className="property-upload">
                    <label for="gallery" className="themeBtn">
                        <i className='bx bxs-image'></i>Images
                        <input type="file" id="gallery" onChange={handleFileSelect}/>
                    </label>
                </div>

                <div className="auth-form__fields">
                  <span className="text-danger">{msg}</span>
                  <a onClick={add_property} className="themeBtn themeBtn--full"> 
                    Update property
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
export default EditProperty;
