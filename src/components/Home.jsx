import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import portfolio from "../assets/sadvi.jpg";
import "./Home.css";
import Typing from "react-typing-effect";

const Home = () => {
  return (
    <>
      <Flex 
        direction={{ base: "column", md: "row" }} // Column for mobile, row for larger screens
        flex={1}
        align="center"
        justify="center"
        minH="100vh" // Ensure full viewport height
        w="100vw"
      >
        {/* Left Side: Image */}
        <Flex 
          flex={1} 
          justify="center" 
          align="center" 
          minH="100vh" // Maintain full height
          w="100%"
          overflow="hidden"
        >
          <Image 
            src={portfolio} 
            alt="Portfolio" 
            w="100%" 
            h="100vh" // Set full viewport height
            objectFit="cover" // Ensure the image covers its container
          />
        </Flex>

        {/* Right Side: Text Content */}
        <Flex 
          flex={1} 
          w="100%" 
          minH="100vh" // Ensure full height
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          className="myself"
          p={{ base: "20px", md: "0px" }}
        >
          <Flex direction="column" textAlign="center">
            <Text fontFamily="Times New Roman" fontSize="30px" fontWeight="bold" color={"white"}>
              Hello All 👋!
            </Text>

            <Text 
              fontFamily="Times New Roman" 
              fontSize="40px" 
              fontWeight="bold" 
              mt="20px"
              color={"white"}
            >
              I'm <span style={{ color: "red" }}>Konduri Sadvi</span>
            </Text>

            <Typing 
              speed={40} 
              eraseSpeed={40} 
              typingDelay={1000} 
              eraseDelay={1000} 
              className="typing" 
              text={["Full Stack Developer", "Computer Science Student"]} 
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
