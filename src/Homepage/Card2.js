import React from "react";
import {
  Center,
  Card as ChakraCard,
  Stack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import Packaging from "../assets/Packaging.png";

const Card = () => {
  return (
    <Center>
      <ChakraCard
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        w={{ base: "80%", sm: "80%" }}
        border="none"
        py="5"
        my="10"
      >
        <Stack w={{ base: "100%", sm: "50%" }} p={{ base: "4", sm: "8" }}>
          <CardBody>
            <Heading fontSize="40px" fontWeight="500">
              Packaging List
            </Heading>

            <Text
              py="2"
              fontWeight="500"
              fontSize="25px"
              lineHeight="47px"
              color="#808080"
            >
              Let us help you with your packaging list, you don’t have to worry
              about anything, we will provide you every information you need.
            </Text>
          </CardBody>
        </Stack>

        <Image
          objectFit="cover"
          w={{ base: "100%", sm: "50%" }}
          src={Packaging}
          alt="Caffe Latte"
        />
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
