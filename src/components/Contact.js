// import Header from "./Header"
import stars from "../public/stars.jpg"

export default function Contact () {
    const form = {
        // backgroundColor: "#250560",
        width: "50rem",
        height: "35rem",
        borderRadius: "10%",
        marginLeft: "2rem",
        marginRight: "2rem",
        fontFamily: "'Saira Condensed', sans-serif",
        border: "solid",
        borderColor: "grey"
    }

    const formContainer = {
        display: "flex",
        justifyContent: "center",
        backgroundImage: "url('stars.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
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
        backgroundImage: `url(${stars})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "60rem",
    }

    const formMessage = {
        fontSize: "20px",
        color: "white",
        fontWeight: "bold"
    }

    const contact = {
        color: "white",
        fontWeight: "bold",
        marginTop: "7rem",
        fontFamily: "'Bebas Neue', cursive",
        fontSize: "50px"
    }

    const message = {
        width: "43rem"
    }

    return (
    <div style={mainPage}>
        <div className="row" style={formContainer}>
            <h1 className="center" style={contact}>Contact Me</h1>
            <form className="bg-indigo-900 row" style={form} action="mailto:kimberlyhoward529@gmail.com" method="post" enctype="text/plain">
                <h1 className="mx-5 mt-5 mb-2 text-bold" style={formMessage}>Send me a message!</h1>
                <div className="ml-7 col-5">
                    <label for="exampleFormControlInput1" className="form-label" style={formText}>Name</label>
                    <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="type your name here..." style={formText}/>
                </div>
                <div className="ml-7 col-5">
                    <label for="exampleFormControlInput1" className="form-label" style={formText}>Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" name="mail" placeholder="type your email here..." style={formText}/>
                </div>
                <div className="flex row justify-center">
                    <label for="exampleFormControlTextarea1" className="form-label ml-7" style={formText} name="comment">Message</label>
                    {/* <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type message here..." rows="3"></textarea> */}
                    <textarea
                        style={message}
						type="text"
						className="form-input flex rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 h-40"
						rows="6"
						placeholder="Type your post here"
						></textarea>
                    <button type="submit" name="Send" style={buttonStyle} className="mt-2">Send</button>
                </div>
            </form>
        </div>
    </div>
    )
}