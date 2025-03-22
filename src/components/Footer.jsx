import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      as="footer"
      width="100%"
      bg="linear-gradient(135deg, #001F3F, #003366)" // Deep Blue Gradient
      py={4}
      boxShadow="0px -4px 10px rgba(0, 0, 0, 0.2)"
    >
      <Flex
        w="100%"
        h="auto"
        flexDirection={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={{ base: "10px", md: "40px" }}
        textAlign={{ base: "center", md: "left" }}
      >
        {/* Designer Credit */}
        <Text
          fontSize={{ base: "18px", md: "20px" }}
          fontFamily="'Pacifico', cursive"
          fontWeight="bold"
          color="lightblue"
          mb={{ base: 2, md: 0 }}
        >
          Designed By Sadvi...
        </Text>

        {/* Copyright Text */}
        <Text
          fontSize={{ base: "16px", md: "20px" }}
          fontFamily="'Poppins', sans-serif"
          fontWeight="medium"
          color="white"
          display={{ base: "block", md: "block" }}
        >
          © 2025 K.S. All Rights Reserved.
        </Text>

        {/* Social Icons */}
        <Flex direction="row" gap={{ base: "12px", md: "20px" }} mt={{ base: 2, md: 0 }}>
          <a href="https://www.linkedin.com/in/sadvi-konduri-579b64299/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size="26px" color="#1DA1F2" className="social-icon" />
          </a>
          <a href="https://github.com/Sadvi-Konduri" target="_blank" rel="noopener noreferrer">
            <BsGithub size="26px" color="white" className="social-icon" />
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kethan09092004@gmail.com&su=Contact%20Me&body=Hi%20there,%20I%20want%20to%20connect%20with%20you!" target="_blank">
            <FaEnvelope size="26px" color="#FF5733" className="social-icon" />
          </a>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
