import { Link } from "react-router-dom";
import Pics1 from "../assets/Pics1.png";
import Pics2 from "../assets/Pics2.png";
import Pics3 from "../assets/Pics3.png";
import Pics4 from "../assets/Pics4.png";
import Pics5 from "../assets/Pics5.png";

import React from "react";
import { Flex, Box, Image } from "@chakra-ui/react";

const Gallery = () => {
  return (
    <Flex width="100%" >
      {/* First image on the left */}
      <Box flexBasis="50%" ml={0}>
        <Image src={Pics1} alt="Image 1" objectFit="cover" width="100%" borderTopLeftRadius='25px' borderBottomLeftRadius='25px' />
      </Box>
      {/* Two images in the first row with 25% width each */}
      <Flex flexBasis="25%" flexDirection="column" ml={1}>
        <Box flex="1" marginBottom="1">
          <Image
            src={Pics2}
            alt="Image 2"
            objectFit="cover"
            width="100%"
          />
        </Box>
        <Box flex="1">
          <Image
            src={Pics3}
            alt="Image 3"
            objectFit="cover"
            width="100%"
          />
        </Box>
      </Flex>

      {/* Two images in the second row with 25% width each */}
      <Flex flexBasis="25%" flexDirection="column" ml={1} >
        <Box flex="1" marginBottom="1">
          <Image
            src={Pics4}
            alt="Image 4"
            objectFit="cover"
            width="100%"
            borderTopRightRadius='25px'
            
          />
        </Box>
        <Box flex="1">
          <Image
            src={Pics5}
            alt="Image 5"
            objectFit="cover"
            width="100%"
            borderBottomRightRadius='25px'
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Gallery;
