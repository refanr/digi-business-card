import React from "react";
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import github from "../images/github.png"

export default function Footer() {
    return (
        <footer>
            <a href="http://twitter.com"><img src={twitter} alt="Twitter logo" /></a>
            <a href="http://facebook.com"><img src={facebook} alt="Facebook logo" /></a>
            <a href="http://instagram.com"><img src={instagram} alt="Instagram logo" /></a>
            <a href="http://github.com"><img src={github} alt="GitHub logo" /></a>
        </footer>
    )
}