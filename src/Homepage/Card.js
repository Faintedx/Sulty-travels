import React from "react";
import {
  Center,
  Card as ChakraCard,
  Stack,
  Image,
  Heading,
  Text,
 
} from "@chakra-ui/react";
import Plan from "../assets/Plan.png"

const Card = () => {
  return (
    <Center>
      <ChakraCard
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        w={{ base: "80%", sm: "80%" }}
        border='none'
        py='5'
        my='10'
      >
        <Image
          objectFit="cover"
          w={{ base: "100%", sm: "50%" }} 
          src={Plan}
          alt="Caffe Latte"
        />

        <Stack w={{ base: "100%", sm: "50%" }} p={{ base: "4", sm: "8" }}>
          <CardBody>
            <Heading fontSize="40px" fontWeight='500'>Plan</Heading>

            <Text
              py="2"
              fontWeight="500"
              fontSize="25px"
              lineHeight="47px"
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

const CardBody = ({ children }) => (
  <Stack p="4" spacing="1" align="start">
    {children}
  </Stack>
);



export default Card;
