import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import MiniHome from './Components/MiniHome'
import Courses from './Components/Courses'
import About from './Components/About'
import FeaturesCourses from './Components/FeaturesCourses'
import Events from './Components/Events'
import Footer from './components/Footer'
// import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/> 
      <MiniHome/>
      <Courses/>
      <About/>
      <FeaturesCourses/>
      <Events/>
      <Footer/>
    </div>
  )
}

export default App