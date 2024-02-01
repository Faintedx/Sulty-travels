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
    <Box textAlign="left">
      <Text fontSize="22px" py={4}>
        Your Packing List
      </Text>

      <HStack gap={10} justifyContent="flex-start">
        <VStack fontSize="14px" gap={2} justifyContent="flex-start">
          <Text textAlign="left">
            {" "}
            <iconify-icon
              icon="game-icons:cooler"
              style={{ color: "#374151" }}
            ></iconify-icon>{" "}
            Food Cooler
          </Text>
          <Text textAlign="left">
            {" "}
            <iconify-icon
              icon="f7:wifi"
              style={{ color: "#374151" }}
            ></iconify-icon>{" "}
            Wifi
          </Text>
          <Text textAlign="left">
            {" "}
            <iconify-icon
              icon="mdi:hair-dryer-outline"
              style={{ color: "#374151" }}
            ></iconify-icon>{" "}
            Hair Dryer
          </Text>
          <Text textAlign="left">
            {" "}
            <iconify-icon
              icon="mingcute:air-condition-fill"
              style={{ color: "#374151" }}
            ></iconify-icon>{" "}
            Central aair conditioning
          </Text>
          <Text textAlign="left">
            <iconify-icon
              icon="icon-park-outline:sweater"
              style={{ color: "#374151" }}
            ></iconify-icon>{" "}
            Sweaters
          </Text>
        </VStack>

        <VStack fontSize="14px" gap={2} textAlign="left">
          <Text textAlign="left">
            {" "}
            <iconify-icon
              icon="mdi:utensils-fork-knife"
              style={{ color: "#374151" }}
            ></iconify-icon>{" "}
            Kitchen Utensils
          </Text>
          <Text textAlign="left">
            {" "}
            <iconify-icon
              icon="game-icons:fishing-net"
              style={{ color: "#374151" }}
            ></iconify-icon>{" "}
            Camp net
          </Text>
          <Text textAlign="left">
            {" "}
            <iconify-icon
              icon="mdi:hair-dryer-outline"
              style={{ color: "#374151" }}
            ></iconify-icon>{" "}
            Dryer
          </Text>
          <Text textAlign="left">
            {" "}
            <iconify-icon
              icon="f7:camera-fill"
              style={{ color: "#374151" }}
            ></iconify-icon>{" "}
            Camera
          </Text>
          <Text textAlign="left">
            {" "}
            <iconify-icon
              icon="ph:bicycle-fill"
              style={{ color: "#374151" }}
            ></iconify-icon>{" "}
            Bicycles
          </Text>
        </VStack>
      </HStack>
      <Box my="10">
        <Button variant="outline" fontSize="14px">
          Show all 37 essentials you might need
        </Button>
      </Box>
    </Box>
  );
};

export default PackingList;