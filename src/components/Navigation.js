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

    
    return (
    <nav style={navbar} className="nav">
        {/* <a href="/" className="site-title"></a> */}
            <ul className="left hide-on-med-and-down" style={navLinks}>
                <li className="active">
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