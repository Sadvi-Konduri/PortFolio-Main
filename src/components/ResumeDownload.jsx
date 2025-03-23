import React from "react";
import { Button, Link, Flex, Text } from "@chakra-ui/react";

const ResumeDownload = () => {
  // Path to the resume PDF in the public folder
  const resumeLink = "/resume.pdf";

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="50vh" /* Reduced height for compact layout */
      width="100%"
      sx={{
        background: "linear-gradient(135deg, rgba(45, 74, 177, 0.7), rgba(28, 35, 67, 0.9))",
        padding: "20px", /* Reduced padding */
      }}
    >
      {/* Resume Text */}
      <Text
        fontSize="32px" /* Larger font size */
        fontWeight="bold"
        color="white" /* White text for better contrast */
        fontFamily="'Poppins', sans-serif" /* Modern sans-serif font */
        mb="4"
        sx={{
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)", /* Subtle text shadow */
        }}
      >
        RESUME
      </Text>
      <Text
        fontSize="18px" /* Slightly larger font size */
        color="#c7d8ff" /* Light blue for better contrast */
        fontFamily="'Poppins', sans-serif"
        lineHeight="1.6"
        maxWidth="800px"
        textAlign="center"
        mb="8"
      >
        You can view my latest resume and learn more about my skills and experience.
      </Text>

      {/* View Resume Button */}
      <Link href={resumeLink} isExternal>
        <Button
          sx={{
            background: "linear-gradient(135deg, #0073e6, #004080)", /* Gradient button */
            color: "white",
            borderRadius: "25px",
            padding: "15px 30px",
            fontSize: "18px",
            fontWeight: "bold",
            _hover: {
              background: "linear-gradient(135deg, #004080, #0073e6)", /* Reverse gradient on hover */
              transform: "scale(1.05)",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Resume
        </Button>
      </Link>
    </Flex>
  );
};

export default ResumeDownload;