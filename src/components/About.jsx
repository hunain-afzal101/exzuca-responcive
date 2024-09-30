import React from 'react'
import "./About.css"

const About = () => {
  return (
 <>
      <section class="about-section">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <header class="heading">
                    <h2 className="entry-title">About Ezuca</h2>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt <br /> in culpa qui officia deserunt mollit anim id <br /> est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                </header>
                <div class="entry-content ezuca-stats">
                    <div class="stats-wrap">
                        <div class="stats-count">
                            50<span>M+</span>
                            <p>STUDENTS LEARNING</p>
                        </div>
                        <div class="stats-count">
                            30<span>K+</span>
                            <p>ACTIVE COURSES</p>
                        </div>
                        <div class="stats-count">
                            340<span>M+</span>
                            <p>INSTRUCTORS ONLINE</p>
                        </div>
                        <div class="stats-count">
                            20<span>+</span>
                            <p>Country Reached</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-6">
                <div class="ezuca-video">
                    <div class="video-play-btn">
                        <img src="https://preview.colorlib.com/theme/ezuca/images/video-icon.png.webp" alt="Video Play"/>
                    </div>
                    <img src="https://preview.colorlib.com/theme/ezuca/images/video-screenshot.png.webp"  width={500}/>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="testimonial-section">
    <div class="swiper-container testimonial-slider">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <figure class="user-avatar">
                                <img src="https://preview.colorlib.com/theme/ezuca/images/user-1.jpg.webp" alt/>
                            </figure>
                        </div>
                        <div class="col-12 col-lg-6 content-wrap">
                            <div class="entry-content">
                                <p>Together as teachers, students and universities we can help make this education available for everyone.</p>
                            </div>
                            <div class="entry-footer">
                                <h3 class="testimonial-user">Russell Stephens - <span>University in UK</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <figure class="user-avatar">
                                <img src="https://preview.colorlib.com/theme/ezuca/images/user-2.jpg.webp" alt/>
                            </figure>
                        </div>
                        <div class="col-12 col-lg-6 content-wrap">
                            <div class="entry-content">
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div class="entry-footer">
                                <h3 class="testimonial-user">Robert Stephens - <span>University in Oxford</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <figure class="user-avatar">
                                <img src="https://preview.colorlib.com/theme/ezuca/images/user-3.jpg.webp" alt/>
                            </figure>
                        </div>
                        <div class="col-12 col-lg-6 content-wrap">
                            <div class="entry-content">
                                <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                            </div>
                            <div class="entry-footer">
                                <h3 class="testimonial-user">James Stephens - <span>University in Cambridge</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </div>
</section>

  </>

)
}

export default About