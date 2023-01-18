import {Link, useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../Include/Header";

function SubmitPropertyDocuments() {
    const [imgpath1, setImgpath1] = React.useState('');
    const [imgpath2, setImgpath2] = React.useState('');
    const [imgpath3, setImgpath3] = React.useState('');
    const [imgpath4, setImgpath4] = React.useState('');
    const [document, setDocument] = React.useState([]);
    const history = useNavigate();
    const [userData, setUserData] = React.useState(JSON.parse(localStorage.getItem("userData")));

    const add_property_document = () =>{
        let property = localStorage.getItem("getProperty")
        const formData = new FormData()
        formData.append("property_id", property);
        formData.append("user_id", userData.id);
        formData.append("file_type", 2);
        
        formData.append("img_path1", imgpath1);
        formData.append("img_path2", imgpath2);
        formData.append("img_path3", imgpath3);
        formData.append("img_path4", imgpath4);
        
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

    const handleFileSelect1 = (event) => {
        setImgpath1(event.target.files[0])
        // setImgpath(imgpath => [...imgpath, event.target.files[0]])
    }

    const handleFileSelect2 = (event) => {
        setImgpath2(event.target.files[0])
    }

    const handleFileSelect3 = (event) => {
        setImgpath3(event.target.files[0])
    }

    const handleFileSelect4 = (event) => {
        setImgpath4(event.target.files[0])
    }

    return (
        <>
            <main className="main-sectionWrapper">
                <div id="main-section" className="primary-scroll">
                <Header />

                    <img src='http://demo-designprojects.com/html/sigma-bank/images/bottom-bg-img-4.png' alt='image' className='imgFluid bottom-bg' loading='lazy' />

                    <div className="page-header">
                        <div className="page-header__title">
                            <Link to="/property-document"><i className='bx bx-chevron-left'></i></Link>Submit property Documents
                        </div>
                    </div>

                    <div className='property'>
                        <div className='container'>
                            <form action="#">
                                <ul className="property-documents">
                                    <li className="property-documents__single">
                                        <div className="title">Real Estate Purchase Agreement</div>
                                        <div className="document-upload">
                                            <div className="document-upload___title"><i className='bx bxs-file-plus'></i>
                                                <span>
                                                    Attach Documents
                                                </span>
                                            </div>
                                            <label className="themeBtn" for="doc1">
                                                <input type="file" id="doc1" className="upload" onChange={handleFileSelect1} />upload</label>
                                        </div>
                                    </li>
                                    <li className="property-documents__single">
                                        <div className="title">Property Appraisal</div>
                                        <div className="document-upload">
                                            <div className="document-upload___title"><i className='bx bxs-file-plus'></i>
                                                <span>
                                                    Attach Documents
                                                </span>
                                            </div>
                                            <label className="themeBtn" for="doc2">
                                                <input type="file" id="doc2" className="upload" onChange={handleFileSelect2} />upload</label>
                                        </div>
                                    </li>
                                    <li className="property-documents__single">
                                        <div className="title">Preliminary Title Report</div>
                                        <div className="document-upload">
                                            <div className="document-upload___title"><i className='bx bxs-file-plus'></i>
                                                <span>
                                                    Attach Documents
                                                </span>
                                            </div>
                                            <label className="themeBtn" for="doc3">
                                                <input type="file" id="doc3" className="upload" onChange={handleFileSelect3} />upload</label>
                                        </div>
                                    </li>
                                    <li className="property-documents__single">
                                        <div className="title">Pest Inspection and Clearance (If VA loan)</div>
                                        <div className="document-upload">
                                            <div className="document-upload___title upload"><i className='bx bxs-file-plus'></i>
                                                <span>
                                                    Attach Documents
                                                </span>
                                            </div>
                                            <label className="themeBtn" for="doc4">
                                                <input type="file" id="doc4" className="upload" onChange={handleFileSelect4} />upload</label>
                                        </div>
                                    </li>
                                    <li className="property-documents__single mt-2">
                                        <a onClick={add_property_document} className="themeBtn themeBtn--full">Submit</a>
                                        {/* <Link to="/property-document" className="themeBtn themeBtn--full">Submit</Link> */}
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default SubmitPropertyDocuments;