import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import IconPic from "../images/icon.svg"
import { Link } from "gatsby"

const Navbar = () => {

    const [isnavlinkActive, setLink] = useState(false);

    const toggleHam = (event) => {
        setLink(isnavlinkActive? false: true);
    }

    return (
    <nav className="navbar">
            <div className="navbar__logo"><Link to="/"><img className="navbar__logo-img" src={IconPic}></img></Link></div>
            <ul className={`navbar__links ${isnavlinkActive? "navbar__links--active" : ""}`}>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/publications">Publications</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://www.linkedin.com/in/pragyan-shrestha-143762170/"><FontAwesomeIcon className="linkedin" icon={faLinkedinIn} /></a></li>
                <li><a href="https://github.com/Pragyanstha"><FontAwesomeIcon className="github" icon={faGithub} /></a></li>
            </ul>
            <div className="navbar__hamburger" onClick={toggleHam}><FontAwesomeIcon className="navbar__hamburger-icon" icon={faBars}></FontAwesomeIcon></div>
    </nav>
    )
}

export default Navbar