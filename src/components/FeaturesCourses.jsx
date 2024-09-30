import React from 'react'
import "./FeaturesCourses.css"

const FeaturesCourses = () => {
  return (
   <>
      <section className="featured-courses vertical-column courses-wrap  sectionFeatures">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header className="heading">
              <h2 className="entry-title">Featured Courses</h2>
              <nav className="courses-menu">
                <ul>
                  <li className="active"><a href="#">All</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">Photography</a></li>
                </ul>
              </nav>
            </header>
          </div>

          {/* Course 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="course-content">
              <figure className="course-thumbnail">
                <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/1.jpg.webp" alt="Course Image" /></a>
              </figure>
              <div className="course-content-wrap">
                <header className="entry-header">
                  <h2 className="entry-title"><a href="#">The Complete Android Developer Course</a></h2>
                  <div className="entry-meta">
                    <div className="course-author"><a href="#">Ms. Lara Croft</a></div>
                    <div className="course-date">July 21, 2018</div>
                  </div>
                </header>
                <footer className="entry-footer">
                  <div className="course-cost">
                    $45 <span className="price-drop">$68</span>
                  </div>
                  <div className="course-ratings">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                    <span className="course-ratings-count">(4 votes)</span>
                  </div>
                </footer>
              </div>
            </div>
          </div>

          {/* Course 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="course-content">
              <figure className="course-thumbnail">
                <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/2.jpg.webp" alt="Course Image" /></a>
              </figure>
              <div className="course-content-wrap">
                <header className="entry-header">
                  <h2 className="entry-title"><a href="#">The Ultimate Drawing Course Beginner to Advanced</a></h2>
                  <div className="entry-meta">
                    <div className="course-author"><a href="#">Michelle Golden</a></div>
                    <div className="course-date">Mar 14, 2018</div>
                  </div>
                </header>
                <footer className="entry-footer">
                  <div className="course-cost">
                    <span className="free-cost">Free</span>
                  </div>
                  <div className="course-ratings">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                    <span className="course-ratings-count">(4 votes)</span>
                  </div>
                </footer>
              </div>
            </div>
          </div>



          {/* Course 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="course-content">
              <figure className="course-thumbnail">
                <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/3.jpg.webp" alt="Course Image" /></a>
              </figure>
              <div className="course-content-wrap">
                <header className="entry-header">
                  <h2 className="entry-title"><a href="#">The Complete Digital Marketing Course</a></h2>
                  <div className="entry-meta">
                    <div className="course-author"><a href="#">Ms. Lucius</a></div>
                    <div className="course-date">Dec 18, 2018</div>
                  </div>
                </header>
                <footer className="entry-footer">
                  <div className="course-cost">
                    $55 <span className="price-drop">$78</span>
                  </div>
                  <div className="course-ratings">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                    <span className="course-ratings-count">(4 votes)</span>
                  </div>
                </footer>
              </div>
            </div>
          </div>


      {/* Course 4 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="course-content">
              <figure className="course-thumbnail">
                <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/4.jpg.webp" alt="Course Image" /></a>
              </figure>
              <div className="course-content-wrap">
                <header className="entry-header">
                  <h2 className="entry-title"><a href="#">The Complete Digital Marketing Course</a></h2>
                  <div className="entry-meta">
                    <div className="course-author"><a href="#">Ms. Lucius</a></div>
                    <div className="course-date">Dec 18, 2018</div>
                  </div>
                </header>
                <footer className="entry-footer">
                  <div className="course-cost">
                    $55 <span className="price-drop">$78</span>
                  </div>
                  <div className="course-ratings">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                    <span className="course-ratings-count">(4 votes)</span>
                  </div>
                </footer>
              </div>
            </div>
          </div>


{/* Course 5 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="course-content">
              <figure className="course-thumbnail">
                <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/5.jpg.webp" alt="Course Image" /></a>
              </figure>
              <div className="course-content-wrap">
                <header className="entry-header">
                  <h2 className="entry-title"><a href="#">The Complete Digital Marketing Course</a></h2>
                  <div className="entry-meta">
                    <div className="course-author"><a href="#">Ms. Lucius</a></div>
                    <div className="course-date">Dec 18, 2018</div>
                  </div>
                </header>
                <footer className="entry-footer">
                  <div className="course-cost">
                    $55 <span className="price-drop">$78</span>
                  </div>
                  <div className="course-ratings">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                    <span className="course-ratings-count">(4 votes)</span>
                  </div>
                </footer>
              </div>
            </div>
          </div>


{/* Course 6 */}

          <div className="col-12 col-md-6 col-lg-4">
            <div className="course-content">
              <figure className="course-thumbnail">
                <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/6.jpg.webp" alt="Course Image" /></a>
              </figure>
              <div className="course-content-wrap">
                <header className="entry-header">
                  <h2 className="entry-title"><a href="#">The Complete Digital Marketing Course</a></h2>
                  <div className="entry-meta">
                    <div className="course-author"><a href="#">Ms. Lucius</a></div>
                    <div className="course-date">Dec 18, 2018</div>
                  </div>
                </header>
                <footer className="entry-footer">
                  <div className="course-cost">
                    $55 <span className="price-drop">$78</span>
                  </div>
                  <div className="course-ratings">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star-o"></span>
                    <span className="course-ratings-count">(4 votes)</span>
                  </div>
                </footer>
              </div>
            </div>
          </div>  
        </div>
      </div>
      <div class="col-12">
                <a className="btn" href="#">view all courses</a>
            </div>
    </section>
   </>
  )
}

export default FeaturesCourses;