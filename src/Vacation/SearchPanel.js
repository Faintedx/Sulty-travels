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
import Loader from '../Components/Loader'; // Importing Loader component for displaying loading state
import { Link } from 'react-router-dom'; // Importing Link component for navigation
import VacationCard from "./VacationList"; // Importing VacationCard component
import vacationsData from "./data.json"; // Importing vacation data

const DropdownButtonWithSearch = () => {
  // State variables for selected country, temperature range, search input, loading, and error
  const [selectedCountry, setSelectedCountry] = useState("Country");
  const [selectedTemperatureRange, setSelectedTemperatureRange] = useState("Temperature range");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for fetching data
  const [searchLoading, setSearchLoading] = useState(false); // Loading state for search operation
  const [error, setError] = useState(null); // Error state for handling errors

  // Function to handle country selection from dropdown menu
  const handleCountrySelect = (value) => {
    setLoading(true); // Set loading state to true
    setSelectedCountry(value); // Set selected country
    setSearchInput(value); // Set search input to the selected country
    setTimeout(() => {
      setLoading(false); // Set loading state to false after a delay (simulating loading)
    }, 2000);
  };

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setLoading(true); // Set loading state to true
    setSearchInput(e.target.value); // Update search input
    setSearchLoading(true); // Set search loading state to true

    // Simulate an API call or other asynchronous operation for search
    setTimeout(() => {
      setSearchLoading(false); // Set search loading state to false after a delay (simulating loading)
      setLoading(false); // Set loading state to false after the asynchronous operation
    }, 2000);
  };

  // Toast hook for displaying notifications
  const toast = useToast();

  // Function to handle search not found notification
  const handleSearchNotFound = () => {
    if (!loading) {
      // Show toast only if the loading is complete
      toast({
        title: "No available vacation area in the entered location",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <Box>
      {/* Flex container for dropdowns, button, and search input */}
      <Flex align="center" gap={6} mt={4} px="10" py={2}>
        {/* Dropdown menu for selecting countries */}
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
            {/* Menu items for countries */}
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

        {/* Button for filtering by temperature range */}
        <Link to="/temperature-range">
          <Button rounded="full" bg="white" color="gray.800" boxShadow="lg">
            Filter By Temperature Range
          </Button>
        </Link>

        {/* Search input for searching by location */}
        <Box mx={4} width="300px">
          <InputGroup rounded="full">
            <InputLeftElement pointerEvents="none" rounded="full">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search by location"
              rounded="full"
              value={searchInput}
              onChange={handleSearchInputChange}
              onInput={handleSearchInputChange}
            />
          </InputGroup>
        </Box>
      </Flex>

      {/* Display loader while fetching data */}
      {loading && <Loader />}
      
      {/* Display loader while searching */}
      {searchLoading && <Loader />}

      {/* Display vacation cards after loading or searching */}
      {!loading && !searchLoading && (
        <VacationCard
          loading={loading}
          searchLoading={searchLoading}
          filteredData={vacationsData.filter((item) =>
            item.location.toLowerCase().includes(searchInput.toLowerCase())
          )}
        />
      )}

      {/* Display notification if no search results */}
      {vacationsData.filter((item) =>
        item.location.toLowerCase().includes(searchInput.toLowerCase())
      ).length === 0 && handleSearchNotFound()}
    </Box>
  );
};

export default DropdownButtonWithSearch;
