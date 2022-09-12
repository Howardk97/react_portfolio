import React from "react";
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const all = {
    backgroundColor: "black"
  }

  console.log(window.location);

  return (  
  <ApolloProvider client={client}>
    <Router>
      <Navigation />
      <Routes>
        <Route 
        path="/"
        element={<About />} 
        />
        <Route 
        path="/react_portfolio"
        element={<About />} 
        />
        <Route
        path="/about"
        element={<About />} 
        />
        <Route
        path="/portfolio"
        element={<Portfolio/>} 
        />
        <Route
        path="/contact"
        element={<Contact />} 
        />
        <Route
        path="/resume"
        element={<Resume />} 
        />
      </Routes>
    </Router>
    <Footer />
  </ApolloProvider>
  );
}

export default App;
