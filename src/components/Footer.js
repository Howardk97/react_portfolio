// import Router from "react-dom";
import githubLogo from "../public/github.png";
import linkedinLogo from "../public/linkedin.png";

function Footer() {
    const imageContainer = {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#250560",
        // height:"8rem"
        height: "length|percentage|auto|initial|inherit",
        // height: "50rem",
        margin: "0"
        // height: "5%"
    }
    const logos = {
        width: "5rem",
        height: "5rem",
        margin: "1.5rem"
    }
    return (
        // <Router>
            <div style={imageContainer}
                className="sticky-bottom">
                {/* Problem: Will not access link */}
                <img src={githubLogo} alt="github logo" style={logos} />
                <img src={linkedinLogo} alt="linkedin logo" style={logos} />
            </div>
        // {/* </Router> */}
    );
}

export default Footer;