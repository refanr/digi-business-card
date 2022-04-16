import React from "react";
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import github from "../images/github.png"

export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/Refanraudi"><img src={twitter} alt="Twitter logo" /></a>
            <a href="https://www.facebook.com/reynirg/"><img src={facebook} alt="Facebook logo" /></a>
            <a href="https://www.instagram.com/refanraudi/"><img src={instagram} alt="Instagram logo" /></a>
            <a href="https://github.com/refanr"><img src={github} alt="GitHub logo" /></a>
        </footer>
    )
}