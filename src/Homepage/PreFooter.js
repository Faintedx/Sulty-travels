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
import ManC from '../assets/ManC.png'

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

          <Text
            color={"white"}
            lineHeight="18px"
            align={"start"}
            fontSize="20px"
            py={5}
          >
           Explore another world, have better experience and create fun memories
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            width={"100%"}
            justify={"space-between"}
            gap={"6px"}
            align={"start"}
            fontSize={"20px"}
            lineHeight={"30px"}
          >
           
          </Stack>
        </Stack>

        <Image src={ManC} mb={20} />
      </HStack>
    </Flex>
  );
}
