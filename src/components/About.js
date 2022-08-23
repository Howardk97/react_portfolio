export default function About () {
     // Stylings for body
    const headshot = {
        // height: "length|percentage|auto|initial|inherit",
        // width: "length|percentage|auto|initial|inherit",
        // margin: "2rem",
        borderRadius: "75%",
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
        padding: "2rem",
        backgroundColor: "#250560",
        fontFamily: "'Saira Condensed', sans-serif",
        // borderRadius: "10%"
    }

    const bioContainer = {
        // margin: "4rem",
        // marginLeft: "4rem",
        // marginRight: "4rem",
        // marginBottom: "4rem",
        margin: "2rem",
        backgroundColor: "#250560",
        // borderRadius: "75%"
    }

    const imageContainer = {
        display: "flex",
        justifyContent: "center"
    }

    const mainPage = {
        backgroundImage: "url('stars.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "length|percentage|auto|initial|inherit",
        minHeight: "45rem",
    }
    return (
        // <div className="row" style={body}>
        <div className="col s12 m7" style={mainPage}>
            <div className="row center" style={imageContainer}>
                <h1 className="card-title" style={aboutMe}>About Me</h1>
                <div className="card-image" style={imageContainer}>
                    <img style={headshot} src="headshot.jpg" alt="Kimberly's Headshot" />
                </div>
            </div>
            
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
            
    );
}