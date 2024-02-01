import React from "react";
import {
  Box,
  Button,
  Text,
  Flex,
  Divider,
  HStack,
  VStack
 
} from "@chakra-ui/react";


const PackingList = () => {
  
  return (
    <Box>
       <Text fontSize='22px' py={4}>
        Your Packing List
       </Text>

       <HStack gap={10} justifyContent='flex-start'>
        <VStack fontSize='14px' gap={2}  >
            <Text textAlign="left">Food Cooler</Text>
            <Text textAlign="left">Wifi</Text>
            <Text textAlign="left">Hair Dryer</Text>
            <Text textAlign="left">Central hair conditioning</Text>
            <Text textAlign="left">Sweaters</Text>

        </VStack>


        <VStack fontSize='14px' gap={2} textAlign='left'>
            <Text textAlign="left">Kitchen Utensils</Text>
            <Text textAlign="left">Camp net</Text>
            <Text textAlign="left">Dryer</Text>
            <Text textAlign="left">Camera</Text>
            <Text textAlign="left">Bicycles</Text>

        </VStack>
       </HStack>
       <Box my='10'>

       <Button variant='outline' fontSize='14px'>Show all 37 essentials you might need</Button>
       </Box>
    </Box>
  );
};

export default PackingList;