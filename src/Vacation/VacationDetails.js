// Importing necessary components and hooks from Chakra UI and React
import {
  Box,
  Heading,
  Text,
  Divider,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import Gallery from "./ImageGallery"; // Importing ImageGallery component
import { useParams } from "react-router-dom"; // Importing useParams hook for accessing route parameters

// Importing vacation data from JSON file
import vacationsData from "./data.json";

// VacationDetails component
const VacationDetails = () => {
  const { id } = useParams(); // Getting the id parameter from the URL
  console.log("ID:", id);

  // Finding the vacation object with the matching id
  const vacation = vacationsData.find((item) => item.id === id);
  console.log("Vacation:", vacation);

  // If no vacation is found for the given id, render a message
  if (!vacation) {
    return <div>No vacation found for the given ID</div>;
  }

  // Function to get packing list based on temperature range
  const getPackingList = (temperature) => {
    if (temperature >= 10 && temperature <= 15) {
      return [
        "Light jacket or sweater",
        "Long-sleeve shirt",
        "Comfortable walking shoes or boots",
        "Umbrella",
      ];
    } else if (temperature > 15 && temperature <= 20) {
      return [
        "Medium-weight jacket or layered clothing",
        "Mix of short and long-sleeve shirts",
        "Comfortable walking shoes or boots",
      ];
    } else if (temperature > 20 && temperature <= 25) {
      return [
        "T-shirts and lightweight tops",
        "Shorts or skirts",
        "Sandals or breathable shoes",
      ];
    } else if (temperature > 25 && temperature <= 35) {
      return [
        "Lightweight breathable clothing",
        "Sunscreen and sun hat",
        "Sandals or flip-flops",
      ];
    } else {
      return [];
    }
  };

  // Get packing list based on the vacation's temperature
  const packingList = getPackingList(vacation.temperature);

  return (
    <Box p={16}>
      {/* Displaying vacation details */}
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Box>
            <Heading>{vacation.name}</Heading>
          </Box>
          <Box display="flex" mt={5} gap={4}>
            {/* Displaying vacation details such as stars, reviews, location */}
            <Text>
              {" "}
              <iconify-icon
                icon="bi:star-fill"
                style={{ color: "#000000" }}
              ></iconify-icon>{" "}
              {vacation.stars}
            </Text>
            <Text textDecoration="underline" fontWeight="600">
              {vacation.reviews}
            </Text>
            <Text>Friendly zone</Text>
            <Text>{vacation.location}</Text>
          </Box>
        </Box>
        <Box justifyContent="space-between" display="flex" gap={4}>
          {/* Displaying options to share and save */}
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

      {/* Displaying image gallery */}
      <Gallery />

      <Box p={4}>
        <Box>
          <Heading>{vacation.subName}</Heading>
        </Box>
        <Box display="flex" gap={2} fontSize="14px">
          {/* Displaying temperature range and weather conditions */}
          <Text>Temperature range : {vacation.tempRange} </Text>
          <Text>{vacation.weather_conditions}</Text>
        </Box>
        <Divider orientation="horizontal" marginY="4" width="600px" />
      </Box>

      <VStack gap={2} align="start">
        {/* Displaying vacation features */}
        <Box display="flex">
          {/* Displaying icons and feature descriptions */}
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

        {/* Additional features */}
        {/* Repeat the structure for other features */}

      </VStack>

      {/* Divider */}
      <Divider
        orientation="horizontal"
        marginY="4"
        width="600px"
        color="#E5E7EB"
      />

      {/* Displaying packing list */}
      <UnorderedList>
        {/* Heading for packing list */}
        <Text fontWeight='600' fontSize='24px' py={5}>
          Packing list based on location average temperature{" "}
         ( {vacation.temperature}°C )
        </Text>
        
        {/* Mapping through packing list items */}
        {packingList.map((item, index) => (
          <ListItem key={index}>
            <Text>
              {item}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default VacationDetails;
