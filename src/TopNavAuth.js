import React, {useState} from "react";
import { Flex, Box, IconButton, Text } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {Link} from 'react-router-dom'
import LogoutModal from "./LogoutModal";
import { useDispatch } from "react-redux";
import { logout } from "./Redux/authSlice";
import {Navigate} from 'react-router-dom'
const LocalNavbar = () => {

 const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
  dispatch(logout())
    handleModalClose();
    return <Navigate to="/log-in"/>
  };
  return (
    <Flex
      align="center"
      justify="space-between"
      py={4}
      px={8}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.1)"
    >
      <Box>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          fontWeight="600"
          fontFamily="poppins"
          color="#0575E6"
        >
          <Link to="/">
            Sulty <br></br> Travels
          </Link>
        </Flex>
      </Box>

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

      <Box display="flex">
        <Text fontWeight="500" alignSelf="center" px={4}>
          List a place{" "}
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
            <IconButton
              aria-label="Toggle Navigation"
              icon={<HamburgerIcon />}
              borderRadius="full"
              size="sm"
            />
          </Flex>

          <Flex align="center">
            <iconify-icon
              icon="solar:user-bold-duotone"
              style={{ color: "#D1D5DB" }}
              width="38"
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

export default LocalNavbar;
