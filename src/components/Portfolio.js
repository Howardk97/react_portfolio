export default function Portfolio () {
    const headshot = {
        height: "15rem",
        width: "10rem",
        margin: "2rem",
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
        fontFamily: "'Saira Condensed', sans-serif"
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
        <h1>Portfolio</h1>
    );
}