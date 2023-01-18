import React, { useState, useEffect } from "react";
import {Link, Navigate, useNavigate} from 'react-router-dom';
import axios from "axios";

import Header from "../Include/Header";

function PropertyDocument() {
    const [imgpath, setImgpath] = React.useState('');
    const [document, setDocument] = React.useState([]);
    const [bool, setBool] = React.useState(true);
    const [userData, setUserData] = React.useState(JSON.parse(localStorage.getItem("userData")));
    const history = useNavigate();

    useEffect(() => {
        if(bool){
            let title = localStorage.getItem("getProperty");
            let result = axios
            .get("https://demo-designprojects.com/demo/sigma-bank/api/get-property-document", {
                params: {
                    title: title,
                },
            })
            .then((response) => {
                if (response.data.status === 200) {
                    setBool(false)
                    return setDocument(response.data.properties);
                } else {
                    console.log(response.data.message);
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }

    });

    const add_property_document = () =>{
        let property = localStorage.getItem("getProperty")
        const formData = new FormData()
        formData.append("property_id", property);
        formData.append("img_path", imgpath);
        formData.append("user_id", userData.id);
        let result = axios.post("https://demo-designprojects.com/demo/sigma-bank/api/add-propety-document", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then((response) => {
            if (response.data.status === 200) {
                history('/property');
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const handleFileSelect = (event) => {
        setImgpath(event.target.files[0])
    }

  return (
    <>
      <main className="main-sectionWrapper">
        <div id="main-section" className="primary-scroll">
          <Header />
            <div className="page-header">
                <div className="page-header__title">
                    <Link to="/property"><i className='bx bx-chevron-left'></i></Link>
                    Property
                </div>
            </div>

            <div className='property'>
                <div className="container">
                    <div className="property-require">
                        <div className="property-require__title">Upload images or 3d Video</div>
                        <ul>
                            <li> <i className='bx bx-check'></i>Ads with picture get 5x more views & leads</li>
                            <li> <i className='bx bx-check'></i>Upload good quality pictures with properListing</li>
                            <li> <i className='bx bx-check'></i>Cover all areas of your property</li>
                        </ul>
                        <ul>
                            {document.map((item, index) => (
                                <li key={index}> <i className='bx bx-check'></i><a href={'http://127.0.0.1:8000/'+item.img_path} target="_blank">File</a></li>
                            ))}
                        </ul>
                        <form action="#">
                            <div className="property-upload">
                                <label for="gallery" className="themeBtn">
                                    <i className='bx bxs-image'></i>From Gallery
                                    <input type="file" id="gallery" onChange={handleFileSelect} />
                                </label>
                                <label for="camera" className="themeBtn themeBtn--outline">
                                    <i className='bx bxs-camera'></i>From Camera
                                    <input type="file" id="camera" onChange={handleFileSelect} />
                                </label>
                            </div>
                            <div className="property-upload">
                                <Link to="/submit-property-documents" className="themeBtn">
                                    <i className='bx bx-file'></i>Submit Documents
                                </Link>
                            </div>
                            <a onClick={add_property_document} className="themeBtn themeBtn--full">Publish</a>
                            {/* <Link to="/property" className="themeBtn themeBtn--full">Publish</Link> */}
                        </form>

                    </div>
                </div>
            </div>
        </div>
      </main>
    </>
  );
}
export default PropertyDocument;
