import React from "react";
import { Container } from "@chakra-ui/react";
import Hero from './Hero'
import DatePanel from "./DatePanel";
import Card from './Card'
import Card2 from "./Card2";
import ProfileCards from './HorizontalCards'
import PreFooter from './PreFooter'
import Footer from "./Footer"

const Homepage = () => {
  return (
    <Container maxW="full" overflowY="hidden" px={0}>
      <Hero />
      <DatePanel />
      <Card />
      <Card2 />
      <ProfileCards/>
      <PreFooter/>
      <Footer/>
    </Container>
  );
};

export default Homepage;
