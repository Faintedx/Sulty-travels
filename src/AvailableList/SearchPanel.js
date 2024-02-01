import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

import VacationCard from "./VacationList";
import vacationsData from "./data.json";

const DropdownButtonWithSearch = () => {
  const [selectedCountry, setSelectedCountry] = useState("Country");
  const [selectedTemperatureRange, setSelectedTemperatureRange] =
    useState("Temperature range");

  const [searchInput, setSearchInput] = useState("");
  const [searchedData, setSearchedData] = useState(null);

  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleCountrySelect = (value) => {
    setSelectedCountry(value);
    setSearchInput(value); // Set search input to the selected country
  };

  const handleTemperatureRangeSelect = (value) => {
    setSelectedTemperatureRange(value);
    setSearchInput(""); // Reset search input when a temperature range is selected
    console.log("Filtered Temperature Data:", filteredTemperatureData);
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
    console.log("Checking temperature range:", [min, max]);

    return temperature >= min && temperature <= max;
  };

  const parseTemperatureRange = (temperatureRange) => {
    const regex = /(-?\d+)°C to (-?\d+)°C/;
    const match = temperatureRange.match(regex);

    if (match) {
      const [, min, max] = match.map((temp) => parseInt(temp));
      console.log("Parsed temperature range:", [min, max]);
      return [min, max];
    }

    console.log("Invalid temperature range format");
    return [0, 0]; // Default to [0, 0] if the format is not matched
  };
  const filteredTemperatureData = vacationsData.filter((data) => {
    const isTemperatureInRange = checkTemperatureRange(data.temperature);
    console.log("Data:", data);
    console.log("Is Temperature In Range:", isTemperatureInRange);
    return isTemperatureInRange;
  });

  console.log("Filtered Temperature Data:", filteredTemperatureData);

  return (
    <Box>
      <Flex align="center" gap={6} mt={4} px="10" py={2}>
        <Menu variant="popover">
          <MenuButton
            as={Button}
            rounded="full"
            bg="white"
            color="gray.800"
            boxShadow="lg"
            rightIcon={<ChevronDownIcon />}
          >
            {selectedCountry}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleCountrySelect("Maldives")}>
              Maldives
            </MenuItem>
            <MenuItem onClick={() => handleCountrySelect("Indonesia")}>
              Indonesia
            </MenuItem>
            <MenuItem onClick={() => handleCountrySelect("France")}>
              France
            </MenuItem>
            <MenuItem onClick={() => handleCountrySelect("Greece")}>
             Greece
            </MenuItem>
            <MenuItem onClick={() => handleCountrySelect("Japan")}>
              Japan
            </MenuItem>
            <MenuItem onClick={() => handleCountrySelect("South Africa")}>
             South Africa
            </MenuItem>
          </MenuList>
        </Menu>

        {/* <Menu variant="popover">
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
              25°C  to 30°C
            </MenuItem>
          </MenuList>
        
        </Menu> */}

        <Box mx={4} width="500px">
          <InputGroup rounded="full">
            <InputLeftElement pointerEvents="none" rounded="full">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search..."
              rounded="full"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </InputGroup>
        </Box>
      </Flex>

      {/* <VacationCard filteredData={filteredTemperatureData} />*/}

      <VacationCard
        filteredData={vacationsData.filter((item) =>
          item.location.toLowerCase().includes(searchInput.toLowerCase())
        )}
      />

      {vacationsData.filter((item) =>
        item.location.toLowerCase().includes(searchInput.toLowerCase())
      ).length === 0 && handleSearchNotFound()}

      {/* {vacationsData.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))?.map((item) => (
        <VacationCard
          key={item.id}
          // data={item}
          // loading={loading}
          // error={error}
        />
        // <p>{item.name}</p>
      ))} */}
    </Box>
  );
};

export default DropdownButtonWithSearch;
