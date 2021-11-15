import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";


const landing = () => {
    
    return (
        <div className="wrapper">
            <nav>
                <ul>
                    <li>LOGO</li>
                    <li>Tech Blog</li>
                    <li>Publications</li>
                    <li>About</li>
                    <li className="sns"><FontAwesomeIcon icon={faLinkedinIn} /></li>
                    <li className="sns"><FontAwesomeIcon icon={faInstagram} /></li>
                </ul>
    
            </nav>
            <div className="banner">
                <div className="banner_introduction">
                    <h1>Pragyan <br />Shrestha</h1>
                    <p>
                    Hi, I am a graduate student at University of Tsukuba. 
                    My research interests are in medical imaging and computer vision.
                    Thanks for visiting!
                    </p>
                </div>
            </div>
        </div>
    )
}


export default landing