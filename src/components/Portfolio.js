export default function Portfolio () {
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
            <h1 style={title}>Portfolio</h1>
        </div>
    );
}