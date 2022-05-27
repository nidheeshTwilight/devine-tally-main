import React from 'react'
import Navbar from './navbar'
import BGIMG from '../images/bg pixc.jpg'
import Main from './main'
import Footer from './footer'


function Home() {
  return (
    <div>
      <Navbar />
      <img style={{ width: "100%" }} src={BGIMG} />
      <Main />
      <Footer/>
    </div>
  )
}

export default Home