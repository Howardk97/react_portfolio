import React, { useState, useEffect } from 'react'
// Function that renders navigation links
function Navigation() {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        window.addEventListener("resize", updateWidth)
    });

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    // Stylings
    const navLinks = {
        // fontWeight: "bold"
        fontFamily: "'Bebas Neue', cursive"
    }
    const navbar = {
        backgroundColor: "#250560"
    }

    // Conditions based on screen size
    let navbarComp;
        if(width < 1000) {
            navbarComp = (
            <div>
                <div className="" id="navbarToggleExternalContent">
                    <div className="p-4">
                        <nav style={navbar}
                        className="navbar fixed-top">
                        <div className="container-fluid">
                            <button
                            className="navbar-toggler hover:bg-green-300 bg-green-400 focus:bg-green-500"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                            >
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-start" id="offcanvasNavbar">
                            <div className="offcanvas-body bg-zinc-200">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-zinc-800">
                                <li className="">
                                        <a href="/about">About Me</a>
                                    </li>
                                    <li className="">
                                        <a href="/portfolio">Portfolio</a>
                                    </li>
                                    <li className="">
                                        <a href="/contact">Contact</a>
                                    </li>
                                    <li className="">
                                        <a href="/resume">Resume</a>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </nav>
                    </div>
                </div>
            </div>
                                )
                            } else {
                                navbarComp = (
                                    <nav style={navbar} className="nav">
                            {/* <a href="/" className="site-title"></a> */}
                                <ul className="left hide-on-med-and-down" style={navLinks}>
                                    {/* set className to "active" to change color */}
                                    <li className="">
                                        <a href="/about">About Me</a>
                                    </li>
                                    <li className="">
                                        <a href="/portfolio">Portfolio</a>
                                    </li>
                                    <li className="">
                                        <a href="/contact">Contact</a>
                                    </li>
                                    <li className="">
                                        <a href="/resume">Resume</a>
                                    </li>
                                </ul>
                        </nav>
                                )
                            }
                        

                        
                        return <div>{navbarComp}</div>
}

// Export navigation links
export default Navigation;