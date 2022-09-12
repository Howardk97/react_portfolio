// import Router from "react-dom";
import githubLogo from "../public/github.png";
import linkedinLogo from "../public/linkedin.png";

function Footer() {
    const imageContainer = {
        display: "flex",
        justifyContent: "center",
        height: "length|percentage|auto|initial|inherit",
        margin: "0"
    }
    const logos = {
        width: "3rem",
        height: "3rem",
        margin: "1rem"
    }
    return (
            <div style={imageContainer}
                className="sticky-bottom bg-indigo-900">
                <a href="https://github.com/Howardk97">
                    <img src={githubLogo} alt="github logo" style={logos} />
                </a>
                <a href="https://www.linkedin.com/in/kimberly-howard-b27776b9/">
                    <img src={linkedinLogo} alt="linkedin logo" style={logos} />
                </a>
            </div>
    );
}

export default Footer;