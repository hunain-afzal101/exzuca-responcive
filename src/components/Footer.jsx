import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
   <>
   <div className="clients-logo">
  <div className="container">
    <div className="row">
      <div className="col-12 flex-container">
        <div className="logo-wrap">
          <img src="https://preview.colorlib.com/theme/ezuca/images/logo-1.png.webp" alt="Logo 1" />
        </div>
        <div className="logo-wrap">
          <img src="https://preview.colorlib.com/theme/ezuca/images/logo-2.png.webp" alt="Logo 2" />
        </div>
        <div className="logo-wrap">
          <img src="https://preview.colorlib.com/theme/ezuca/images/logo-3.png.webp" alt="Logo 3" />
        </div>
        <div className="logo-wrap">
          <img src="https://preview.colorlib.com/theme/ezuca/images/logo-4.png.webp" alt="Logo 4" />
        </div>
        <div className="logo-wrap">
          <img src="https://preview.colorlib.com/theme/ezuca/images/logo-5.png.webp" alt="Logo 5" />
        </div>
      </div>
    </div>
  </div>
</div>

<footer className="site-footer">
  <div className="footer-widgets">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="foot-about">
            <a className="foot-logo" href="#">
              <img src="https://preview.colorlib.com/theme/ezuca/images/foot-logo.png.webp" alt="Footer Logo" />
            </a>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum.</p>
            <p className="footer-copyright">
              Copyright &copy; <span id="year">{new Date().getFullYear()}</span> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-5">
          <div className="foot-contact">
            <h2>Contact Us</h2>
            <ul>
              <li>Email: <br /><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="cda4a3aba2e3a9a8a8bfb9aebfa8acb9a4bba88daaa0aca4a1e3aea2a0">hunainafzal50@gmail.com</a></li>
              <li>Phone: (+88) 111 555 666</li>
              <li>Address: 40 Baria Street <br /><br /> 133/2 New York City, US</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-5">
          <div className="quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact Us</a></li><br /><br />
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Forums</a></li>
              <li><a href="#">Language Packs</a></li>
              <li><a href="#">Release Status</a></li>
            </ul>
            <FaFacebook className='facebook'/>
            <FaGooglePlusG className='google' />
            <IoLogoInstagram className='instagram' />
            <FaTwitter className='twitter'/>
          </div>
      

        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-5">
          <div className="follow-us">
            <h2>Follow Us</h2>
            <ul className="follow-us-list">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>   
              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bar">
    <div className="container">
      <div className="row flex-wrap">
        <div className="col-12 col-lg-6">
          <div className="download-apps">
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/app-store.png.webp" alt="App Store" /></a>
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/play-store.png.webp" alt="Play Store" /></a>
          </div>
        </div>
        <div className="col-12 col-lg-6 mt-4">
          <div className="footer-bar-nav">
            <ul>
              <li><a href="#">DPA</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

   </>
  )
}

export default Footer