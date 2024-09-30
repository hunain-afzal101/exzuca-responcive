import React from 'react'
import { AiFillCalendar } from "react-icons/ai";
import "./Home.css"


const Home = () => {
  return (
    <>
<div className='img'>
<div class="header-bar-cart">
  
  <a href="#" class="cart-link">
    <span aria-hidden="true" class="icon_bag_alt"></span>
  </a>
</div>

<div class="hero-content-overlay">
<div class="nav-bar">
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
              <li className='iconclender'><i  class="fa fa-search" > <AiFillCalendar /></i></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  <div class="container">

    
    <div class="row">
      
      <div class="col-12">
        <div class="hero-content-wrap">
          <header class="entry-header">

     
            <h4 className='heading4'>Get started with online courses</h4>
            <h1>
            BEST ONLINE<br />LEARNING SYSTEM
            </h1>
          </header>
          <div class="entry-content">
            <p className='para'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
<button className='btn'>Read More</button>
</div>
</div>



    </>
  )
}

export default Home