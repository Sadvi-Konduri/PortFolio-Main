import { Flex, Grid, Text } from '@chakra-ui/react'

import React from 'react'
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMongodb, SiC, SiHtml5, SiCss3, SiTailwindcss, SiThreedotjs } from "react-icons/si";
import "./skill.css"
const skillSet = () => {

  const Items=()=>[
    {icon:SiC},
    {icon:FaPython},
    {icon:FaJava},
    { icon: SiHtml5 },
    { icon: SiCss3 },
    { icon: FaReact },
    { icon: SiMongodb },
    { icon: FaGitAlt },
    { icon: SiTailwindcss },
    { icon: SiJavascript },
  ]
  return (

    <Flex height={"100vh"} width={"100vw"} justifyContent={"center"}  direction={"column"} >
      <Flex  justifyContent={"center"} textAlign={"center"} mb={"450px"} position={"relative"} >
      <Text fontSize={"50px"} fontweight={"bold"} fontStyle={"italic"} fontfamily={"new-roman"} color={"white"}> Proffessional <span style={{color:"red"}}>SkillSet</span></Text>
      </Flex>
      {/* <Grid templateColumns={"repeat(2,2fr)"} 
      templateRows={"repeat(2,2fr)"}
      gap={4}
      ml={"40px"}
      mt={"60px"}
      > */}
      <div className='skills' >
        {Items().map((item)=>(
          <Flex
            key={item.icon}
            justifyContent={"center"}
            gap={"50px"}
            p={"60px"}
           alignItems={"center"} 
            flexDirection={"column"}
            
           
            borderRadius={"20px"}
            bg={"linear-gradient(to left, rgb(4, 224, 231), rgba(53, 60, 59, 0.5))"}
            _hover={{
              bg: "linear-gradient(to left,  rgba(53, 60, 59, 0.5),  rgb(97, 140, 152))",
              transform: "scale(1.06)",
              boxShadow: "5px 5px 10px rgb(141, 164, 180)",
            }}
           
            
         
           
          >
            <item.icon size={"50px"} color={"white"} />
          </Flex>
        ))}
      </div>
      {/* </Grid> */}
      
      
     
      
    </Flex>
  )
}

export default skillSet