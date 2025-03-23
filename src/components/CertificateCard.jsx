import { Box, Image, Text, Button, Link, Flex } from "@chakra-ui/react";
import "./certificatecss.css";

const CertificateCard = ({ imgUrl, title, description, certLink }) => {
  return (
    <Box className="Certificatecard">
      <Box className="Certificatecard-image">
        <Image src={imgUrl} alt="Certificate Image" objectFit="cover" />
      </Box>

      <Box className="Certificatecard-content">
        <Text className="Certificatecard-title">{title}</Text>
        <Text className="Certificatecard-description">{description}</Text>
        <Flex className="Certificatecard-buttons" gap="20px">
          <Link href={certLink} isExternal>
            <Button className="butt" color="white">
              View Certificate
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default CertificateCard;