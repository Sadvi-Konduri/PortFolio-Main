import { Box, Flex, Text, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import React from "react";
import "./work.css";
import developer from "./developer.gif";

const KnowMe = () => {
  return (
    <Box 
      w="100%" 
      minH="400px" 
      color="white" 
      py={12} 
      px={{ base: 6, md: 16 }} 
      className="knowme"
      bg="linear-gradient(135deg, rgba(25, 25, 112, 0.9), rgba(0, 0, 0, 0.9))"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        justify="center"
        flexWrap="wrap"
        gap={10}
      >
        {/* Left Section (Text Content) */}
        <Box flex="1" minW="320px" textAlign={{ base: "center", md: "left" }}>
          <Text 
            fontSize="42px" 
            fontWeight="bold" 
            fontFamily="'Montserrat', sans-serif" 
            mb={10} 
            textShadow="2px 2px 6px rgba(0, 0, 0, 0.4)"
          >
            Know Who I Am!
          </Text>

          <Text fontSize="lg" mb={3} fontFamily="'Poppins', sans-serif">
            Hi everyone, I'm{" "}
            <Text as="span" fontWeight="bold" color="red">
              Konduri Sadvi
            </Text>{" "}
            from{" "}
            <Text as="span" fontWeight="bold" color="lightgreen">
              Kandhukur, Andhra Pradesh, India.
            </Text>
          </Text>

          <Text fontSize="lg" mb={3} fontFamily="'Poppins', sans-serif">
            I am currently a student at{" "}
            <Text as="span" fontWeight="bold" color="red">
              Lakireddy Bali Reddy College of Engineering.
            </Text>
          </Text>

          <Text fontSize="lg" mb={4} fontFamily="'Poppins', sans-serif">
            I am studying **Computer Science.**
          </Text>

          <Text fontSize="lg" mb={3} fontFamily="'Poppins', sans-serif">
            Apart from coding, I love:
          </Text>

          {/* Hobbies List */}
          <List spacing={3} fontSize="lg" fontFamily="'Poppins', sans-serif">
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.400" />
              Watching Movies
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.400" />
              Solving real-time problems
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="green.400" />
              Playing Chess
            </ListItem>
          </List>
        </Box>

        {/* Right Section (Image) */}
        <Box 
          flex="1" 
          minW="320px" 
          display="flex" 
          justifyContent="center"
        >
          <Image
            src={developer}
            alt="Sadvi Coding"
            borderRadius="md"
            boxShadow="2xl"
            maxW="80%"
            className="animated-gif"
            objectFit="cover"
            transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)", boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.3)" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default KnowMe;
