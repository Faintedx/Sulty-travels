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
} from "@chakra-ui/react";

// Import your vacation data directly
import vacationsData from "./data.json";

const WeatherData = ({filteredData}) => {
  return (
    <Flex>
      <Box
        fontFamily="poppins"
        className="sold"
        padding="2"
        flex="6"
        bg="blue.500"
        color="white"
      >
        <Text fontWeight="bold" mb={2}>
          Search Results:
        </Text>
        {Array.isArray(filteredData) && filteredData.length > 0 ? (
          filteredData.map((data) => (
            <ChakraCard
              key={data.id}
              direction={{ base: "column", sm: "row" }}
              variant="outline"
              overflow="hidden"
              w={{ base: "80%", sm: "100%" }}
              border="none"
              mb={4}
            >
              <Image
                objectFit="cover"
                width={{ base: "100%", sm: "40%" }}
                maxW={{ base: "100%", sm: "320px" }}
                src={data.image}
                alt={`Location image for ${data.name}`}
              />

              <Stack flex="1">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignContent="center"
                  pb="2"
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

                  <Box>Like</Box>
                </Box>

                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Box color="gray.500" fontSize="14px">
                    <Text>
                      {" "}
                      {data.temperature}°C ({data.temperature * 1.8 + 32}°F)
                    </Text>
                    <Text> {data.weather_conditions}</Text>
                  </Box>
                </Box>
              </Stack>

              <Stack flex="1">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  flex="1"
                >
                  <Box>
                    <Text color="gray.700" fontSize="14px">
                      Reviews: {data.reviews}
                    </Text>
                  </Box>

                  <Box>
                    <Button variant="solid" colorScheme="blue">
                      See your packaging list
                    </Button>
                  </Box>
                </Box>
              </Stack>
            </ChakraCard>
          ))
        ) : (
          <p>No results found</p>
        )}
      </Box>

      <Box flex="4" bg="green.500" color="white" padding="4">
        Right side (40%)
      </Box>
    </Flex>
  );
};

export default WeatherData;
