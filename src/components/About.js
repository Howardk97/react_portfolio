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
        // marginLeft: "5rem",
        // marginRight: "5rem"
        // width: "50px"
        width: "200px",
        height: "300px"
    }
    const aboutMe = {
        color: "white",
        fontWeight: "bold",
        marginTop: "7rem",
        fontFamily: "'Bebas Neue', cursive",
        fontSize: "50px",
    }
    const bio = {
        color: "white",
        padding: "1.5rem",
        fontFamily: "'Saira Condensed', sans-serif",
        borderRadius: "10%",
        border: "solid",
        borderColor: "grey",
        width: "50rem",
        // minWidth: "25rem"
    }

    const bioContainer = {
        // margin: "2rem"
        // borderRadius: "25%"
        // width: "50rem"
        // minHeight: "1rem",
        // maxHeight: "50rem"
    }

    const bioContainerBig = {
        // marginTop: "10rem"
    }

    const mainPageBig = {
        backgroundImage: `url(${stars})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "length|percentage|auto|initial|inherit",
        minHeight: "55rem",
        // minHeight: "100%"
        // height: "%"
    }

    const mainPageSmall = {
        backgroundImage: `url(${stars})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // height: "length|percentage|auto|initial|inherit",
        minHeight: "70rem",
        height: "80rem"
    }

    const picBio = {
        marginLeft: "2rem",
        marginRight: "2rem"
    }

    let aboutComp;
    if(width < 1000) {
        aboutComp = (
            <div style={mainPageSmall}
                className="flex justify-center row">
                <h1 className='text-white center'
                    style={aboutMe}>About Me</h1>
                <img className='' 
                        style={headshotContainer} 
                        src={headshot} 
                        alt="Kimberly's Headshot" />
                <div style={bioContainer}
                    className="flex justify-center m-5">
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
            <div style={mainPageBig}
                className="flex row">
                <h1 
                    className="card-title center" 
                    style={aboutMe}>
                    About me
                </h1>
                <div className="flex justify-center"
                    style={picBio}>  
                    <div className="flex">
                        <div className="card-image">
                            <img style={headshotContainer} 
                                src={headshot} 
                                alt="Kimberly's Headshot"
                                className='mr-5'
                                 />
                        </div>
                        <div style={bioContainerBig}
                            className="ml-5"
                            // className="col-10"
                            >
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
            </div>
        )
    }

    return <div>{aboutComp}</div>
}