// Import in folder
import Navigation from "./Navigation"

// Function that renders the header
function Header() {
    // Styling for header
    const headingStyle = {
        backgroundColor: "#250560",
        display: "flex",
        alignItems: "stretch",
        height: "length|percentage|auto|initial|inherit"
        
    }
    const name = {
        fontFamily: "'Rubik Dirt', cursive",
        fontSize: "20px"
    }

    // Content in header
    const headerCard = {
        height: "length|percentage|auto|initial|inherit",
        alignItems: "stretch"
    }
    return (
        <nav style={headerCard}>
            {/* <div style={headerCard}> */}
                <div style={headingStyle} className="nav-wrapper">
                    {/* <i class="fa-light fa-moon"></i> */}
                    <p className="brand-logo center" style={name}>Kimberly Howard</p>
                    <Navigation />
                </div>
            {/* </div> */}
            
        </nav>
    );
}

export default Header;