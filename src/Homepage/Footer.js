import React from "react";
import { Box, Flex, Divider, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <Box
      p={5}
      bg="#ffffff"
      color="#808080"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-around"
        px={{ base: "2", md: "4" }}
      >
        <Box mb={5}>
          <Box fontFamily="Poppins">
            <Heading color="#000000" fontSize="18px" fontWeight={600} mb={2}>
              SERVICES
            </Heading>
            <Link>
              {" "}
              <Text>Hotel Booking</Text>
            </Link>
            <Link>
              {" "}
              <Text>Flights</Text>
            </Link>
            <Link>
              {" "}
              <Text>Food</Text>
            </Link>
          </Box>
        </Box>

        <Box mb={5}>
          <Box textDecoration="none">
            <Heading color="#000000" fontSize="18px" fontWeight={600} mb={2}>
              About
            </Heading>
            <Link>
              {" "}
              <Text>Terms and condition</Text>
            </Link>
            <Link>
              {" "}
              <Text>Our mission</Text>
            </Link>
          </Box>
        </Box>

        <Box flexBasis="20%" fontFamily="Poppins" mb={5}>
          <Flex mt={8} gap="5">
            <iconify-icon
              icon="basil:facebook-solid"
              style={{ color: "#000000" }}
              width="25"
            ></iconify-icon>

            <iconify-icon
              icon="basil:instagram-outline"
              style={{ color: "#000000" }}
              width="25"
            ></iconify-icon>

            <iconify-icon
              icon="mdi:youtube"
              style={{ color: "#000000" }}
              width="25"
            ></iconify-icon>
          </Flex>
        </Box>


      </Flex>

      <Divider my={6} />
      {}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
        px={4}
      >
       
        <Box my={4} fontFamily="Poppins">
          <Text fontSize="sm"> ©2024, All rights reserved</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
