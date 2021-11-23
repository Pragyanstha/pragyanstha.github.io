import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import IconPic from "../images/icon.svg"
import { Link } from "gatsby"

export default function Navbar() {
    return (
    <nav>
        <ul>
            <li><Link to="/"><img className="icon" src={IconPic}></img></Link></li>
            <li><Link to="/blog">Tech Blog</Link></li>
            <li><Link to="/publications">Publications</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className="sns"><a href="https://www.linkedin.com/in/pragyan-shrestha-143762170/"><FontAwesomeIcon className="linkedin" icon={faLinkedinIn} /></a></li>
            <li className="sns"><a href="https://github.com/Pragyanstha"><FontAwesomeIcon className="github" icon={faGithub} /></a></li>
        </ul>

    </nav>
    )
}

