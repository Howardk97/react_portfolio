// Import in folders
import Navigation from "./Navigation"
import Footer from "./Footer"

// Function that renders the header
function Header(props) {
    // Styling for header
    const headingStyle = {
        backgroundImage: "url('galaxy-header.jpg')"
    }

    // Content in header
    return (
        <nav>
            <div style={headingStyle} className="nav-wrapper">
                <p className="brand-logo center">Kimberly Howard</p>
                <Navigation />
            </div>
        </nav>
    );
}

export default Header;