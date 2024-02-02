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

export default function TopNav() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Container maxW="7xl" fontFamily='poppins'>
      <Box>
        <Flex
          bg={"white"}
          color="#000000"
          py={{ base: 1 }}
          align={"center"}
          justify={"space-between"}
         
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
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

          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} fontWeight='600' color="#0575E6">
            <Link to="/">
             Sulty <br></br> Travels
            </Link>

           
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
          >
            <DesktopNav />
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Container>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} align={"center"} spacing={10}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <NavLink to={navItem.href}>
                <Text fontSize={"md"}>{navItem.label}</Text>
              </NavLink>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
      {/* Add the button here */}
      <Button colorScheme="blue" variant="solid" as={Link} to='/log-in'>
       Book A Trip
      </Button>
    </Stack>
  );
};


const MobileNav = () => {
  return (
    <Stack bg={"white"} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

type MobileNavItemProps = {
  label: string;
  href: string;
};
const MobileNavItem = ({ label, href }: MobileNavItemProps) => {
  const { onToggle } = useDisclosure();

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
      </Flex>
    </Stack>
  );
};

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
