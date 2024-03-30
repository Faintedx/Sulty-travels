import React, { useState } from "react";
import { Flex, Box, IconButton, Text } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom for navigation
import LogoutModal from "./LogoutModal"; // Importing LogoutModal component
import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux for dispatching actions
import { logout } from "../Redux/authSlice"; // Importing logout action creator from authSlice
import { Navigate } from 'react-router-dom'; // Importing Navigate component from react-router-dom for programmatic navigation

// Functional component AuthenticatedTopNavBar
const AuthenticatedTopNavBar = () => {

  // Dispatch function to dispatch actions to Redux store
  const dispatch = useDispatch();
  // State to manage the visibility of logout modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle opening the logout modal
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the logout modal
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Function to handle logout action
  const handleLogout = () => {
    // Dispatching logout action
    dispatch(logout());
    // Closing the logout modal
    handleModalClose();
    // Navigating to the login page
    return <Navigate to="/log-in"/>
  };

  // Rendering JSX for the component
  return (
    <Flex
      align="center"
      justify="space-between"
      py={4}
      px={8}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.1)"
    >
      {/* Logo and title */}
      <Box>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          fontWeight="600"
          fontFamily="poppins"
          color="#0575E6"
        >
          {/* Link to home page */}
          <Link to="/">
            Sulty <br></br> Travels
          </Link>
        </Flex>
      </Box>

      {/* Search bar */}
      <Box
        borderRadius="full"
        borderWidth="1px"
        p={2}
        width="450px"
        justifyContent="space-between"
        display="flex"
        fontWeight="600"
        color="black"
      >
        <Text>Bordeaux </Text>
        <Text>Feb 19 - 26 </Text>
        <Link to="book-a-trip">
          <Text>5,704 Locations</Text>
        </Link>
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          bg="blue.500"
          color="white"
          borderRadius="full"
          size="sm"
        />
      </Box>

      {/* Navigation and user profile */}
      <Box display="flex">
        <Text fontWeight="500" alignSelf="center" px={4}>
          List a place{" "}
          {/* Icon for listing a place */}
          <iconify-icon
            icon="charm:globe"
            style={{ color: "#000000" }}
          ></iconify-icon>
        </Text>
        <Box
          borderRadius="full"
          borderWidth="1px"
          p={2}
          width="100px"
          justifyContent="space-between"
          display="flex"
          fontWeight="600"
          onClick={handleModalOpen}
        >
          <Flex align="center">
            {/* Hamburger icon for toggling navigation */}
            <IconButton
              aria-label="Toggle Navigation"
              icon={<HamburgerIcon />}
              borderRadius="full"
              size="sm"
            />
          </Flex>
          <Flex align="center">
            {/* User profile icon */}
            <iconify-icon
              icon="solar:user-bold-duotone"
              style={{ color: "#D1D5DB" }}
              width="28"
            ></iconify-icon>
          </Flex>
        </Box>
      </Box>

      {/* Logout Modal */}
      <LogoutModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onLogout={handleLogout}
      />
    </Flex>
  );
};

// Exporting AuthenticatedTopNavBar component as default
export default AuthenticatedTopNavBar;
