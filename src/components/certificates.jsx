import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import CertificateCard from "./CertificateCard";
import cert1 from "../assets/image1.png"; // Replace with your certificate images
import cert2 from "../assets/image2.png";
import cert3 from "../assets/image3.png";
import cert4 from "../assets/image4.png";
import cert5 from "../assets/image5.png";
import cyber from "../assets/certificates/cyber.jpg";
import mern from "../assets/certificates/mern.jpg";
import pcap from "../assets/certificates/PCAP.jpg";
import smart from "../assets/certificates/smart.jpg";
import AWS from "../assets/certificates/AWS.jpg";

const Certificates = () => {
  const certificates = [
    {
      imgUrl: cert4,
      title: "AWS Cloud Practitioner",
      description: "Certified by AWS",
      certLink: AWS,
    },
    
    {
      imgUrl: cert5,
      title: "Bronze Certification",
      description: "Certified by Smart Interviews.",
      certLink: mern,
    },
    {
      imgUrl: cert1,
      title: "Programming Essentials in Python",
      description: "Certified by Python Institute OpenEDG.",
      certLink: pcap, // Link to the certificate image
    },
    {
      imgUrl: cert2,
      title: "Cyber Security Certification",
      description: "Certified in Capgemini.",
      certLink: cyber,
    },
    {
      imgUrl: cert3,
      title: "Mern Stack",
      description: "Certified by Infosys SpringBorad.",
      certLink: mern,
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
          My Certificates
        </Text>
        <Text
          fontSize="20px"
          fontFamily="'Poppins', sans-serif"
          color="#c7d8ff"
          mt="2"
        >
          Explore my Certifications 🚀
        </Text>
      </Box>

      {/* Scrollable Certificate Cards */}
      <Box
        width="100%"
        p="4"
        overflowX={{ base: "auto", md: "hidden" }}
        display="flex"
        justifyContent="center"
      >
        <Flex
          width={{ base: "100%", md: certificates.length > 2 ? "max-content" : "100%" }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          justifyContent="center"
          alignItems="center"
          gap="40px"
        >
          {certificates.map((certificate, index) => (
            <Box
              key={index}
              minW={{ base: "100%", sm: "80%", md: "420px" }}
              transition="transform 0.3s ease, box-shadow 0.3s ease"
              _hover={{ transform: "scale(1.05)", boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
            >
              <CertificateCard {...certificate} />
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Certificates;