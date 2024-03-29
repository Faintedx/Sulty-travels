import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Loader from '../Loader'; // Importing Loader component
import VacationCard from "./VacationList"; // Importing VacationCard component
import vacationsData from "./data.json"; // Importing vacation data

const DropdownButtonWithSearch = () => {
  // State to manage selected temperature range
  const [selectedTemperatureRange, setSelectedTemperatureRange] = useState(
    "Temperature range"
  );

  // State to manage loading state during data filtering
  const [loading, setLoading] = useState(false);

  // Function to handle temperature range selection
  const handleTemperatureRangeSelect = (value) => {
    setLoading(true); // Set loading to true before starting the filtering process
    setSelectedTemperatureRange(value);

    // Simulate an API call or other asynchronous operation for filtering
    setTimeout(() => {
      setLoading(false); // Set loading to false after the delay (simulating loading)
    }, 2000);
  };

  // Toast hook for displaying notifications
  const toast = useToast();

  // Function to handle notification when no vacation area is found in the entered location
  const handleSearchNotFound = () => {
    toast({
      title: "No available vacation area in the entered location",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  // Function to check if temperature is within selected temperature range
  const checkTemperatureRange = (temperature) => {
    if (selectedTemperatureRange === "Temperature range") {
      return true; // No temperature range filter applied
    }

    const [min, max] = parseTemperatureRange(selectedTemperatureRange);
    return temperature >= min && temperature <= max;
  };

  // Function to parse temperature range string into min and max temperatures
  const parseTemperatureRange = (temperatureRange) => {
    const regex = /(-?\d+)°C to (-?\d+)°C/;
    const match = temperatureRange.match(regex);

    if (match) {
      const [, min, max] = match.map((temp) => parseInt(temp));
      return [min, max];
    }

    return [0, 0]; // Default to [0, 0] if the format is not matched
  };

  // Filter vacation data based on selected temperature range
  const filteredTemperatureData = vacationsData.filter((data) => {
    const isTemperatureInRange = checkTemperatureRange(data.temperature);
    return isTemperatureInRange;
  });

  return (
    <Box>
      {/* Dropdown menu for selecting temperature range */}
      <Flex align="center" gap={6} mt={4} px="10" py={2}>
        <Menu variant="popover">
          <MenuButton
            as={Button}
            rounded="full"
            bg="white"
            color="gray.800"
            boxShadow="md"
            rightIcon={<ChevronDownIcon />}
          >
            {selectedTemperatureRange}
          </MenuButton>
          {/* Dropdown menu list */}
          <MenuList>
            <MenuItem
              onClick={() => handleTemperatureRangeSelect("10°C to 15°C")}
            >
              10°C to 15°C
            </MenuItem>
            <MenuItem
              onClick={() => handleTemperatureRangeSelect("15°C to 20°C")}
            >
              15°C to 20°C
            </MenuItem>
            <MenuItem
              onClick={() => handleTemperatureRangeSelect("20°C to 25°C")}
            >
              20°C to 25°C
            </MenuItem>
            <MenuItem
              onClick={() => handleTemperatureRangeSelect("25°C to 30°C")}
            >
              25°C to 30°C
            </MenuItem>
          </MenuList>
        </Menu>
        {/* Button to search by country */}
        <Link to="/book-a-trip">
          <Button rounded="full" bg="white" color="gray.800" boxShadow="lg">
            Search by Country
          </Button>
        </Link>
      </Flex>
      {/* Display loader when data is being loaded */}
      {loading && (
        <Loader text="Searching vacation location within Temperature range...." />
      )}
      {/* Render vacation cards with filtered data */}
      {!loading && <VacationCard filteredData={filteredTemperatureData} />}
    </Box>
  );
};

export default DropdownButtonWithSearch;
