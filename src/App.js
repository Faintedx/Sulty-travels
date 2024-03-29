import React from "react";
import { Container } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";
import TopNav from "./TopNav";
import TopNavAuth from "./TopNavAuth";
import { useSelector } from "react-redux";
import Homepage from "./Homepage";
import LoginPage from "./Login";
import AvailableList from "./AvailableList";
import FilteredTemp from './AvailableList/FilteredTemp'
import VacationDetails from "./AvailableList/VacationDetails";
import "./App.css";

// Main component for the application
function App() {
  // Redux state to check if user is authenticated
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // JSX rendering
  return (
    <Container maxW="1400px" px={0}>
      {/* Conditional rendering of navigation based on authentication */}
      {isAuthenticated ? <TopNavAuth /> : <TopNav />}
      {/* Routes for different pages */}
      <Routes>
        {/* Homepage route */}
        <Route path="/" element={<Homepage />} />
        {/* Login page route */}
        <Route path="/log-in" element={<LoginPage />} />
        {/* Route for booking a trip */}
        {isAuthenticated ? (
          <Route path="/book-a-trip" element={<AvailableList />} />
        ) : (
          <Route path="/book-a-trip" element={<Navigate to="/log-in" />} />
        )}
        {/* Route for filtering temperature */}
        {isAuthenticated ? (
          <Route path="/temperature-range" element={<FilteredTemp />} />
        ) : (
          <Route path="/log-in" element={<Navigate to="/log-in" />} />
        )}
        {/* Route for vacation details */}
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
