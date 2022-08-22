export default function Resume () {
    const mainPage = {
        backgroundImage: "url('stars.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "50rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <div style={mainPage}>
            <object data=
            "resume.pdf" 
                width="800" 
                height="500"> 
        </object>
        </div>
    )
}