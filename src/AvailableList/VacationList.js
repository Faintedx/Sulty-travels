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
import { Link } from 'react-router-dom';
import Pics1 from '../assets/Pics1.png'
import Pics2 from '../assets/Pics2.png'
import Pics3 from '../assets/Pics3.png'
import Pics4 from '../assets/Pics4.png'
import Pics5 from '../assets/Pics5.png'
import Pics6 from '../assets/Pics5.png'

import Map from '../assets/Map.png'

const WeatherData = ({ filteredData }) => {
  
  return (
    <Flex>
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
            <Box>
            <ChakraCard
              key={data.id}
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
              <Image
                objectFit="cover"
                width={{ base: "100%", sm: "40%" }}
                maxW={{ base: "100%", sm: "320px" }}
                src={
                  data.image === 'Pics1.png'
                    ? Pics1
                    : data.image === 'Pics2.png'
                    ? Pics2
                    : data.image === 'Pics3.png'
                    ? Pics3
                    : data.image === 'Pics4.png'
                    ? Pics4
                    : data.image === 'Pics5.png'
                    ? Pics5
                    : Pics6
                } alt={data.name}
                rounded='md'
              />

              <Stack flex="1" pl={4}>
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

                  <Box pr={4}>Like</Box>
                </Box>

                <Box display="flex" justifyContent="space-between" mt={4}>
                  <Box color="gray.500" fontSize="14px">
                    <Text>
                      {" "}
                      {data.temperature}°C ({data.temperature * 1.8 + 32}°F)
                    </Text>
                    <Text> {data.weather_conditions}</Text>
                  </Box>
                </Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  flex="1"
                  pr={4}
                  mt={16}
                >
                  <Box gap={2} display='flex'>
                    <Text color="gray.700" fontSize="14px">
                      Reviews: {data.stars}
                      
                    </Text>
                    <Text color="gray.700" fontSize="14px">
                      {data.reviews} 
                      
                    </Text>
                  </Box>

                  <Box>
                    <Button variant="solid" colorScheme="blue" as={Link} to={`/vacation-details/${data.id}`} rounded='25px' fontWeight='400'>
                      See your packing list
                    </Button>
                  </Box>
                </Box>
              </Stack>
             
            </ChakraCard>
            <Divider orientation="horizontal" mb={1} />
            </Box>
             
          ))
        ) : (
          <p>No results found</p>
        )}
      </Box>

      <Box flex="4" position="relative">
       <Image src={Map} height="100vh" position="fixed" top="40" right="0" zIndex="10" objectFit="cover"/>
      </Box>
    </Flex>
  );
};

export default WeatherData;