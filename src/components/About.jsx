import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import MyPhoto from '../assets/MyPhoto.jpg'; // ✅ Correct import path
import "./About.css";
import { BsArrowBarRight } from 'react-icons/bs';

const About = () => {
  return (
    <Flex flexDirection="column" h="100vh">
      <Box w="100%" h="100vh" className="about">
        <Flex direction="row" justify="center">
          <Text 
            fontFamily="monospace" 
            fontSize="40px" 
            className="text" 
            fontWeight="bold"  
            textAlign="center" 
            whiteSpace="pre-line" 
            mb="auto"
          >
            First Of All {"\n"}
            <span style={{ color: "red" }}>Let Me Introduce Myself</span>
          </Text>
        </Flex>

        <Flex direction="row">
          {/* Left Text Section */}
          <Box w="50%" h="700px" display="flex" ml="70px" p="40px" flexDirection="column">
            <Text fontFamily="monospace" fontSize="20px" fontWeight="bold" whiteSpace="pre-line" p="20px" className="text">
              <p> I am passionate about coding and constantly strive to improve my skills in the MERN stack and data structures & algorithms.</p>
            </Text>
            <Text fontFamily="monospace" fontSize="20px" fontWeight="bold" whiteSpace="pre-line" p="20px" className="text">
              <p> I enjoy building dynamic and responsive web applications, ensuring seamless user experiences with <span style={{ color: "red" }}>React</span> and <span style={{ color: "red" }}>Node.js</span>.</p>
            </Text>
            <Text fontFamily="monospace" fontSize="20px" fontWeight="bold" whiteSpace="pre-line" p="20px" className="text">
              <p>Continuously learning new technologies and staying updated with modern web development trends.</p>
            </Text>
            <Text fontFamily="monospace" fontSize="20px" fontWeight="bold" whiteSpace="pre-line" p="20px" className="text">
              <p>My ultimate aim is to become an expert full-stack developer, mastering both frontend and backend technologies.</p>
            </Text>
          </Box>

          {/* Right Image Section */}
          <Box w="50%" h="700px" display="flex" justifyContent="center" alignItems="center">
            <div className="myPhoto">
              <Image 
                src={MyPhoto} 
                alt="My Profile" 
                h="420px"  
                w="320px" 
                borderRadius="130px" 
                objectFit="cover" 
                boxShadow="lg"
              />
            </div>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default About;
