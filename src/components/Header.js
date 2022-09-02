// Import in folder
import Navigation from "./Navigation"

// Function that renders the header
function Header() {
    // Styling for header
    const headingStyle = {
        backgroundColor: "#250560",
        display: "flex",
        alignItems: "stretch",
        flexWrap: "wrap",
        // backgroundColor: "#2AAA8A",
        height: "length|percentage|auto|initial|inherit"
        
    }
    const name = {
        fontFamily: "'Rubik Dirt', cursive",
        fontSize: "37px",
        height: "length|percentage|auto|initial|inherit",
        maxWidth: "100%"
    }
    
    // const logo = {
    //     width: "10px",
    //     height: "10px"
    // }

    // Content in header
    const headerCard = {
        height: "length|percentage|auto|initial|inherit",
        alignItems: "stretch",
        // height: "5%"
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