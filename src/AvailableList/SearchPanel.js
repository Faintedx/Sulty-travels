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
  InputRightElement,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

import VacationCard from "./VacationList";
import vacationsData from './data.json'

const DropdownButtonWithSearch = () => {
  const [selectedContinent, setSelectedContinent] = useState("Continent");
  const [selectedTemperatureRange, setSelectedTemperatureRange] =
    useState("Temperature range");

  const [searchInput, setSearchInput] = useState("");
  const [searchedData, setSearchedData] = useState(null);

  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleContinentSelect = (value) => {
    setSelectedContinent(value);
    setSearchInput(""); // Reset search input when a continent is selected
  };

  const handleTemperatureRangeSelect = (value) => {
    setSelectedTemperatureRange(value);
    setSearchInput(""); // Reset search input when a temperature range is selected
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      // Simulate asynchronous operation with setTimeout
      // In a real-world scenario, you would fetch data from an API
      const filteredData = vacationsData.filter((item) =>
            item.name.toLowerCase().includes(searchInput.toLowerCase())
          )
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Flex align="center" justify="space-around" mt={4} px="10" py={2}>
      <Menu variant="popover">
          <MenuButton
            as={Button}
            rounded="full"
            bg="white"
            color="gray.800"
            boxShadow="lg"
            rightIcon={<ChevronDownIcon />}
          >
            {selectedContinent}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleContinentSelect("Paris")}>
            Paris
            </MenuItem>
            <MenuItem onClick={() => handleContinentSelect("Santorini")}>
             Santorini
            </MenuItem>
            <MenuItem onClick={() => handleContinentSelect("Maldives")}>
            Maldives
            </MenuItem>
          </MenuList>
        </Menu>
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
              onClick={() => handleTemperatureRangeSelect("25°C and above")}
            >
              25°C and above
            </MenuItem>
          </MenuList>
        </Menu>
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
            <InputRightElement>
              <Button
                rounded="full"
                bg="white"
                width="full"
                color="gray.800"
                boxShadow="md"
                onClick={handleSearch}
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>

      <VacationCard
          // key={item.id}
          // data={item}
          // loading={loading}
          // error={error}
          filteredData={vacationsData.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))}
        />
     
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
