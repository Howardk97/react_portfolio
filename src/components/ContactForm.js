import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'jeEEJ98rBrhbTd5Ew')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

//   Styling
const formContainer = {
    borderRadius: "10%",
    // height: "length|percentage|auto|initial|inherit",
    height: "80%",
    width: "100%"
}

const inputStyling = {
    width: "30rem",
    borderRadius: "5%",
    backgroundColor: "#f8fafc"
}

const labelStyling = {
    fontFamily: "'Saira Condensed', sans-serif",
    fontWeight: "bold",
    fontSize: "15px",
    marginRight: "1rem"
}

const messageLabel = {
    fontFamily: "'Saira Condensed', sans-serif",
    fontWeight: "bold",
    fontSize: "15px",
    marginLeft: "2rem"
}

const messageBox = {
    width: "70rem",
    margin: "auto"
}

const buttonStyle = {
    backgroundColor: "#90EE90",
    height: "3rem",
    width: "7rem",
    borderRadius: "10%",
    fontSize: "20px",
    margin: "2rem"
}

const formHeader = {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: "30px"
}

// Function to handle form submission
function submitForm () {
    // console.log("form submitted!")
    // document.getElementById("contactForm").reset();
    alert("Your message was sent to Kimberly. Expect a reply within the next 24 hours.");
}

  return (
    <form 
        ref={form} 
        onSubmit={sendEmail}
        className="bg-indigo-900"
        style={formContainer}
        id="contactForm">
      <p className='text-slate-50 row mt-5 ml-5'
        style={formHeader}>Send me a message!</p>
      <label className=''
            style={labelStyling}>Name</label>
      <input type="text" 
        name="from_name"
        className='mx-1'
        style={inputStyling}
        placeholder="Enter your name" />
      <label className='ml-auto'
            style={labelStyling}>Email</label>
      <input type="email" 
            name="user_email"
            style={inputStyling}
            placeholder="Enter your email" />
        <br/>
      <label className='mt-2 row'
            style={messageLabel}>Message</label>
      <textarea name="message"
                className="bg-slate-50 form-input flex rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 h-40"
				rows="6"
				placeholder="Type your message here"
                style={messageBox} />
      <input type="submit" 
            value="Send"
            style={buttonStyle}
            onClick={submitForm} />
    </form>
  );
};