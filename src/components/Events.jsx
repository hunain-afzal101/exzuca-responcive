import React from 'react'
import "./Events.css"
const Events = () => {
  return (
   <>
    <section className="latest-news-events">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header className="heading">
              <h2 className="entry-title">Latest News & Events</h2>
            </header>
          </div>
          <div className="col-12 col-lg-6">
            <div className="featured-event-content">
              <figure className="event-thumbnail">
                <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/event-1.jpg.webp" alt="Event 1" /></a>
                <div className="posted-date">
                  <div className="day">23</div>
                  <div className="month">mar</div>
                </div>
              </figure>
              <header className="entry-header">
                <h2 className="entry-title">
                  <a href="#">The Complete Financial Analyst Training & Investing Course</a>
                </h2>
                <div className="event-location">
                  <i className="fa fa-map-marker" /> 40 Baria Street 133/2 New York City, US
                </div>
                <div className="event-duration">
                  <i className="fa fa-calendar" /> 10 Dec - 12 Dec
                </div>
              </header>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="event-content">
              <figure className="event-thumbnail">
                <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/event-2.jpg.webp" alt="Event 2" /></a>
              </figure>
              <div className="event-content-wrap">
                <header className="entry-header">
                  <div className="posted-date">
                    <i className="fa fa-calendar" /> 22 Mar 2018
                  </div>
                  <h2 className="entry-title">
                    <a href="#">Personalized online learning experience</a>
                  </h2>
                  <div className="entry-meta">
                    <div className="post-author"><a href="#">Ms. Lara Croft</a></div>
                    <div className="post-comments">02 Comments</div>
                  </div>
                </header>
                <div className="entry-content">
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                </div>
              </div>
            </div>
            <div className="event-content">
              <figure className="event-thumbnail">
                <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/event-3.jpg.webp" alt="Event 3" /></a>
              </figure>
              <div className="event-content-wrap">
                <header className="entry-header">
                  <div className="posted-date">
                    <i className="fa fa-calendar" /> 22 Mar 2018
                  </div>
                  <h2 className="entry-title">
                    <a href="#">Which investment project should my company choose?</a>
                  </h2>
                  <div className="entry-meta">
                    <div className="post-author"><a href="#">Ms. Lara Croft</a></div>
                    <div className="post-comments">02 Comments</div>
                  </div>
                </header>
                <div className="entry-content">
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-gallery">
        <div className="gallery-wrap">
          <div className="gallery-grid gallery-grid1x1">
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/a.jpg.webp" alt="Gallery A" /></a>
          </div>
          <div className="gallery-grid gallery-grid1x1">
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/b.jpg.webp" alt="Gallery B" /></a>
          </div>
          <div className="gallery-grid gallery-grid2x2">
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/c.jpg.webp" alt="Gallery C" /></a>
          </div>
          <div className="gallery-grid gallery-grid1x1">
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/d.jpg.webp" alt="Gallery D" /></a>
          </div>
          <div className="gallery-grid gallery-grid1x1">
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/e.jpg.webp" alt="Gallery E" /></a>
          </div>
          <div className="gallery-grid gallery-grid2x1">
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/g.jpg.webp" alt="Gallery G" /></a>
          </div>
          <div className="gallery-grid gallery-grid2x1">
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/h.jpg.webp" alt="Gallery H" /></a>
          </div>
          <div className="gallery-grid gallery-grid1x1">
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/i.jpg.webp" alt="Gallery I" /></a>
          </div>
          <div className="gallery-grid gallery-grid2x2">
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/j.jpg.webp" alt="Gallery J" /></a>
          </div>
          <div className="gallery-grid gallery-grid1x1">
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/k.jpg.webp" alt="Gallery K" /></a>
          </div>
          <div className="gallery-grid gallery-grid1x1">
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/l.jpg.webp" alt="Gallery L" /></a>
          </div>
          <div className="gallery-grid gallery-grid2x1">
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/m.jpg.webp" alt="Gallery M" /></a>
          </div>
          <div className="gallery-grid gallery-grid3x1">
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/n.jpg.webp" alt="Gallery N" /></a>
          </div>
          <div className="gallery-grid gallery-grid1x1">
            <a href="#"><img src="https://preview.colorlib.com/theme/ezuca/images/o.jpg.webp" alt="Gallery O" /></a>
          </div>
        </div>
      </section>
    </section>
   </>
  )
}

export default Events