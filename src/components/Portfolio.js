export default function Portfolio () {
    const mainPage = {
        backgroundImage: "url('stars.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "length|percentage|auto|initial|inherit",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem"
    }

    // const title = {
    //     color: "white"
    // }

    const websiteContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "length|percentage|auto|initial|inherit",
        width: "length|percentage|auto|initial|inherit",
        backgroundColor: "#250560",
        borderRadius: "10%",
        padding: "2rem"
    }

    const singleWebsite = {
        borderRadius: "10%",
    }

    return (
        <div style={mainPage} className="row">
            <div style={websiteContainer} className="row col-xs-1 col-sm-6 col-md-8 col-lg-10">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <a href="https://saameer19.github.io/project1/">
                        <img style={singleWebsite} className="m-3" src="website1.png" alt="" width="200em" height="200em" ></img>
                    </a> 
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <a className="" href="https://inventorymanagement.herokuapp.com/">
                        <img style={singleWebsite}  className="m-3" src="website2.png" alt="" width="200em" height="200em"></img>
                    </a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <a className="" href="https://howardk97.github.io/Code-Quiz/">
                        <img style={singleWebsite}  className="m-3" src="website3.png" alt="" width="200em" height="200em"></img>
                    </a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <a className="" href="https://howardk97.github.io/weather-app/">
                        <img style={singleWebsite}  className="m-3" src="website4.png" alt="" width="200em" height="200em"></img>
                    </a>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <a className="" href="https://howardk97.github.io/schedule-tracker/">
                        <img style={singleWebsite}  className="m-3" src="website5.png" alt="" width="200em" height="200em"></img>
                    </a>
                </div>
            </div>
            </div>
    );
}