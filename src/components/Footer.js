import Router from "react-dom";

function Footer() {
    const imageContainer = {
        display: "flex",
        justifyContent: "center",
    }
    const githubImage = {
        width: "2rem",
        height: "2rem",
        marginRight: "1rem"
    }
    const linkedinImage = {
        width: "2rem",
        height: "2rem",
        marginLeft: "1rem"
    }
    return (
        // <Router>
            <div style={imageContainer}>
                {/* Problem: Will not access link */}
                <img src="github.png" alt="github logo" style={githubImage} />
                <img src="linkedin.png" alt="github logo" style={linkedinImage} />
            </div>
        // {/* </Router> */}
    );
}

export default Footer;