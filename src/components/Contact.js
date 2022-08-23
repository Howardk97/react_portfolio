// import Header from "./Header"

export default function Contact () {
    const form = {
        backgroundColor: "#250560",
        width: "50rem",
        height: "35em",
        borderRadius: "10%",
        marginTop: "0rem",
        marginLeft: "2rem",
        marginRight: "2rem",
        fontFamily: "'Saira Condensed', sans-serif",
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

    const formText = {
        color: "white",
        fontSize: "15px"
    }

    const buttonStyle = {
        backgroundColor: "#90EE90",
        height: "3rem",
        width: "7rem",
        borderRadius: "10%",
        fontSize: "20px"
    }

    const mainPage = {
        backgroundImage: "url('stars.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "50rem",
        margin: "0",
    }

    const formMessage = {
        fontSize: "30px",
        color: "white"
    }

    const contact = {
        color: "white",
        fontWeight: "bold",
        margin: "2rem",
        marginBottom: "0",
        fontFamily: "'Bebas Neue', cursive",
        fontSize: "50px"
    }

    return (
    <div style={mainPage}>
        <div className="row" style={formContainer}>
            <h1 className="center" style={contact}>Contact Me</h1>
            <form className="m-sm-50" style={form} action="mailto:kimberlyhoward529@gmail.com" method="post" enctype="text/plain">
                <h1 className="m-5" style={formMessage}>Send me a message!</h1>
                <div className="mb-3 m-4">
                    <label for="exampleFormControlInput1" className="form-label" style={formText}>Name</label>
                    <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="type your name here..." style={formText}/>
                </div>
                <div className="mb-3 m-4">
                    <label for="exampleFormControlInput1" className="form-label" style={formText}>Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" name="mail" placeholder="type your email here..." style={formText}/>
                </div>
                <div className="mb-3 m-4">
                    <label for="exampleFormControlTextarea1" className="form-label" style={formText} name="comment">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type message here..." rows="3"></textarea>
                    <button type="submit" name="Send" style={buttonStyle} className="m-5">Send</button>
                </div>
            </form>
        </div>
    </div>
    )
}