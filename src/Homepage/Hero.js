import React from "react";
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
  Button,
 
} from "@chakra-ui/react";
import HeroBg from "../assets/Herobg.png";
import{Link} from 'react-router-dom'

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"89.65vh"}
      px={0}
      backgroundImage={HeroBg}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        align={"start"}
      >
        <Stack maxW={"2xl"} align={"start"} spacing={4} p={20}>
          <Heading
            as="h1"
            fontSize={useBreakpointValue({
              base: "50px",
              md: "50px",
              lg: "80px",
            })}
            color="#ffffff"
            textAlign={"start"}
            lineHeight="76.77px"
          >
            Discover <br></br> the <br></br> waters
          </Heading>

          <Text
            color={"white"}
            lineHeight="18px"
            align={"start"}
            fontSize="20px"
            py={5}
          >
            Let's help you escape the city noise.
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
            <Link to="book-a-trip">
              <Button color="#0575E6" width="206px">
                FIND A PLACE
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
