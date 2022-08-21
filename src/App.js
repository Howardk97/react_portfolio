import React from "react";
import About from "./components/About"
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Footer from "./components/Footer"

function App() {
  const all = {
    backgroundColor: "black"
  }

const mainPage = {
    backgroundImage: "url('stars.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "50rem"
}

  let Component;
  switch(window.location.pathname) {
    case '/':
      Component = Project
      break
    case '/about':
      Component = About
      break
    case "/portfolio":
      Component = Portfolio
      console.log("trying to access portfolio page")
      break
    case '/contact':
      Component = Contact
      console.log("trying to access contact page")
      break
    case "/resume":
      Component = Resume
      console.log("trying to access resume page")
      break
    default:
      console.log("click one of the navigation links")
  }
  console.log(window.location);
  return (
  <div>
    <Header style={all}/>
    <Component style={mainPage}/>
    <Footer />
  </div>
  );
}

export default App;
