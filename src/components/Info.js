import React from "react";
import me from "../images/reynir.png"
import mail from "../images/mail.png"
import linkedin from "../images/linkedin.png"

export default function Info() {
    return (
        <div className="info">
            <img src={me} alt="Pic of me" />
            <h1>Reynir Gunnarsson</h1>
            <h3>Frontend Developer</h3>
            <a href="http://refanr.github.io">refanr.github.io</a>
            <div className="contact--buttons">
                <div className="contact--email">
                    <img src={mail} alt="mail icon" />
                    Email
                </div>
                <div className="contact--linkedin">
                    <img src={linkedin} alt="LinkedIn logo" />
                    LinkedIn
                </div>
            </div>
        </div>
    )
}