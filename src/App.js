import React from "react";
import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import TopNav from "./TopNav";
import Homepage from "./Homepage"
import LoginPage from './Login'
import "./App.css";

function App() {
  return (
    <Container maxW="full" px={0}>
      <TopNav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/log-in" element={<LoginPage />} />
      </Routes>
    </Container>
  );
}

export default App;
