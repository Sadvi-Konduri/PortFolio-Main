import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import CardDemo from "./Card";
import threads from "../assets/threads.jpg";
import food from "../assets/Bank.jpg";
import xclone from "../assets/xclone.jpg";

const Projects = () => {
  const projects = [
    {
      imgUrl: threads,
      title: "Recipe Heaven",
      Description:
        "Developed a MERN stack Recipe Application with user authentication, recipe creation, management, and favoriting features.",
      gitlink: "https://github.com/Sadvi-Konduri/Recipe",
      demolink: "",
    },
    {
      imgUrl: xclone,
      title: "Bank Managnement System",
      Description:
        "Developed a Bank Management System with HTML, CSS, JavaScript, JSP, JDBC, and Oracle, enabling secure authentication, transactions, and data management.",
      gitlink: "https://github.com/Sadvi-Konduri/Bank",
      demolink: "",
    },
    {
      imgUrl: food,
      title: "XClone",
      Description:
        "Developed a MERN stack Twitter-like Social Media Application with user authentication, posts, comments, likes, followers, and real-time notifications in a group project.",
      gitlink: "https://github.com/Sadvi-Konduri/xclone",
      demolink: "",
    },
  ];

  return (
    <Flex
      direction="column"
      alignItems="center"
      width="100%"
      p="6"
      bg="linear-gradient(135deg, rgba(45, 74, 177, 0.7), rgba(28, 35, 67, 0.9))"
      minH="100vh"
    >
      {/* Centered Heading */}
      <Box textAlign="center" mb="5">
        <Text
          fontFamily="'Montserrat', sans-serif"
          fontSize="42px"
          fontWeight="bold"
          color="white"
          letterSpacing="1px"
          textShadow="2px 2px 6px rgba(0, 0, 0, 0.3)"
        >
          My Projects
        </Text>
        <Text
          fontSize="20px"
          fontFamily="'Poppins', sans-serif"
          color="#c7d8ff"
          mt="2"
        >
          Explore my latest creations 🚀
        </Text>
      </Box>

      {/* Scrollable Project Cards */}
      <Box
        width="100%"
        p="4"
        overflowX={{ base: "auto", md: "hidden" }}
        display="flex"
        justifyContent="center"
      >
        <Flex
          width={{ base: "100%", md: projects.length > 2 ? "max-content" : "100%" }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          justifyContent="center"
          alignItems="center"
          gap="40px"
        >
          {projects.map((project, index) => (
            <Box 
              key={index} 
              minW={{ base: "100%", sm: "80%", md: "420px" }}
              transition="transform 0.3s ease, box-shadow 0.3s ease"
              _hover={{ transform: "scale(1.05)", boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
            >
              <CardDemo {...project} />
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Projects;
