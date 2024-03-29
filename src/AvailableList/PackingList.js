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
      {/* Title for the packing list */}
      <Text fontSize="22px" py={4}>
        Your Packing List
      </Text>

      {/* Horizontal stack to display two vertical stacks */}
      <HStack gap={10} justifyContent="flex-start">
        {/* Vertical stack for the first set of items */}
        <VStack fontSize="14px" gap={2} justifyContent="flex-start">
          <Text textAlign="left">
            {" "}
            {/* Icon for food cooler */}
            <iconify-icon
              icon="game-icons:cooler"
              style={{ color: "#374151" }}
            ></iconify-icon>{" "}
            Food Cooler
          </Text>
          {/* Other items in the first vertical stack */}
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
            Central air conditioning
          </Text>
          <Text textAlign="left">
            <iconify-icon
              icon="icon-park-outline:sweater"
              style={{ color: "#374151" }}
            ></iconify-icon>{" "}
            Sweaters
          </Text>
        </VStack>

        {/* Vertical stack for the second set of items */}
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

      {/* Button to show all essentials */}
      <Box my="10">
        <Button variant="outline" fontSize="14px">
          Show all 37 essentials you might need
        </Button>
      </Box>
    </Box>
  );
};

export default PackingList;
