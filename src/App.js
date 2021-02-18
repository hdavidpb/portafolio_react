import React from "react";
import Container from "./components/container";
import Nav from "./components/nav";
import Header from "./components/header";
import About from "./components/about";

import Folder from "./components/folder";
import Form from "./components/form";
import Contacto from "./components/contact";
import Aside from "./components/aside";
import "./assets/styles/globals.css";

import { Switch, Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Nav />
      <Header />
      <Container>
        <About />
        <Folder />
        <Form />
      </Container>
      <Contacto />
      <Aside />
    </>
  );
}

export default App;
