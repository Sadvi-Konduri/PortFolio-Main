import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import "./../About.css"
const Connect = () => {
  return (
    <Box w={"100%"} h={"100px"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} p={"20px"} bgAttachment={"fixed"} bg={"linear-gradient(to bottom, rgba(8, 5, 8, 0.5), rgba(12, 11, 12, 0.5))"}>
         <Text fontFamily={"new roman"} fontSize={"30px"} fontWeight={"bold"} p={"3px"}color={"red"}>Connect Me on</Text>
         <Text fontFamily={"new roman"} fontSize={"30px"} fontWeight={"bold"} ml={"20px"} color={"white"}>Feel free to contact me</Text>
         <Box cursor={"pointer"}>
         <Flex gap={"20px"} direction={"row"} cursor={"pointer"} >
                 <a href="https://www.instagram.com/kethan9s04/" target="_blank" rel="noopener noreferrer">
                  <BiLogoInstagram size={"30px"} color={"white"} className="insta" />
                </a>
             <a href="https://www.linkedin.com/in/sadvi-konduri-579b64299/" target="_blank" rel="noopener noreferrer">
                  <BiLogoLinkedin size={"30px"} color={"white"} className="insta" />
                 </a>
                <a href="https://github.com/Sadvi-Konduri" target="_blank" rel="noopener noreferrer">
                <BiLogoGithub size={"30px"} color={"white"} className="insta" />
              </a>
            
         </Flex>
         </Box>
         

   </Box> 
  )
}

export default Connect