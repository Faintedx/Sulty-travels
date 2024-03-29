import React from "react";
import { Box, Center, Image, Text, Flex } from "@chakra-ui/react";
import ViganCity from "../assets/ViganCity.png";
import Cebu from "../assets/Cebu.png";

// Data for profile cards
const profiles = [
  {
    id: 1,
    name: "The historical city of Vigan",
    imageSrc: ViganCity,
  },
  {
    id: 2,
    name: "The island of Cebu",
    imageSrc: Cebu,
  },
  {
    id: 3,
    name: "Coron island",
    imageSrc: Cebu,
  },
];

// Profile card component
const ProfileCard = ({ name, imageSrc }) => {
  return (
    <Center py={2}>
      <Box
        maxW={{ base: "90%", md: "300px" }} // Adjusting width for responsiveness
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2)"
        textAlign="center"
        fontFamily="arial"
        mb={{ base: 4, md: 0 }} // Margin bottom for spacing between cards
      >
        <Image src={imageSrc} alt={name} w="100%" />
        <Text as="h1" fontSize="xl" fontWeight="bold" mt="3" py={5}>
          {name}
        </Text>
      </Box>
    </Center>
  );
};

// Container component for profile cards
const ProfileCardContainer = () => {
  return (
    <Flex
      bg="#f4f7ff"
      p={4}
      flexWrap="wrap" // Allow items to wrap on smaller screens
      justifyContent="space-around"
      width="full"
      mx="auto"
    >
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} {...profile} />
      ))}
    </Flex>
  );
};

export default ProfileCardContainer;
