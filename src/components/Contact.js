// import Header from "./Header"

export default function Contact () {
    const form = {
        backgroundColor: "#250560",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "150rem",
        height: "28rem",
        borderRadius: "10%",
        marginTop: "10rem",
        marginLeft: "2rem",
        marginRight: "2rem",
        fontFamily: "'Saira Condensed', sans-serif"
    }

    const formContainer = {
        display: "flex",
        justifyContent: "center",
        backgroundImage: "url('stars.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "50rem",
        margin: "0",
    }

    const textWhite = {
        color: "white",
    }

    const buttonStyle = {
        backgroundColor: "#90EE90",
        marginTop: "1rem",
    }

    const mainPage = {
        backgroundImage: "url('stars.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "45rem",
        margin: "0",
    }

    return (
    <div style={mainPage}>
        <div style={formContainer}>
            <form style={form}>
                <h1 style={textWhite} className="m-5">Send me a message!</h1>
                <div className="mb-3 m-4">
                    <label for="exampleFormControlInput1" className="form-label" style={textWhite}>Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="type your email here..." style={textWhite}/>
                </div>
                <div className="mb-3 m-4">
                    <label for="exampleFormControlTextarea1" className="form-label" style={textWhite}>Example</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type your message here..." rows="3"></textarea>
                    <button style={buttonStyle} className="m-5">Send</button>
                </div>
            </form>
        </div>
    </div>
    )
}