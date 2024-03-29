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
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Loader from '../Loader'
import VacationCard from "./VacationList";
import vacationsData from "./data.json";

const DropdownButtonWithSearch = () => {
 
  const [selectedTemperatureRange, setSelectedTemperatureRange] =
    useState("Temperature range");

  

   const [loading, setLoading] = useState(false);
 
  

 const handleTemperatureRangeSelect = (value) => {
   setLoading(true); // Set loading to true before starting the filtering process
   setSelectedTemperatureRange(value);

   console.log("Loading started");

   // Simulate an API call or other asynchronous operation for filtering
   setTimeout(() => {
     setLoading(false); // Set loading to false after the delay (simulating loading)
     console.log("Loading completed");
   }, 2000);
 };


  const toast = useToast();
  const handleSearchNotFound = () => {
    toast({
      title: "No available vacation area in the entered location",
      status: "error",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  const checkTemperatureRange = (temperature) => {
    if (selectedTemperatureRange === "Temperature range") {
      return true; // No temperature range filter applied
    }

    const [min, max] = parseTemperatureRange(selectedTemperatureRange);
  
    return temperature >= min && temperature <= max;
  };

  const parseTemperatureRange = (temperatureRange) => {
    const regex = /(-?\d+)°C to (-?\d+)°C/;
    const match = temperatureRange.match(regex);

    if (match) {
      const [, min, max] = match.map((temp) => parseInt(temp));
    
      return [min, max];
    }

  
    return [0, 0]; // Default to [0, 0] if the format is not matched
  };
  const filteredTemperatureData = vacationsData.filter((data) => {
    const isTemperatureInRange = checkTemperatureRange(data.temperature);
  
    return isTemperatureInRange;
  });



  return (
    <Box>
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

        <Link to="/book-a-trip">
          <Button rounded="full" bg="white" color="gray.800" boxShadow="lg">
            Search by Country
          </Button>
        </Link>
      </Flex>

      {loading && <Loader text="Searching vacation location within Temperature range...." />}
      {!loading && <VacationCard filteredData={filteredTemperatureData} />}
    </Box>
  );
};

export default DropdownButtonWithSearch;
