import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

import {
  CardBody,
  CardFooter,
  Button,
  Card as ChakraCard,
  Stack,
  Image,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

import { getRandomImage, getRandomWord } from "./data";


const WeatherData = ({ data, loading, error }) => {
  const [randomImage, setRandomImage] = useState("");
  const [randomWord, setRandomWord] = useState("");

  useEffect(() => {
    // Set random image when component mounts or data changes
    setRandomImage(getRandomImage());

    // Set random word when component mounts or data changes
    setRandomWord(getRandomWord());
  },[]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

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
        {data.location && data.current && (
          <ChakraCard
            direction={{ base: "column", sm: "row" }}
            variant="outline"
            overflow="hidden"
            w={{ base: "80%", sm: "100%" }}
            border="none"
          >
            <Image
              objectFit="cover"
              width={{ base: "100%", sm: "40%" }}
              maxW={{ base: "100%", sm: "320px" }}
              src={randomImage}
              alt="Location image"
            />

            <Stack flex="1">
              <CardBody>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignContent="center"
                  pb="2"
                >
                  <Box>
                    <Text color="gray.500" fontSize="14px">
                      Enjoy entire home in {data.location.name},{" "}
                      {data.location.country}
                    </Text>
                    <Heading color="gray.700" fontSize="20px">
                      {data.location.name} {randomWord}
                    </Heading>
                  </Box>

                  <Box>Like</Box>
                </Box>

                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Box color="gray.500" fontSize="14px">
                    <Text>
                      {" "}
                      {data.current.temp_c}°C ({data.current.temp_f}°F)
                    </Text>

                    <Text> {data.current.condition.text}</Text>
                  </Box>
                </Box>
              </CardBody>

              <CardFooter flex="1">
                <Box display="flex" justifyContent="space-between" flex="1">
                  <Box>
                    <Text color="gray.700" fontSize="14px">
                      Reviews
                    </Text>
                  </Box>

                  <Box>
                    {" "}
                    <Button variant="solid" colorScheme="blue">
                      See your packaging list
                    </Button>
                  </Box>
                </Box>
              </CardFooter>
            </Stack>
          </ChakraCard>
        )}
      </Box>

      <Box flex="4" bg="green.500" color="white" padding="4">
        Right side (40%)
      </Box>
    </Flex>
  );
};

export default WeatherData;
