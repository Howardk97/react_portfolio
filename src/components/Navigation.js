// Function that renders navigation links
function Navigation() {
    // Stylings
    const navLinks = {
        // fontWeight: "bold"
        fontFamily: "'Bebas Neue', cursive"
    }
    const navbar = {
        backgroundColor: "#250560",
        // height: "100%"
    }

    // Variable to hold the value of active
    // Switch statement that changes with navigation link clicks
    switch(window.location.pathname) {
        case "/":
            break
        case "/about":
            break
        case "/portfolio":
            break
        case "/contact":
            break
        case "resume":
            break
        default:
            console.log("Click a nav link!")
    }

    
    return (
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

// Export navigation links
export default Navigation;