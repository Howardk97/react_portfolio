// Make functions to render each page

// Make conditionals based on the button click that call on render functions
// import Header  from "./Header";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";



function Project () {
    // Stylings for body
    const mainPage = {
        backgroundImage: "url('stars.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "50rem"
    }

    let Page;
    // Values for each part of the webpage
    switch(window.location.pathname) {
        case "/":
            Page = About
            break
        case "/about":
            Page = About
            break
        case "/portfolio":
            Page = Portfolio
            break
        case "/contact":
            Page = Contact
            break
        case "./resume":
            Page = Resume
            break
        default:
            console.log("Click one of the navigation links!")
    }
    return (
        <div>
            {/* <Header /> */}
            <div style={mainPage}>
                <Page />
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Project;