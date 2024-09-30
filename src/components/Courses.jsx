import React from 'react'
import "./Courses.css"
const Courses = () => {
  return (
    <>
    <section class="container-courses">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <header class="heading">
                    <h2 class="entry-title">Featured Courses</h2>
                    <a class="btn" href="#">view all</a>
                </header>
            </div>
<div className='multiplepic'>
            <div className='corsepic' >
                <div  className="pic1">
                    <figure >
                        <a href="#"><img src='https://preview.colorlib.com/theme/ezuca/images/1.jpg.webp' alt/></a>
                    </figure>
                    <div className='head'>
                        <header >
                            <div class="course-ratings">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star-o"></span>
                                <span class="course-ratings-count">(4 votes)</span>
                            </div>
                          
                            <h2 class="entry-title"><a href="#">The Complete Android Developer Course</a></h2>
                            <div class="entry-meta">
                                <div class="course-author"><a href="#">Ms. Lara Croft </a></div>
                                <div class="course-date">July 21, 2018</div>
                            </div>
                        </header>
                        <footer class="entry-footer">
                            <div class="course-cost">
                                <span class="free-cost">Free</span>
                            </div>
                            
                        </footer>
                       
                    </div>
                   
                </div>
            </div>

            <div class="corsepic2">
                <div class="pic2">
                    <figure class="course-thumbnail">
                        <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/2.jpg.webp" alt/></a>
                    </figure>
                    <div class="head2">
                        <header class="entry-header">
                            <div class="course-ratings">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star-o"></span>
                                <span class="course-ratings-count">(4 votes)</span>
                            </div>
                            <h2 class="entry-title"><a href="#">Learn Photoshop, Web Design & Profitable</a></h2>
                            <div class="entry-meta">
                                <div class="course-author"><a href="#">Mr. John Wick</a></div>
                                <div class="course-date">Aug 21, 2018</div>
                            </div>
                        </header>
                        <footer class="entry-footer">
                            <div class="course-cost">
                                $32 <span class="price-drop">$59</span>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default Courses