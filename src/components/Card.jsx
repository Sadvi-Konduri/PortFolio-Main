import { Box, Image, Text, Button, Link, Stack, Flex } from "@chakra-ui/react";
import "./Card.css"
const CardDemo = ({imgUrl, title, Description, gitlink, demolink}) => {
  return (
    <>
    <Box className="card">
        <Box className="card-image">
          <Image src={imgUrl} alt="Project Image"  />
        </Box>

        <Box className="card-content">
          <Text className="card-title">{title}</Text>
          <Text className="card-description">{Description}</Text>
          <Flex className="card-buttons" gap={"70px"}>
            <Link href={gitlink} isExternal>
              <Button className="butt" color={"white"}>GitHub Repo</Button>
            </Link>
            <Link href={demolink} isExternal>
              <Button className="butt" color={"white"}>Live Demo</Button>
            </Link>
          </Flex>
        </Box>
     </Box> 
    
    
    </>
    // <Box>
    //   <Box 
    //   maxW="400px" 
    //   borderWidth="1px" 
    //   borderRadius="lg" 
    //   overflow="hidden" 
    //   boxShadow="lg"
      
    //   _hover={{ transform: "scale(1.02)", transition: "0.3s ease-in-out" }}
    // >
    //   {/* Project Image */}
    //   <Box>
        
    //   </Box>
    //   <Box h={"200px"} w={"50%"} justifyContent={"center"}>
    //   <Image 
    //     src={imgUrl} 
    //     alt="Project Image" 
    //     objectFit="cover"
    //     height="200px"
    //     width="100%"
    //   />
    //   </Box>
     

    //   {/* Project Details */}
    //   <Box p="5">
    //     <Text fontSize="xl" fontWeight="bold" mb="2">{title}</Text>
    //     <Text color="gray.600" fontSize="sm" mb="4">
    //       {Description}
    //     </Text>

    //     {/* Buttons for GitHub & Demo */}
    //     <Stack direction="row" spacing={4}>
    //       <Link href={gitlink} isExternal>
    //         <Button colorScheme="gray" variant="outline">GitHub Repo</Button>
    //       </Link>
    //       <Link href={demolink} isExternal>
    //         <Button colorScheme="blue">Live Demo</Button>
    //       </Link>
    //     </Stack>
    //   </Box>
    // </Box>
    // </Box>
    
  );
};

export default CardDemo;
