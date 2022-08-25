import stars from "../public/stars.jpg"
import resumeDoc from "../public/resume.pdf"

export default function Resume () {
    const mainPage = {
        backgroundImage: `url(${stars})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "50rem",
        margin: "0",
        // minHeight: "45rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const resume = {
        color: "white",
        fontWeight: "bold",
        margin:"2rem",
        fontFamily: "'Bebas Neue', cursive",
        fontSize: "50px"
    }

    const resumePdf = {
        marginRight: "2rem",
        marginLeft: "2rem",
        marginBottom: "2rem"
    }

    return (
        <div style={mainPage} className="row">
            <h1 style={resume} className="center">Resume</h1>
            <object style={resumePdf} className="col-7" data={resumeDoc} 
                width="800" 
                height="500"> 
            </object>
        </div>
    )
}