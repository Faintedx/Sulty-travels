import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  useDisclosure,
  Button,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";

// Functional component TopNav
export default function TopNav() {
  // State to manage the visibility of mobile navigation
  const { isOpen, onToggle } = useDisclosure();

  // Rendering JSX for the component
  return (
    <Container maxW="1400px" fontFamily='poppins'>
      <Box>
        {/* Desktop and mobile navigation */}
        <Flex
          bg={"white"}
          color="#000000"
          py={{ base: 1 }}
          align={"center"}
          justify={"space-between"}
        >
          {/* Hamburger icon for mobile navigation */}
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
            position="absolute"
            right='4'
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          {/* Logo and title */}
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} fontWeight='600' color="#0575E6">
            <Link to="/">
             Sulty <br></br> Travels
            </Link>
          </Flex>

          {/* Desktop navigation */}
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            display={{ base: "none", md: "flex" }}
          >
            <DesktopNav />
          </Stack>
        </Flex>

        {/* Mobile navigation */}
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Container>
  );
}

// Functional component for desktop navigation
const DesktopNav = () => {
  return (
    <Stack direction={"row"} align={"center"} spacing={10}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              {/* NavLink for navigation items */}
              <NavLink to={navItem.href}>
                <Text fontSize={"md"}>{navItem.label}</Text>
              </NavLink>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
      {/* Button for booking a trip */}
      <Button colorScheme="blue" variant="solid" as={Link} to='/log-in'>
       Book A Trip
      </Button>
    </Stack>
  );
};

// Functional component for mobile navigation
const MobileNav = () => {
  return (
    <Stack bg={"white"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

// Type for mobile navigation item props
type MobileNavItemProps = {
  label: string;
  href: string;
};

// Functional component for each mobile navigation item
const MobileNavItem = ({ label, href }: MobileNavItemProps) => {
  const { onToggle } = useDisclosure();

  // Rendering JSX for each mobile navigation item
  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={NavLink}
        to={href}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text>{label}</Text>
          {/* Button for booking a trip */}
     
      </Flex>
    
    </Stack>
  );
};

// Navigation items
const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "News",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
  {
    label: "Services",
    href: "/",
  },
];
