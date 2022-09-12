// import Router from "react-dom";
import React, {useState,useEffect} from 'react';
import githubLogo from "../public/github.png";
import linkedinLogo from "../public/linkedin.png";

function Footer() {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        window.addEventListener("resize", updateWidth)
    });

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    const imageContainer = {
        display: "flex",
        justifyContent: "center",
        // height: "length|percentage|auto|initial|inherit",
        margin: "0rem",
        width: "100%",
        height: "8%"
    }
    const logos = {
        width: "3rem",
        height: "3rem",
        margin: "1rem"
    }
    const footerContainer = {
        width: "100%",
        height: "8%"
    }
    let footerComp;
    if(width < 1000) {
        footerComp = (
            <div style={imageContainer}
                className="fixed-bottom bg-indigo-900">
                <a href="https://github.com/Howardk97">
                    <img src={githubLogo} alt="github logo" style={logos} />
                </a>
                <a href="https://www.linkedin.com/in/kimberly-howard-b27776b9/">
                    <img src={linkedinLogo} alt="linkedin logo" style={logos} />
                </a>
            </div>
        )
    } else {
        footerComp = (
        <div style={imageContainer}
            className="fixed-bottom bg-indigo-900">
            <a href="https://github.com/Howardk97">
                <img src={githubLogo} alt="github logo" style={logos} />
            </a>
            <a href="https://www.linkedin.com/in/kimberly-howard-b27776b9/">
                <img src={linkedinLogo} alt="linkedin logo" style={logos} />
            </a>
        </div>
        )
    }
    return <div>{footerComp}</div>
}

export default Footer;