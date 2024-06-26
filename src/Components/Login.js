import React, { useState } from "react";
import {
  Container,
  Grid,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  EmailIcon,
  LockIcon,
  CheckCircleIcon,
  CloseIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from "../Redux/authSlice";
import Loader from "./Loader";
import Onboard from "../assets/Bg.png";
import Footer from '../Homepage/Footer';

// LoginPage component
const LoginPage = () => {
  // State variables
  const [emailaddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailAddressVerified, setIsEmailAddressVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Hooks
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to verify email address
  const verifyEmailAddress = (inputEmailAddress) => {
    const correctEmailAddress = "Sulty"; // Change this to the correct username
    return inputEmailAddress === correctEmailAddress;
  };

  // Event handler for email address change
  const handleEmailAddressChange = (event) => {
    const newEmailAddress = event.target.value;
    setEmailAddress(newEmailAddress);
    setIsEmailAddressVerified(verifyEmailAddress(newEmailAddress));
    setIsLoginError(false);
  };

  // Event handler for password change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Event handler for toggling password visibility
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Event handler for form submission
  const handleSubmit = () => {
    if (emailaddress.trim() === "" || password.trim() === "") {
      toast({
        title: "Error",
        description: "Please fill in both email address and password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setIsLoading(false); // Stop loading
      return; // Stop further execution
    }
    // Handle form submission here
    setIsLoading(true); // Start loading

    // Simulate loading for 2 seconds
    setTimeout(() => {
      if (emailaddress === "Sulty" && password === "Sulty") {
        // Successful login
        console.log("Login successful!");
        navigate("/book-a-trip");
        dispatch(login({ username: "exampleUser" }));
      } else {
        // Incorrect username or password
        toast({
          title: "Error",
          description: "Invalid username or password.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setIsLoading(false); // Stop loading on error
        setIsLoginError("Username or password does not match any account"); // Set login error state
      }
    }, 2000);
  };

  // JSX rendering
  return (
    <Container maxWidth="100vw" bg="white" px={0} pt="10">
      <Grid templateColumns={{ base: "1fr", md: "4fr 6fr" }} fontFamily="poppins">
        {/* Background image */}
        <Box
          backgroundImage={`url(${Onboard})`}
          backgroundSize="cover"
          backgroundPosition="center"
          height="full"
          display={{ base: "none", md: "flex" }}
          data-aos="fade-up"
          data-aos-duration="2000"
          color="white"
          justifyContent='center'
        >
          <Box textAlign="center" mt='40'>
            <Heading fontFamily="poppins" fontWeight="600" mb={2} textAlign="center" color="white">
              Your next Holiday
            </Heading>
            <Text fontSize="16px" textAlign="left" color="white">
              Where would you like to go...
            </Text>
            <Button my="45px" color="white" bg="#0575E6" _hover={{ bg: "#0575e6", opacity: "0.9" }} rounded="25px" fontWeight="400">
              Read more
            </Button>
          </Box>
        </Box>

        {/* Login form */}
        <Box
          color="white"
          bg="white"
          textAlign="left"
          mx="auto"
          mt="100"
          fontFamily="poppins"
          height="100vh"
          width={{ base: "80%", md: "500px" }}
        >
          <Heading fontFamily="poppins" fontWeight="600" mb={2} textAlign="left" color="black" data-aos="fade-up" data-aos-duration="2000">
            Hello Again!
          </Heading>
          <Text fontSize="16px" data-aos="fade-up" data-aos-duration="2000" color="#333333">
            Welcome Back
          </Text>
          <Box p={0} my={{ base: "0", md: "0" }}>
            {isLoginError && (
              <Text textAlign="center" color="#CB29BE" data-aos="fade-up" data-aos-duration="1000">
                {isLoginError}
              </Text>
            )}

            {/* Email address input */}
            <FormControl data-aos="fade-up" data-aos-duration="2000">
              <FormLabel>Email address</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<EmailIcon color="#333333" />} />
                <Input
                  type="text"
                  value={emailaddress}
                  onChange={handleEmailAddressChange}
                  onFocus={() => setIsLoginError("")}
                  pr={isEmailAddressVerified ? "2.5rem" : "0.5rem"}
                  borderRadius="25px"
                  bg="white"
                  color="#333333"
                  placeholder="E.g SultyTravels@gmail.com"
                  fontFamily="poppins"
                />
                {/* Email address verification icons */}
                {isEmailAddressVerified ? (
                  <InputRightElement children={<CheckCircleIcon color="#CB29BE" />} />
                ) : (
                  emailaddress && (
                    <InputRightElement children={<CloseIcon color="#CB29BE" />} />
                  )
                )}
              </InputGroup>
            </FormControl>

            {/* Password input */}
            <FormControl mt={2} mb="3" data-aos="fade-up" data-aos-duration="2000">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<LockIcon color="#333333" />} />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  onFocus={() => setIsLoginError("")}
                  placeholder="Password"
                  borderRadius="25px"
                  color="#333333"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleTogglePassword}
                    bg="white"
                    _hover={{ bg: "inherit" }}
                    _active={{ bg: "inherit" }}
                  >
                    {/* Password visibility toggle */}
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            {/* Login button */}
            <Button
              my="45px"
              color="white"
              bg="#0575E6"
              onClick={handleSubmit}
              _hover={{ bg: "#0575e6", opacity: "0.9" }}
              rounded="25px"
              width="full"
              fontWeight="400"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {/* Conditional rendering of login button */}
              {isLoading ? (
                <>
                  <Loader />
                  Logging in
                </>
              ) : (
                "Log in"
              )}
            </Button>

            <Text color="#333333" textAlign="center">
              Forgot Password
            </Text>
          </Box>
        </Box>
      </Grid>

      {/* Footer */}
      <Footer />
    </Container>
  );
};

export default LoginPage;
