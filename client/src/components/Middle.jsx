import React from "react";
import {
  Heading,
  VStack,
  Image,
  Container,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";

const Middle = () => {
  return (
    <>
      <Heading as={"h1"} textAlign={"center"}>
        Welcome to our Blogs World !
      </Heading>
      <Container mt={"10"} maxW={"60%"}>
        <Box
          p={"5"}
          borderRadius={"3xl"}
          border={"2px solid red"}
          bgColor={"WindowText"}
          mb={"10"}
        >
          <VStack gap={3}>
            <HStack gap={3}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCmRW1I5eS7D_Ev29GviTuqAxVX6VJWPKsTz1MHJpOA&s"
                alt="pa"
                borderRadius={"50%"}
                w={"10"}
                h={"10"}
              />
              <Heading fontSize={"1.5rem"} noOfLines={2}>
                Economic crises. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Soluta, hic!
              </Heading>
            </HStack>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCmRW1I5eS7D_Ev29GviTuqAxVX6VJWPKsTz1MHJpOA&s"
              alt="pa"
              w={"64"}
              h={"40"}
            />
            <Text noOfLines={3} fontSize={"1.2rem"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              quas labore nam, numquam obcaecati deserunt sapiente eius
              doloremque provident tempora maxime harum quidem! Necessitatibus
              optio soluta impedit atque quibusdam possimus?
            </Text>
            <Box
              alignSelf={"end"}
              fontSize={"1.2rem"}
              color={"lightpink"}
              borderBottom={"1px solid pink"}
              pb={"2px"}
            >
              Read more...
            </Box>
          </VStack>
        </Box>
        {/* extra */}
        <Box
          p={"5"}
          borderRadius={"3xl"}
          border={"2px solid red"}
          bgColor={"WindowText"}
          mb={"10"}
        >
          <VStack gap={3}>
            <HStack gap={3}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCmRW1I5eS7D_Ev29GviTuqAxVX6VJWPKsTz1MHJpOA&s"
                alt="pa"
                borderRadius={"50%"}
                w={"10"}
                h={"10"}
              />
              <Heading fontSize={"1.5rem"} noOfLines={2}>
                Economic crises. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Soluta, hic!
              </Heading>
            </HStack>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCmRW1I5eS7D_Ev29GviTuqAxVX6VJWPKsTz1MHJpOA&s"
              alt="pa"
              w={"64"}
              h={"40"}
            />
            <Text noOfLines={3} fontSize={"1.2rem"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              quas labore nam, numquam obcaecati deserunt sapiente eius
              doloremque provident tempora maxime harum quidem! Necessitatibus
              optio soluta impedit atque quibusdam possimus?
            </Text>
            <Box
              alignSelf={"end"}
              fontSize={"1.2rem"}
              color={"lightpink"}
              borderBottom={"1px solid pink"}
              pb={"2px"}
            >
              Read more...
            </Box>
          </VStack>
        </Box>
        {/* extraend */}
      </Container>
    </>
  );
};

export default Middle;
