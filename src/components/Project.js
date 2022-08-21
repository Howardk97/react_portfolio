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
        height: "15rem",
        width: "10rem",
        margin: "2rem",
        borderRadius: "75%",
        // justifyContent: "center"
    }
    const aboutMe = {
        color: "white",
        fontWeight: "bold",
        margin: "2rem",
        fontFamily: "'Bebas Neue', cursive",
        fontSize: "50px"
    }
    const bio = {
        color: "white",
        // width: "37rem",
        // margin: "5rem"
        padding: "2rem",
        backgroundColor: "#250560",
        // backgroundColor: "#2AAA8A",
        fontFamily: "'Saira Condensed', sans-serif"
    }
    const bioCard = {
        // height: "100rem"
        backgroundColor: "black"
    }
    const cardImage = {
        // display: "flex",
        // justifyContent: "center",
        // width: "40rem",
        // height:"350px",
        backgroundImage: "url('stars.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "50rem"
    }
    const aboutMeCard = {
        // display: "flex",
        // justifyContent: "center"
        // textAlign: "center"
        // width: "20rem"
    }
    const cardBody = {
        // backgroundImage: "url('galaxy-header.jpg')",
        backgroundColor: "black",
        width: "auto",
    }

    const bioContainer = {
        margin: "4rem",
        backgroundColor: "#250560"
    }

    const imageContainer = {
        display: "flex",
        justifyContent: "center"
    }
    return (
        <div style={body}>
            <Header />
            <div className="row" style={body}>
                <div className="col s12 m7" style={aboutMeCard}>
                    <div className="card" style={cardBody}>
                        <div style={cardImage}>
                            <div className="row center" style={imageContainer}>
                                <h1 className="card-title" style={aboutMe}>About Me</h1>
                                <div className="card-image" style={imageContainer}>
                                    <img style={headshot} src="headshot.jpg" alt="Kimberly's Headshot" />
                                    {/* <span className="card-title" style={aboutMe}>About Me</span> */}
                                </div>
                            </div>
                            <div>
                                {/* <span className="card-title text-center" style={aboutMe}>About Me</span> */}
                                <div style={bioContainer}>
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
                    
                        <div className="card-content" style={bioCard}>
                            {/* <p style={bio}>Kimberly Howard is a detailed-oriented mathematician with a background 
                            in education and web development. In May 2020, Kimberly graduated from 
                            Kennesaw State University with a bachelor's degree in Computational 
                            and Applied Mathematics. At the university, she was a Supplemental 
                            Instruction Leader and worked in research. Kimberly started teaching 
                            middle school math classes for two years after college. Then, she was 
                            trained in coding by Georgia Tech Boot Camps. Currently, Kimberly is 
                            seeking a front-end position in web development. You can find 
                            her contact information below. </p> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Project;