import React from "react";
import { Flex, Box, Text, VStack, Center } from "@chakra-ui/react";

const DatePanel = () => {
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
              font-size="18px"
              font-weight="500"
              line-height="27px"
              textAlign="left"
              py={2}
            >
              Calender
            </Text>
            <Text fontWeight="bold" fontSize="30px" lineHeight="45px">
              January 30, 2024
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
