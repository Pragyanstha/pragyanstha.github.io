import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import ProfilePic from "../images/profile_pic.jpg"
import IconPic from "../images/icon.svg"
const landing = () => {
    
    return (
        <div className="wrapper">
            <nav>
                <ul>
                    <li><img className="icon" src={IconPic}></img></li>
                    <li>Tech Blog</li>
                    <li>Publications</li>
                    <li>About</li>
                    <li className="sns"><FontAwesomeIcon className="linkedin" icon={faLinkedinIn} /></li>
                    <li className="sns"><FontAwesomeIcon className="github" icon={faGithub} /></li>
                </ul>
    
            </nav>
            <div className="banner">
                <div className="banner_introduction">
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

                <div className="banner_profile">
                    <img className="banner_profile-pic" src={ProfilePic}></img>
                </div>
            </div>


            
        </div>
    )
}


export default landing