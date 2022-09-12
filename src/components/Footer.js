// import Router from "react-dom";
import githubLogo from "../public/github.png";
import linkedinLogo from "../public/linkedin.png";

function Footer() {
    const imageContainer = {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#250560",
        height: "length|percentage|auto|initial|inherit",
        margin: "0"
    }
    const logos = {
        width: "5rem",
        height: "5rem",
        margin: "1.5rem"
    }
    return (
            <div style={imageContainer}
                className="sticky-bottom">
                {/* Problem: Will not access link */}
                <img src={githubLogo} alt="github logo" style={logos} />
                <img src={linkedinLogo} alt="linkedin logo" style={logos} />
            </div>
    );
}

export default Footer;