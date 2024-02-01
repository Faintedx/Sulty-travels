// VacationDetails.js

import { Box, Heading, Text, Flex , Divider, VStack} from "@chakra-ui/react";
import React from "react";
import Gallery from "./ImageGallery";
import { useParams } from "react-router-dom";
import PackingList from "./PackingList";

import vacationsData from "./data.json";
const VacationDetails = () => {
  const { id } = useParams();
  console.log("ID:", id);
  const vacation = vacationsData.find((item) => item.id === id);

  console.log("Vacation:", vacation);

  if (!vacation) {
    return <div>No vacation found for the given ID</div>;
  }

  return (
    <Box p={16}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Box>
            <Heading>{vacation.name}</Heading>
          </Box>
          <Box display="flex" mt={5} gap={4}>
            <Text>
              {" "}
              <iconify-icon
                icon="bi:star-fill"
                style={{ color: "#000000" }}
              ></iconify-icon>{" "}
              5.0
            </Text>
            <Text textDecoration="underline" fontWeight="600">
              {vacation.reviews}
            </Text>
            <Text>Friendly zone</Text>
            <Text>{vacation.location}</Text>
          </Box>
        </Box>
        <Box justifyContent="space-between" display="flex" gap={4}>
          <Text>
            {" "}
            <iconify-icon
              icon="icon-park:share"
              style={{ color: "#374151" }}
            ></iconify-icon>{" "}
            Share
          </Text>
          <Text>
            {" "}
            <iconify-icon
              icon="ph:heart-thin"
              style={{ color: "#374151" }}
            ></iconify-icon>{" "}
            Save
          </Text>
        </Box>
      </Box>

      <Gallery />

      <Box p={4}>
        <Box>
          <Heading>{vacation.subName}</Heading>
        </Box>
        <Box display="flex" gap={2} fontSize="14px">
          <Text>Temperature range : {vacation.tempRange} </Text>
          <Text>{vacation.weather_conditions}</Text>
        </Box>
        <Divider orientation="horizontal" marginY="4" width="600px" />
      </Box>

      <VStack gap={2} align="start">
        <Box display="flex">
          <Box justifyContent="center" mt={2} px={2}>
            <iconify-icon
              icon="uil:home-alt"
              style={{ color: "#374151" }}
              width="26"
            ></iconify-icon>{" "}
          </Box>

          <Box>
            <Text fontSize="16px">Entire beach with camping homes</Text>
            <Text fontSize="14px" mt={-1} color="#6B7280">
              A spacious beach with extended homes
            </Text>
          </Box>
        </Box>

        <Box display="flex">
          <Box justifyContent="center" mt={2} px={2}>
            <iconify-icon
              icon="fluent:sparkle-24-filled"
              style={{ color: "#374151" }}
              width="26"
            ></iconify-icon>{" "}
          </Box>

          <Box>
            <Text fontSize="16px">Enhanced Clean</Text>
            <Text fontSize="14px" mt={-1} color="#6B7280">
              A very clean environment with an extension of connected rivers
            </Text>
          </Box>
        </Box>

        <Box display="flex">
          <Box justifyContent="center" mt={2} px={2}>
            <iconify-icon
              icon="uil:home-alt"
              style={{ color: "#374151" }}
              width="26"
            ></iconify-icon>{" "}
          </Box>

          <Box>
            <Text fontSize="16px">Self Check-in</Text>
            <Text fontSize="14px" mt={-1} color="#6B7280">
              Security is 100% as you are registered in
            </Text>
          </Box>
        </Box>

        <Box display="flex">
          <Box justifyContent="center" mt={2} px={2}>
            <iconify-icon
              icon="mdi:event-available"
              style={{ color: "#374151" }}
              width="26"
            ></iconify-icon>{" "}
          </Box>

          <Box>
            <Text fontSize="16px" mt={2}>
              Available
            </Text>
          </Box>
        </Box>
      </VStack>

      <Divider
        orientation="horizontal"
        marginY="4"
        width="600px"
        color="#E5E7EB"
      />

      <PackingList />
    </Box>
  );
};

export default VacationDetails;
