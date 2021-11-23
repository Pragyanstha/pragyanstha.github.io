import React from 'react'

import ProfilePic from "../images/profile_pic.jpg"
import Navbar from '../components/Navbar';

// markup
const IndexPage = () => {
  return (
<div className="wrapper">
  <Navbar />
    <div className="landing">
        <div className="landing_introduction">
            <h2>
            <bold>Hi</bold>, I am
            </h2>
            <h1>Pragyan <br />Shrestha</h1>
            <p>
            I am a graduate student at University of Tsukuba. 
            My research interests are in medical imaging and computer vision.
            Thanks for visiting!
            </p>
        </div>

        <div className="landing_profile">
            <img className="landing_profile-pic" src={ProfilePic}></img>
        </div>
    </div>
</div>
  )
}

export default IndexPage
