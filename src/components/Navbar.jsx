import React from 'react';
import "./Navbar.css"
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  return (
    <>
    








<div class="hero-content">
  <header class="site-header">
    <div class="top-header-bar">
      <div class="container">
        <div class="header-row">
          <div class="header-left">
            <div class="header-bar-email">
              <i class="fa fa-envelope"></i>
              <a href="idahsanali@gmail.com">tuanna.design@gmail.com</a>
            </div>
            <div class="header-bar-phone">
              <i class="fa fa-phone"></i>
              <p>001-1234-88888</p>
            </div>
          </div>
          <div class="header-right">
            <div class="header-bar-search">
              <form>
                <input type="search" placeholder="What would you like to learn?" />
                <button type="submit">
                  <i class="fa fa-search"><CiSearch /></i>
                </button>
              </form>
            </div>
            <div class="header-bar-menu">
              <ul>
                <li><a href="#">Register</a></li>
                <li><a href="#">Login</a></li>
                
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div class="nav-bar">
      <div class="container">
        <div class="nav-row">
          <div class="site-branding">
            <h1 class="site-title">
              <a href="index.html" rel="home">Ezu<span>ca</span></a>
            </h1>
          </div>
          <nav class="site-navigation">
            <ul>
              <li class="current-menu-item"><a href="index.html">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><i class="fa fa-search"></i></li>
            </ul>
          </nav>
        </div>
      </div>
    </div> */}
  </header>
</div>




    </>
  );
}

export default Navbar;