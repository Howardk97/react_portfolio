export default function Portfolio () {
    const mainPage = {
        backgroundImage: "url('stars.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "50rem",
        margin: "0",
        // minHeight: "45rem",
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
        margin: "5%"
    }

    const portfolio = {
        color: "white",
        fontWeight: "bold",
        margin: "2rem",
        fontFamily: "'Bebas Neue', cursive",
        fontSize: "50px"
    }

    return (
        <div style={mainPage} className="row">
            <div>
                <h1 style={portfolio} className="card-title center">Portfolio</h1>
                <div style={websiteContainer}>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <a href="https://saameer19.github.io/project1/">
                            <img style={singleWebsite} src="../../public/website1.png" alt="movie-database" width="200em" height="200em" ></img>
                        </a> 
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <a className="" href="https://inventorymanagement.herokuapp.com/">
                            <img style={singleWebsite} src="website2.png" alt="inventory-website" width="200em" height="200em"></img>
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <a className="" href="https://howardk97.github.io/Code-Quiz/">
                            <img style={singleWebsite} src="website3.png" alt="quiz-webpage" width="200em" height="200em"></img>
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <a className="" href="https://howardk97.github.io/weather-app/">
                            <img style={singleWebsite} src="website4.png" alt="weather-webpage" width="200em" height="200em"></img>
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <a className="" href="https://howardk97.github.io/schedule-tracker/">
                            <img style={singleWebsite} src="website5.png" alt="schedule-tracker-webpage" width="200em" height="200em"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}