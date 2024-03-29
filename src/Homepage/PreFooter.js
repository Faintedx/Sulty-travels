import React from "react";
import {
  Stack,
  Flex,
  Text,
  HStack,
  useBreakpointValue,
  Heading,
  Image
} from "@chakra-ui/react";
import Prefooter from "../assets/Prefooter.png";
import ManC from '../assets/ManC.png';

// Hero component for displaying the prefooter section with background image and text content
export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"60.65vh"}
      px={0}
      backgroundImage={Prefooter}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      justifyContent="space-between"
    >
      <HStack
        w={"full"}
        bgGradient={"linear(to-r, purple.500, transparent)"}
        align={"start"}
        justifyContent="space-between"
      >
        <Stack maxW={"2xl"} align={"start"} spacing={4} p={20}>
          {/* Heading */}
          <Heading
            as="h1"
            fontSize={useBreakpointValue({
              base: "30px",
              md: "50px",
              lg: "50px",
            })}
            color="#ffffff"
            textAlign={"start"}
            lineHeight="56.77px"
          >
            GO ON A VACATION
          </Heading>

          {/* Subtitle */}
          <Text
            color={"white"}
            lineHeight="18px"
            align={"start"}
            fontSize="20px"
            py={5}
          >
            Explore another world, have better experience and create fun memories
          </Text>
          {/* Additional content can be added here */}
        </Stack>

        {/* Image */}
        <Image src={ManC} height="full" />
      </HStack>
    </Flex>
  );
}
