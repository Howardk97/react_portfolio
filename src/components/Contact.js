// import Header from "./Header"
import React, { useRef } from "react";
import stars from "../public/stars.jpg";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactForm"

export default function Contact () {
    const formStyle = {
        // backgroundColor: "#250560",
        width: "50rem",
        height: "35rem",
        borderRadius: "10%",
        // marginLeft: "2rem",
        // marginRight: "2rem",
        margin: "5rem",
        fontFamily: "'Saira Condensed', sans-serif",
        border: "solid",
        borderColor: "grey"
    }

    const formContainer = {
        // display: "flex",
        // justifyContent: "center",
        // backgroundImage: "url('stars.jpg')",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        width: "75rem",
        minWidth: "1rem"
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
        minHeight: "45rem",
        height: "length|percentage|auto|initial|inherit"
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

    

    // const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('contact_service', 'contact_form', form.current, 'jeEEJ98rBrhbTd5Ew')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

    return (
    <div style={mainPage}
        className="flex justify-center">
        <div className="flex row center" 
        style={formContainer}
        >
            <h1 className="center" style={contact}>Contact Me</h1>
            <ContactForm/>
        </div>
    </div>
    )
}