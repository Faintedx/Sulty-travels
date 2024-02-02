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
import Loader from '../Loader'
import {Link} from 'react-router-dom'

import VacationCard from "./VacationList";
import vacationsData from "./data.json";

const DropdownButtonWithSearch = () => {
  const [selectedCountry, setSelectedCountry] = useState("Country");
  const [selectedTemperatureRange, setSelectedTemperatureRange] =
    useState("Temperature range");

  const [searchInput, setSearchInput] = useState("");
  const [searchedData, setSearchedData] = useState(null);

  const [loading, setLoading] = useState(false); // Loading state
   const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState(null); // Error state

 const handleCountrySelect = (value) => {
   setLoading(true); // Set loading to true before starting the filtering process
   setSelectedCountry(value);
   setSearchInput(value); // Set search input to the selected country
   setTimeout(() => {
     setLoading(false); // Set loading to false after the delay (simulating loading)
   }, 2000);
 };

  const handleSearchInputChange = (e) => {
    setLoading(true); // Set loading to true immediately
    setSearchInput(e.target.value);
    setSearchLoading(true); // Set search loading to true

    // Simulate an API call or other asynchronous operation for search
    setTimeout(() => {
      setSearchLoading(false); // Set search loading to false after the delay (simulating loading)
      setLoading(false); // Set loading to false after the asynchronous operation
    }, 2000);
  };

  
 
  const toast = useToast();

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

        <Link to="/temperature-range">
          <Button rounded="full" bg="white" color="gray.800" boxShadow="lg">
            Filter By Temperature Range
          </Button>
        </Link>

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
      {loading && <Loader />}
      {/* Display loading message if loading state is true */}
      {searchLoading && <Loader />}
      {/* Display search loading message if search loading state is true */}
      {!loading && !searchLoading && (
        <VacationCard
          loading={loading}
          searchLoading={searchLoading}
          filteredData={vacationsData.filter((item) =>
            item.location.toLowerCase().includes(searchInput.toLowerCase())
          )}
        />
      )}
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
