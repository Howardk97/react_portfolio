import React, { useState, useEffect } from 'react'
import moonImage from "../public/moon-solid.svg"
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
        fontFamily: "'Bebas Neue', cursive"
    }

    const navbarContainer = {
        // backgroundColor: "#312e81"
        width: "100%",
        // height: "8%"
    }

    const name = {
        fontFamily: "'Rubik Dirt', cursive",
        fontSize: "30px",
        color: "white"
    }

    // Conditions based on screen size
    let navbarComp;
        if(width < 300) {
            navbarComp = (
                <nav className="flex items-center navbar navbar-expand-lg bg-indigo-900 sticky-top"
                    style={navbarContainer}>
                    <button className="bg-indigo-500 mx-3 navbar-toggler hover:bg-indigo-400 focus:bg-indigo-600" 
                        type="button" 
                        data-bs-toggle="offcanvas" 
                        data-bs-target="#offcanvasNavbar" 
                        aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start" 
                        id="offcanvasNavbar">
                      <div className="offcanvas-body bg-indigo-200">
                        <ul style={navLinks} 
                            className="navbar-nav justify-content-end flex-grow-1 pe-3">
                          <li className="nav-item">
                              <a className="nav-link active text-red-200" 
                                href="/about">
                                  About Me
                              </a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" 
                                href="/portfolio">
                                Portfolio
                              </a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" 
                                href="/contact">
                                Contact
                              </a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link active" 
                                href="/resume">
                                Resume
                              </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                </nav>
        )} else if(width < 1000) {
            navbarComp = (
            <nav className="flex items-center navbar navbar-expand-lg bg-indigo-900 sticky-top"
            style={navbarContainer}>
                <h1 style={name} 
                    className="navbar-brand mx-3">
                    Kimberly Howard
                </h1>
                <button className="bg-indigo-500 mx-3 navbar-toggler hover:bg-indigo-400 focus:bg-indigo-600" 
                    type="button" 
                    data-bs-toggle="offcanvas" 
                    data-bs-target="#offcanvasNavbar" 
                    aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" 
                    id="offcanvasNavbar">
                  <div className="offcanvas-body bg-indigo-200">
                    <ul style={navLinks} 
                        className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item">
                          <a className="nav-link active text-red-200" 
                            href="/about">
                              About Me
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link active" 
                            href="/portfolio">
                            Portfolio
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link active" 
                            href="/contact">
                            Contact
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link active" 
                            href="/resume">
                            Resume
                          </a>
                      </li>
                    </ul>
                  </div>
                </div>
            </nav>
            )} else {
                navbarComp = (
                    <nav style={navbarContainer} className="flex bg-indigo-900 nav fixed-top">
                        <div style={name} className='flex self-center m-3'>
                            <img src={moonImage} 
                                alt="moon"
                                className='w-10 h-10 mx-2'/>
                            <h1 className='mx-2'>Kimberly Howard</h1>

                        </div>
                        <ul className="flex" style={navLinks}>
                            <li className="hover:bg-indigo-400">
                                <a className='hover:bg-indigo-400'
                                href="/about">About Me</a>
                            </li>
                            <li className="">
                                <a className='hover:bg-indigo-400'
                                href="/portfolio">Portfolio</a>
                            </li>
                            <li className="">
                                <a className='hover:bg-indigo-400'
                                href="/contact">Contact</a>
                            </li>
                            <li className="">
                                <a className='hover:bg-indigo-400'
                                href="/resume">Resume</a>
                            </li>
                        </ul>
                    </nav>
                )}
                return <div>{navbarComp}</div>
}

// Export navigation links
export default Navigation;