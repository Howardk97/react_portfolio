import React, { useState } from 'react'
import stars from "../public/stars.jpg";
import website1 from "../public/website1.png";
import website2 from "../public/website2.png";
import website3 from "../public/website3.png";
import website4 from "../public/website4.png";
import website5 from "../public/website5.png";
import website6 from "../public/stay-in-touch.png";

export default function Portfolio () {
    // Stores hover boolean value for hover on websites
    const [hoverMovie, setHoverMovie] = useState(false);
    const [hoverInventory, setHoverInventory] = useState(false);
    const [hoverQuiz, setHoverQuiz] = useState(false);
    const [hoverWeather, setHoverWeather] = useState(false);
    const [hoverSchedule, setHoverSchedule] = useState(false);
    const [hoverInTouch, setHoverInTouch] = useState(false);
    // console.log(hover);

    const onHoverMovie = (e) => {
        e.preventDefault();
        setHoverMovie(true);
        console.log("hovered");
    }

    const onHoverOverMovie = (e) => {
        e.preventDefault();
        setHoverMovie(false);
    }

    const onHoverInventory = (e) => {
        e.preventDefault();
        setHoverInventory(true);
        console.log("hovered");
    }

    const onHoverOverInventory = (e) => {
        e.preventDefault();
        setHoverInventory(false);
    }

    const onHoverQuiz = (e) => {
        e.preventDefault();
        setHoverQuiz(true);
        console.log("hovered");
    }

    const onHoverOverQuiz = (e) => {
        e.preventDefault();
        setHoverQuiz(false);
    }

    const onHoverWeather = (e) => {
        e.preventDefault();
        setHoverWeather(true);
        console.log("hovered");
    }

    const onHoverOverWeather = (e) => {
        e.preventDefault();
        setHoverWeather(false);
    }

    const onHoverSchedule = (e) => {
        e.preventDefault();
        setHoverSchedule(true);
        console.log("hovered");
    }

    const onHoverOverSchedule = (e) => {
        e.preventDefault();
        setHoverSchedule(false);
    }

    const onHoverInTouch = (e) => {
        e.preventDefault();
        setHoverInTouch(true);
        console.log("hovered");
    }

    const onHoverOverInTouch = (e) => {
        e.preventDefault();
        setHoverInTouch(false);
    }
    

    // Styling
    const mainPage = {
        backgroundImage: `url(${stars})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // height: "50rem",
        height: "length|percentage|auto|initial|inherit",
        minHeight: "40rem",
        margin: "0",
    }

    const websiteContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "length|percentage|auto|initial|inherit",
    }

    const singleWebsite = {
        borderRadius: "10%",
        borderStyle: "solid",
        borderColor: "#90EE90",
        borderWidth: "5px",
        margin: "5%",
        width: "200px",
        height: "200px"
    }

    const portfolio = {
        color: "white",
        fontWeight: "bold",
        margin: "2rem",
        fontFamily: "'Bebas Neue', cursive",
        fontSize: "50px"
    }
    
    const description = {
        color: "white",
        padding: "2rem",
        backgroundColor: "#250560",
        fontFamily: "'Saira Condensed', sans-serif",
        // borderRadius: "10%"
    }

    return (
        <div style={mainPage} className="row">
            <div>
                <h1 
                style={portfolio} className="card-title center">Portfolio</h1>
                <div style={websiteContainer}>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <a href="https://github.com/Howardk97/project1">
                            <img 
                            onMouseEnter={(e) => onHoverMovie(e)}
                            onMouseLeave={(e) => onHoverOverMovie(e)}
                            style={singleWebsite} 
                            src={website1} 
                            alt="movie-database" 
                            width="200em" 
                            height="200em" ></img>
                            {hoverMovie && <p style={description} className="hover">
                                This application is a movie database that allows you to search any
                                movie or tv-show to find out general information about it such as
                                critic reviews, rating, description, and much more.
                            </p>}
                        </a> 
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <a
                        className="" 
                        href="https://inventorymanagement.herokuapp.com/">
                            <img
                            onMouseEnter={(e) => onHoverInventory(e)}
                            onMouseLeave={(e) => onHoverOverInventory(e)}
                            style={singleWebsite} 
                            src={website2} 
                            alt="inventory-website" 
                            width="200em" 
                            height="200em"
                            ></img>
                            {hoverInventory && <p style={description} className="hover">
                                This application is a an inventory management system for a catering company. 
                                This app is deployed through Heroku, as it runs on a full front- and 
                                back-end MVC structure.
                            </p>}
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <a className="" href="https://howardk97.github.io/Code-Quiz/">
                            <img 
                            onMouseEnter={(e) => onHoverQuiz(e)}
                            onMouseLeave={(e) => onHoverOverQuiz(e)}
                            style={singleWebsite} 
                            src={website3} 
                            alt="quiz-webpage" 
                            width="200em" 
                            height="200em"></img>
                            {hoverQuiz && <p style={description} className="hover">
                                This webpage is a timed code quiz for entry-level front-end developers. 
                                Take this quiz carefully, as time will be deducted for each incorrect
                                answer response.
                            </p>}
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <a className="" href="https://howardk97.github.io/weather-app/">
                            <img 
                            onMouseEnter={(e) => onHoverWeather(e)}
                            onMouseLeave={(e) => onHoverOverWeather(e)}
                            style={singleWebsite} 
                            src={website4} 
                            alt="weather-webpage" 
                            width="200em" 
                            height="200em"></img>
                            {hoverWeather && <p style={description} className="hover">
                                This is a weather app that allows you to look up temperatures
                                for any city around the world.
                            </p>}
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <a className="" href="https://howardk97.github.io/schedule-tracker/">
                            <img 
                            onMouseEnter={(e) => onHoverSchedule(e)}
                            onMouseLeave={(e) => onHoverOverSchedule(e)}
                            style={singleWebsite} 
                            src={website5} 
                            alt="schedule-tracker-webpage" 
                            width="200em" 
                            height="200em"></img>
                            {hoverSchedule && <p style={description} className="hover">
                                This application allows you to keep track of your daily schedule.
                                It allows you to add what you need to do in the listed time slots
                                and the time slots are color coded based on the time of day.
                            </p>}
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <a className="" href="https://stayintouchnetwork.herokuapp.com/">
                            <img 
                            onMouseEnter={(e) => onHoverInTouch(e)}
                            onMouseLeave={(e) => onHoverOverInTouch(e)}
                            style={singleWebsite} 
                            src={website6} 
                            alt="stay-int-touch-website" 
                            width="200em" 
                            height="200em"></img>
                            {hoverInTouch && <p style={description} className="hover">
                            This project is a way for graduates of our coding bootcamp cohort to stay 
                            in touch after graduation! Users will be able to make posts, add friends, 
                            keep a list of favorite posts, and more!
                            </p>}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}