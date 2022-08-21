// Import in folder
import Navigation from "./Navigation"

// Function that renders the header
function Header(props) {
    // Styling for header
    const headingStyle = {
        backgroundColor: "#250560",
        // backgroundColor: "#2AAA8A",
    }
    const name = {
        fontFamily: "'Rubik Dirt', cursive",
        fontSize: "37px"
    }
    const logo = {
        width: "10px",
        height: "10px"
    }

    // Content in header
    return (
        <nav>
            {/* <div style={headerCard}> */}
                <div style={headingStyle} className="nav-wrapper">
                    {/* <i class="fa-light fa-moon"></i> */}
                    
                    <p className="brand-logo center" style={name}>
                        
                        Kimberly Howard</p>
                    <Navigation />
                </div>
            {/* </div> */}
            
        </nav>
    );
}

export default Header;