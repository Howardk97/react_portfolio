// Import in folder
import Navigation from "./Navigation"

// Function that renders the header
function Header(props) {
    // Styling for header
    const headingStyle = {
        // Adding gallaxy background
        // display: "flex",
        // justifyContent: "center",
        // width: "50rem",
        backgroundImage: "url('galaxy-header.jpg')",
    }
    const name = {
        fontWeight: "bold"
    }

    // Content in header
    return (
        <nav>
            {/* <div style={headerCard}> */}
                <div style={headingStyle} className="nav-wrapper">
                    <p className="brand-logo center" style={name}>Kimberly Howard</p>
                    <Navigation />
                </div>
            {/* </div> */}
            
        </nav>
    );
}

export default Header;