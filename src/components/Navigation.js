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

    const navbarContainer = {
        // width: "100%",
        backgroundColor: "#312e81"
    }

    const name = {
        fontFamily: "'Rubik Dirt', cursive",
        fontSize: "20px",
        color: "white"
    }

    // Conditions based on screen size
    let navbarComp;
        if(width < 1000) {
            navbarComp = (
            // <div>
            //     <div className="" id="navbarToggleExternalContent">
            //         <div className="p-4">
            //             <nav
            //             className="bg-indigo-900 navbar fixed-top">
            //             <div className="container-fluid">
            //                 <button
            //                 className="navbar-toggler hover:bg-green-300 bg-green-400 focus:bg-green-500"
            //                 type="button"
            //                 data-bs-toggle="offcanvas"
            //                 data-bs-target="#offcanvasNavbar"
            //                 aria-controls="offcanvasNavbar"
            //                 >
            //                 <span className="navbar-toggler-icon"></span>
            //                 </button>
            //                 <div className="offcanvas offcanvas-start" id="offcanvasNavbar">
            //                 <div className="offcanvas-body bg-zinc-200">
            //                     <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-zinc-800">
            //                     <li className="">
            //                             <a href="/about">About Me</a>
            //                         </li>
            //                         <li className="">
            //                             <a href="/portfolio">Portfolio</a>
            //                         </li>
            //                         <li className="">
            //                             <a href="/contact">Contact</a>
            //                         </li>
            //                         <li className="">
            //                             <a href="/resume">Resume</a>
            //                         </li>
            //                     </ul>
            //                 </div>
            //                 </div>
            //             </div>
            //             </nav>
            //         </div>
            //     </div>
            // </div>
            <nav className="flex items-center navbar navbar-expand-lg bg-indigo-900 sticky-top">
                <h1 style={name} className="navbar-brand mx-3" href="#">Kimberly Howard</h1>
                <button className="bg-indigo-500 mx-3 navbar-toggler hover:bg-indigo-400 focus:bg-indigo-600" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div 
                className="offcanvas offcanvas-end nav bg-indigo-200" 
                tabindex="-1" 
                id="offcanvasNavbar" 
                aria-labelledby="offcanvasNavbar">
                    <li className='row nav'>
                        <a href="/about">About Me</a>
                    </li>
                    <li>
                        <a href="/portfolio">Portfolio</a>
                        <a href="/contact">Contact</a>
                        <a href="/resume">Resume</a>
                    </li>
                </div> */}
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar">
                  <div className="offcanvas-body bg-indigo-200">
                    <ul style={navLinks} className="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li className="nav-item">
                          <a className="nav-link active text-red-200" href="/about">
                              About Me
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link active" href="/portfolio">
                            Portfolio
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link active" href="/contact">
                            Contact
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link active" href="/resume">
                            Resume
                          </a>
                        
                      </li>
                    </ul>
                  </div>
                </div>
            </nav>
                                )
                            } else {
                                navbarComp = (
                            <nav style={navbarContainer} className="flex bg-indigo-900 nav">
                            {/* <a href="/" className="site-title"></a> */}
                                <h1 style={name} className='self-center m-3'>Kimberly Howard</h1>
                                <ul className="flex" style={navLinks}>
                                    <li className="flex items-end">
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