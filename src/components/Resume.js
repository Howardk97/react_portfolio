import stars from "../public/stars.jpg"
import resumeDoc from "../public/resume-9-22.pdf"

export default function Resume () {
    const mainPage = {
        backgroundImage: `url(${stars})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "length|percentage|auto|initial|inherit",
        minHeight: "80rem",
        margin: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    const resume = {
        color: "white",
        fontWeight: "bold",
        marginTop:"7rem",
        fontFamily: "'Bebas Neue', cursive",
        fontSize: "50px"
    }

    const resumePdf = {
        marginBottom: "5rem",
        height: "50rem",
        borderRadius: "2%",
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