import React from "react";
import { Container } from "@chakra-ui/react";
import AvailableList from './SearchPanel'


const Homepage = () => {
  return (
    <Container maxW="full" overflowY="hidden" px={0}>
      <AvailableList/>
    </Container>
  );
};

export default Homepage;
