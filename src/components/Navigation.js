// Function that renders navigation links
function Navigation() {
    // Stylings
    const navLinks = {
        fontWeight: "bold"
    }
    return (
    <div>
        <ul className="left hide-on-med-and-down" style={navLinks}>
            <li className="active"><a href="#!">About Me</a></li>
            <li className=""><a href="#!">Portfolio</a></li>
            <li className=""><a href="#!">Contact</a></li>
            <li className=""><a href="#!">Resume</a></li>
        </ul>
    </div>
    
    )
}

// Export navigation links
export default Navigation;