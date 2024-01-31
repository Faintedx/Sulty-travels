import React from "react";
import { Flex, Box, IconButton, Link, Text, Avatar } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

const LocalNavbar = () => {
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
        <Text>5,507 Locations</Text>
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
        <Text fontWeight="500" alignSelf='center' px={4}>List a place</Text>
        <Box
          borderRadius="full"
          borderWidth="1px"
          p={2}
          width="100px"
          justifyContent="space-between"
          display="flex"
          fontWeight="600"
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
            <Avatar size="sm" name="User" src="user-avatar.jpg" />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default LocalNavbar;
