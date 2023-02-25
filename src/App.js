import React from "react";
import Contact from "./components/Contact/Contact";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Compile from "./components/Compiler/Compile";
function App() {
  return (
    <>
    <Navbar/>
    <Compile />
    <Container/>
    <Contact/>
     
    </>
  );
}

export default App;
