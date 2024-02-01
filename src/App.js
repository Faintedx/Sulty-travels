import React from "react";
import { Container } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";
import TopNav from "./TopNav";
import TopNavAuth from "./TopNavAuth";
import { useSelector } from "react-redux";
import Homepage from "./Homepage";
import LoginPage from "./Login";
import AvailableList from "./AvailableList";
import VacationDetails from "./AvailableList/VacationDetails";
import "./App.css";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Container maxW="full" px={0}>
      {isAuthenticated ? <TopNavAuth /> : <TopNav />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/log-in" element={<LoginPage />} />
        {isAuthenticated ? (
          <Route path="/book-a-trip" element={<AvailableList />} />
        ) : (
          <Route path="/book-a-trip" element={<Navigate to="/log-in" />} />
        )}

{isAuthenticated ? (
          <Route path="/vacation-details/:id" element={<VacationDetails />} />
        ) : (
          <Route path="/log-in" element={<Navigate to="/log-in" />} />
        )}
      </Routes>
    </Container>
  );
}

export default App;
