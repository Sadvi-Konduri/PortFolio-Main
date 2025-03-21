import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Input,
  Textarea,
  Button,
  Card,
  CardBody,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !message) {
      toast.error("Please fill in both email and message.");
      return;
    }

    // EmailJS Credentials
    const serviceID = "service_xxxxx"; // Replace with actual Service ID
    const templateID = "template_xxxxx"; // Replace with Template ID
    const publicKey = "xxxxx"; // Replace with Public Key

    const templateParams = { from_email: email, message };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      toast.success("Thank you for contacting 😊");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send email. Please try again.🤞");
    }
  };

  return (
    <Box
      bg="black"
      py={10}
      w="100%"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxW="container.md">
        {/* Contact Me Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            textAlign="center"
            fontWeight="bold"
            color="white"
            mb={6}
            fontSize="40px"
            fontFamily="Poppins, sans-serif"
          >
            Contact <Text as="span" color="red">Me</Text>
          </Heading>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card
            bg="linear-gradient(135deg, rgba(18, 42, 112, 0.9), rgba(39, 27, 76, 0.9))"
            color="white"
            borderRadius="20px"
            boxShadow="0px 10px 40px rgba(255, 0, 0, 0.3)"
            w="420px"
            p={6}
            mx="auto"
          >
            <CardBody>
              <VStack spacing={5} align="center">
                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ width: "100%" }}
                >
                  <Input
                    placeholder="Your Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    border="none"
                    bg="rgba(255, 255, 255, 0.2)"
                    color="white"
                    _placeholder={{ color: "gray.300" }}
                    borderRadius="12px"
                    p="18px"
                    fontSize="16px"
                    w="100%"
                    fontFamily="Poppins, sans-serif"
                    _focus={{ bg: "rgba(255, 255, 255, 0.3)" }}
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  style={{ width: "100%" }}
                >
                  <Textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    border="none"
                    bg="rgba(255, 255, 255, 0.2)"
                    color="white"
                    _placeholder={{ color: "gray.300" }}
                    borderRadius="12px"
                    p="18px"
                    fontSize="16px"
                    w="100%"
                    minH="160px"
                    fontFamily="Poppins, sans-serif"
                    _focus={{ bg: "rgba(255, 255, 255, 0.3)" }}
                  />
                </motion.div>

                {/* Send Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  style={{ width: "100%" }}
                >
                  <Button
                    onClick={handleSubmit}
                    color="white"
                    bg="red"
                    w="100%"
                    h="55px"
                    fontSize="18px"
                    borderRadius="12px"
                    fontFamily="Poppins, sans-serif"
                    _hover={{ bg: "darkred" }}
                  >
                    Send Message
                  </Button>
                </motion.div>
              </VStack>
            </CardBody>
          </Card>
        </motion.div>
      </Container>
      <Toaster />
    </Box>
  );
};

export default ContactForm;
