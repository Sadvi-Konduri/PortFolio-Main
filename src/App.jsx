import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/certificates";
import Resume from "./components/ResumeDownload";
import Connect from "./components/contact/Connect";
import KnowMe from "./components/contact/KnowMe";
import Skillset from "./components/contact/skillSet";
import ContactForm from "./components/contact/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <Box w="100%" maxWidth="100vw" overflowX="hidden" minH="100vh" display="flex" flexDirection="column">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Flex direction="column" flex={1}>
        <Flex w="100%" id="home">
          <Home />
        </Flex>
        <Flex w="100%" id="about">
          <About />
        </Flex>
        <Flex w="100%" id="projects">
          <Projects />
        </Flex>
        <Flex w="100%" id="certificates">
          <Certificates />
        </Flex>
        <Flex w="100%" id="Resume">
          <Resume />
        </Flex>
        <Flex w="100%" id="connect" p="20px">
          <Connect />
        </Flex>
        <Flex w="100%" id="know" p="20px">
          <KnowMe />
        </Flex>
        <Flex w="100%" id="skills" p="20px">
          <Skillset />
        </Flex>
        <Flex w="100%" id="contact" p="20px">
          <ContactForm />
        </Flex>
      </Flex>

      {/* Footer */}
      <Flex w="100%" id="footer" p="20px" mt="auto">
        <Footer />
      </Flex>
    </Box>
  );
}

export default App;