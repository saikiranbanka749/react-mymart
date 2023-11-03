import React, { useState } from 'react';
import '../CSS/Footer.css';

const Footer = () => {
    const footerContentData = ["About", "Join sales", "Success stories", "About", "Press section"]
    return (
        <div>
            <div className='footer grid'>
                <span className='col-6' style={{ color: '#2e3192', fontWeight: "300px", fontSize: "19px" }}> We are here to help you!</span>
                <span style={{ textAlign: "right" }} className='col-3'> Follow us on :</span>
                <div style={{ paddingRight: "200px" }} className='col-3'>
                    <span className="social-container">
                        <div className="container">
                            <img src="assets/img/fb-logo-blue.jpg" alt="Facebook Blue" className="image" />
                            <div className="overlay">
                                <div className="text">
                                    <img src="assets/img/facebook-logo-black.png" alt="Facebook Black" className="image" />
                                </div>
                            </div>
                        </div>
                    </span>
                    <span className="social-container">
                        <div className="container1">
                            <img src="assets/img/blue-twitter-log.png" alt="Twitter Blue" className="image" />
                            <div className="overlay1">
                                <div className="text1">
                                    <img src="assets/img/white-twitter-logo.png" alt="Twitter White" className="image" />
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
            <span className='footer-content'>
                <ul>
                    <li style={{ listStyle: "none", color:"rgb(29, 28, 28)" }}>
                        {
                            footerContentData.map((items, i) => (
                                <div>
                                     <a className='footer-content-data-a' href='#' key={i}>{items}</a>
                                </div>
                            ))
                        }
                    </li>
                </ul>
            </span>
            <span className='footer-content'>
                <ul>
                    <li style={{ listStyle: "none", color:"rgb(29, 28, 28)" }}>
                        {
                            footerContentData.map((items, i) => (
                                <div>
                                     <a className='footer-content-data-a' href='#' key={i}>{items}</a>
                                </div>
                            ))
                        }
                    </li>
                </ul>
            </span>
            <span className='footer-content'>
                <ul>
                    <li style={{ listStyle: "none", color:"rgb(29, 28, 28)" }}>
                        {
                            footerContentData.map((items, i) => (
                                <div>
                                     <a className='footer-content-data-a' href='#' key={i}>{items}</a>
                                </div>
                            ))
                        }
                    </li>
                </ul>
            </span>
            <span className='footer-content'>
                <ul>
                    <li style={{ listStyle: "none", color:"rgb(29, 28, 28)" }}>
                        {
                            footerContentData.map((items, i) => (
                                <div>
                                     <a className='footer-content-data-a' href='#' key={i}>{items}</a>
                                </div>
                            ))
                        }
                    </li>
                </ul>
            </span>
            <div style={{ borderTop: "1px solid rgb(206, 195, 195)", borderBottom: "1px solid rgb(206, 195, 195)", paddingBottom:"7px"}}>
                <span style={{color: "#727272", display: "inline-block", paddingLeft:"160px"}}>
                    Copyright © 1996-2023 Mymart InterMESH Ltd. All rights reserved.
                </span>
                <span style={{ display: "inline-block"}}>
                    <a className='terms-p' href='#'>Terms and conditions</a>
                </span>
            </div>
        </div>
    );
};

export default Footer;
