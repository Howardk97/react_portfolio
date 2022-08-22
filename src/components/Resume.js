export default function Resume () {
    const mainPage = {
        backgroundImage: "url('stars.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "50rem"
    }

    const title = {
        color: "white"
    }

    return (
        <div style={mainPage}>
            <h1 style={title}>Resume</h1>
        </div>
    )
}