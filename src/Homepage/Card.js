import React from "react";
import {
  Center,
  Card as ChakraCard,
  Stack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import Plan from "../assets/Plan.png";

// Card component
const Card = () => {
  return (
    <Center>
      <ChakraCard
        direction={{ base: "column", sm: "row" }} // Set direction to column on mobile, row on larger screens
        overflow="hidden"
        variant="outline"
        w={{ base: "80%", sm: "80%" }} // Adjust width based on screen size
        border="none"
        py="5"
        my="10"
      >
        {/* Display image on top on mobile */}
        <Image
          objectFit="cover"
          w={{ base: "100%", sm: "50%" }} // Make image full width on mobile
          src={Plan}
          alt="Caffe Latte"
        />

        {/* Stack for card content */}
        <Stack w={{ base: "100%", sm: "50%" }} p={{ base: "4", sm: "8" }}>
          {/* Card body with heading and text */}
          <CardBody>
            <Heading fontSize={{ base: "30px", sm: "40px" }} fontWeight="500">
              Plan
            </Heading>

            <Text
              py="2"
              fontWeight="500"
              fontSize={{ base: "20px", sm: "25px" }}
              lineHeight={{ base: "30px", sm: "47px" }}
              color="#808080"
            >
              Plan your trip this summer to the amazing destinations in the
              world, enjoy an amazing holiday in the blue waters. Take photos
              and create beautiful memories.
            </Text>
          </CardBody>
        </Stack>
      </ChakraCard>
    </Center>
  );
};

// Card body component to handle stack of children
const CardBody = ({ children }) => (
  <Stack p="4" spacing="1" align="start">
    {children}
  </Stack>
);

export default Card;
