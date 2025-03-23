import { Flex, Text, Box } from "@chakra-ui/react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import React from "react";
import "./Header.css";
import { BiSolidHome, BiMessage } from "react-icons/bi";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BsFillAwardFill } from "react-icons/bs";
import { InfoIcon } from "@chakra-ui/icons";
import { FaDiagramProject } from "react-icons/fa6";


const Header = () => {
  return (
    <Flex 
      className="header"
      w="100%" 
      h="80px" 
      align="center" 
      justify="space-between" 
      px={{ base: "10px", md: "20px" }} 
      position="fixed"
      flexWrap="wrap"
    >
      <Text 
        color="red" 
        fontSize="40px" 
        fontFamily="monospace" 
        fontWeight="bold"
      >
        Portfolio
      </Text>

      <Flex 
        gap={{ base: "15px", md: "20px" }} 
        className="nav-links"
      >
        <NavLink to="home">
          <Flex gap="5px" align="center" direction="column">
            <BiSolidHome /> Home
          </Flex>
        </NavLink>
        <NavLink to="about">
          <Flex gap="5px" align="center" direction="column">
            <InfoIcon /> About
          </Flex>
        </NavLink>
        <NavLink to="projects">
          <Flex gap="5px" align="center" direction="column">
            <FaDiagramProject /> Projects
          </Flex>
        </NavLink>
        <NavLink to="certificates">
          <Flex gap="5px" align="center" direction="column">
            <BsFillAwardFill /> Certificates
          </Flex>
        </NavLink>
        <NavLink to="Resume">
          <Flex gap="5px" align="center" direction="column">
            <AiOutlineFilePdf/> Resume
          </Flex>
      </NavLink>
        <NavLink to="contact">
          <Flex gap="5px" align="center" direction="column">
            <BiMessage /> Contact
          </Flex>
        </NavLink>
      </Flex>
    </Flex>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={300}
      offset={-70}
      spy={true}
      className="nav-link"
    >
      {children}
    </Link>
  );
};

export default Header;
