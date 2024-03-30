import React from "react";
import {
  Box,
  Button,
  Card as ChakraCard,
  Stack,
  Image,
  Heading,
  Text,
  Flex,
  Divider
} from "@chakra-ui/react";
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom to handle routing
import Pics1 from '../assets/Pics1.png'; // Importing image assets
import Pics2 from '../assets/Pics2.png';
import Pics3 from '../assets/Pics3.png';
import Pics4 from '../assets/Pics4.png';
import Pics5 from '../assets/Pics5.png';
import Pics6 from '../assets/Pics5.png'; // Note: Pics6 image seems to be a duplicate of Pics5

import Map from '../assets/Map.png'; // Importing the map image

// WeatherData component to display filtered vacation data
const WeatherData = ({ filteredData }) => {
  
  return (
    <Flex>
      {/* Vacation cards */}
      <Box
        fontFamily="poppins"
        className="sold"
        padding="2"
        flex="6"
        pt={6}
        color="white"
      >
        {Array.isArray(filteredData) && filteredData.length > 0 ? (
          filteredData.map((data) => (
            <Box key={data.id}>
              {/* Individual vacation card */}
              <ChakraCard
                direction={{ base: "column", sm: "row" }}
                variant="outline"
                overflow="hidden"
                w={{ base: "80%", sm: "100%" }}
                border="none"
                mb={4}
                maxW="90%"
                mx="auto"
                py={2}
              >
                {/* Displaying vacation image */}
                <Image
                  objectFit="cover"
                  width={{ base: "100%", sm: "40%" }}
                  maxW={{ base: "100%", sm: "320px" }}
                  src={
                    data.image === "Pics1.png" ? Pics1 :
                    data.image === "Pics2.png" ? Pics2 :
                    data.image === "Pics3.png" ? Pics3 :
                    data.image === "Pics4.png" ? Pics4 :
                    data.image === "Pics5.png" ? Pics5 :
                    Pics6
                  }
                  alt={data.name}
                  rounded="md"
                />

                <Stack flex="1" pl={4}>
                  {/* Vacation details */}
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignContent="center"
                    mt="2"
                  >
                    <Box>
                      <Text color="gray.500" fontSize="14px">
                        Enjoy entire home in {data.location},
                        {data.location.country}
                      </Text>
                      <Heading color="gray.700" fontSize="20px">
                        {data.name}
                      </Heading>
                    </Box>

                    {/* Button to save */}
                    <Box pr={4}>
                      <iconify-icon
                        icon="ph:heart-thin"
                        style={{ color: "#374151" }}
                      ></iconify-icon>
                    </Box>
                  </Box>

                  {/* Displaying temperature and weather conditions */}
                  <Box display="flex" justifyContent="space-between" mt={4}>
                    <Box color="gray.500" fontSize="14px">
                      <Text>
                        {data.temperature}°C ({data.temperature * 1.8 + 32}°F)
                      </Text>
                      <Text> {data.weather_conditions}</Text>
                    </Box>
                  </Box>

                  {/* Displaying stars, reviews, and button to view details */}
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flex="1"
                    pr={4}
                    mt={16}
                  >
                    <Box gap={2} display="flex">
                      <Text color="gray.700" fontSize="14px">
                        {data.stars}{" "}
                        <iconify-icon
                          icon="bi:star-fill"
                          style={{ color: "#F59E0B" }}
                        ></iconify-icon>
                      </Text>
                      <Text color="gray.700" fontSize="14px">
                        {data.reviews}
                      </Text>
                    </Box>

                    {/* Button to view vacation details */}
                    <Box>
                      <Button
                        variant="solid"
                        colorScheme="blue"
                        as={Link}
                        to={`/vacation-details/${data.id}`}
                        rounded="25px"
                        fontWeight="400"
                      >
                        See your packing list
                      </Button>
                    </Box>
                  </Box>
                </Stack>
              </ChakraCard>
              {/* Divider between vacation cards */}
              <Divider orientation="horizontal" mb={1} />
            </Box>
          ))
        ) : (
          <p>No results found</p>
        )}
      </Box>

      {/* Map */}
      <Box flex="4" position="relative" display={{base: 'none', md: 'block'}}>
        {/* Displaying map image */}
        <Image
          src={Map}
          height="100vh"
          position="fixed"
          top="87px"
          right="0"
          zIndex="10"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
};

export default WeatherData;
