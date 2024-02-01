import React, { useState, useEffect } from "react";
import { Flex, Box, Text, VStack, Center } from "@chakra-ui/react";

const DatePanel = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Center fontFamily="poppins" mt="-10">
      <VStack
        bg="white"
        p={8}
        w="70vw"
        borderRadius="md"
        boxShadow="lg"
        spacing={4}
      >
        <Flex justify="space-between" w="100%">
          <Box>
            <Text
              fontWeight="bold"
              color="#bfbfbf"
              fontSize="18px"
              fontWeight="500"
              lineHeight="27px"
              textAlign="left"
              py={2}
            >
              Calendar
            </Text>
            <Text fontWeight="bold" fontSize="30px" lineHeight="45px">
              {formattedDate}
            </Text>
          </Box>

          <Box>
            <Text fontSize="xl" fontWeight="500" color="#bfbfbf" py={2}>
              Locations
            </Text>
            <Text fontWeight="600" fontSize="30px" lineHeight="45px">
              5k+
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Center>
  );
};

export default DatePanel;
