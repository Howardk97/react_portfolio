// Make functions to render each page

// Make conditionals based on the button click that call on render functions
import Header  from "./Header";
import Footer from "./Footer";

function Project () {
    // Stylings for body
    const body = {
        backgroundColor: "black",
        // width: "auto",
        height: "45rem"
        // backgroundImage: "url('galaxy-header.jpg')"
    }
    const headshot = {
        height: "25rem",
        width: "20rem",
    }
    const aboutMe = {
        color: "white",
        fontWeight: "bold",
    }
    const bio = {
        color: "white",
        // width: "37rem",
        backgroundColor: "black"
    }
    const bioCard = {
        // height: "100rem"
        backgroundColor: "black"
    }
    const cardImage = {
        display: "flex",
        justifyContent: "center",
        // width: "40rem",
        // height:"350px",
        backgroundImage: "url('galaxy-header.jpg')",
    }
    const aboutMeCard = {
        display: "flex",
        justifyContent: "center"
        // textAlign: "center"
        // width: "20rem"
    }
    const cardBody = {
        // backgroundImage: "url('galaxy-header.jpg')",
        backgroundColor: "black",
        width: "45rem",
    }
    return (
        <div style={body}>
            <Header />
            <div className="row" style={body}>
                <div className="col s12 m7" style={aboutMeCard}>
                    <div className="card" style={cardBody}>
                        <div>
                            <div className="card-image" style={cardImage}>
                                <img style={headshot} src="Kim_Howard_Headshot.jpg" alt="Kimberly's Headshot" />
                                <span className="card-title text-center" style={aboutMe}>About Me</span>
                            </div>
                        </div>
                    
                        <div className="card-content" style={bioCard}>
                            <p style={bio}>Kimberly Howard is a detailed-oriented mathematician with a background 
                            in education and web development. In May 2020, Kimberly graduated from 
                            Kennesaw State University with a bachelor's degree in Computational 
                            and Applied Mathematics. At the university, she was a Supplemental 
                            Instruction Leader and worked in research. Kimberly started teaching 
                            middle school math classes for two years after college. Then, she was 
                            trained in coding by Georgia Tech Boot Camps. Currently, Kimberly is 
                            seeking a front-end position in web development. You can find 
                            her contact information below. </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Project;