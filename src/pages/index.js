import React from 'react'

import ProfilePic from "../images/profile_pic.jpg"
import Navbar from '../components/navbar';

// markup
const Home = () => {
  return (
<div className="wrapper home">
  <Navbar />
    <div className="home__section">
        <div className="home__section--introduction">
            <h2>
            <b>Hi</b>, I am
            </h2>
            <h1>Pragyan <br />Shrestha</h1>
            <p>
            I am a graduate student at University of Tsukuba. 
            My research interests are in medical imaging and computer vision.
            Thanks for visiting!
            </p>
        </div>

        <div className="home__section--profile">
            <img className="home__section--profile-pic" src={ProfilePic}></img>
        </div>
    </div>
</div>
  )
}

export default Home
