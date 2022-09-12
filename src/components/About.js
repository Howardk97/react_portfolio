import React, { useState, useEffect } from 'react'
import { shouldInclude } from "@apollo/client/utilities"
import headshot from "../public/headshot.jpg"
import stars from "../public/stars.jpg"

export default function About () {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        window.addEventListener("resize", updateWidth)
    });

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

     // Stylings for body
    const headshotContainer = {
        borderRadius: "75%",
        // width: "50px"
    }
    const aboutMe = {
        color: "white",
        fontWeight: "bold",
        marginTop: "7rem",
        fontFamily: "'Bebas Neue', cursive",
        fontSize: "50px"
    }
    const bio = {
        color: "white",
        padding: "2rem",
        fontFamily: "'Saira Condensed', sans-serif",
        borderRadius: "10%"
    }

    const bioContainer = {
        // margin: "2rem"
        // borderRadius: "25%"
    }

    const bioContainerBig = {
        // marginTop: "10rem"
    }
    const imageContainer = {
        // display: "flex",
        // justifyContent: "center"
    }

    const mainPage = {
        backgroundImage: `url(${stars})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "length|percentage|auto|initial|inherit",
        minHeight: "50rem",
        // minHeight: "100%"
        // height: "auto"
    }

    const picBio = {
        marginLeft: "2rem",
        marginRight: "2rem"
    }

    let aboutComp;
    if(width < 1000) {
        aboutComp = (
            <div style={mainPage}
                className="flex justify-center items-center row h-200 relative">
                <h1 className='text-white col-12 center mt-10'
                    style={aboutMe}>About Me</h1>
                <img className='col-12 w-50 h-70' 
                        style={headshotContainer} 
                        src={headshot} 
                        alt="Kimberly's Headshot" />
                <div style={bioContainer}
                    className="w-75 m-5 col-12">
                    <p style={bio}
                        className="bg-indigo-900">Hello and welcome to my portfolio! 
                    I am a detailed-oriented mathematician with a background 
                    in education and statistics. Due to my strong passion for web-development, 
                    I am currently searching for open full-stack developer positions. 
                    <br/>
                    <br/>
                    In May 2020, I graduated from Kennesaw State University with a bachelor's degree in Computational 
                    and Applied Mathematics where I studied in-depth logical problems. At the university, I was also a Supplemental 
                    Instruction Leader and worked in statistical research. The educational experience I gained through being a 
                    supplemental instruction leader lead me to teaching middle school math for two years after college. 
                    <br/>
                    <br/>
                    This past summer, I studied web development in the Georgia Tech Coding Bootcamp.
                    This bootcamp exposed me to both front-end and back-end development and allowed me 
                    to create projects that connected the two. You can see my completed projects under my portfolio section.
                    <br/>
                    <br/>
                    Feel free to send me a message by navigating to my contact section. Looking forward to connecting with you!
                    </p>
                </div>
            </div>
        )
    } else {
        aboutComp = (
            <div style={mainPage}
                className="flex row">
                <h1 
                    className="card-title center" 
                    style={aboutMe}>
                    About me
                </h1>
                <div 
                // className='flex-row'
            className="flex justify-center"
            // className="col s12 m7 background flex-row" 
            // style={mainPage}
            style={picBio}
            >
            <div 
                // className="m-5"
                // className="row center" 
                style={imageContainer}>
                {/* <h1 
                    className="card-title" 
                    style={aboutMe}>
                    About me
                </h1> */}
                <div className="card-image" 
                    style={imageContainer}>
                    <img style={headshotContainer} 
                        src={headshot} 
                        alt="Kimberly's Headshot"
                        className='mr-5' />
                </div>
            </div>
            
                <div style={bioContainerBig}
                    className="w-75 ml-5">
                    <p style={bio}
                        className="bg-indigo-900">Hello and welcome to my portfolio! 
                    I am a detailed-oriented mathematician with a background 
                    in education and statistics. Due to my strong passion for web-development, 
                    I am currently searching for open full-stack developer positions. 
                    <br/>
                    <br/>
                    In May 2020, I graduated from Kennesaw State University with a bachelor's degree in Computational 
                    and Applied Mathematics where I studied in-depth logical problems. At the university, I was also a Supplemental 
                    Instruction Leader and worked in statistical research. The educational experience I gained through being a 
                    supplemental instruction leader lead me to teaching middle school math for two years after college. 
                    <br/>
                    <br/>
                    This past summer, I studied web development in the Georgia Tech Coding Bootcamp.
                    This bootcamp exposed me to both front-end and back-end development and allowed me 
                    to create projects that connected the two. You can see my completed projects under my portfolio section.
                    <br/>
                    <br/>
                    Feel free to send me a message by navigating to my contact section. Looking forward to connecting with you!
                    </p>
                </div>
        </div>
            </div>
        )
    }

    return <div>{aboutComp}</div>
}