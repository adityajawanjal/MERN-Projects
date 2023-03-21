import React from "react";
import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const Right = () => {
  return (
    <>
      <Box>
        <Heading as={"h3"} w={"full"} fontSize={"1.5rem"} mb={"10"}>
          Our Members
        </Heading>
        <Container maxW={"container.sm"}>
          <Stack gap={2}>
            <HStack gap={3} border={"1px solid red"} borderRadius={"3xl"} p={"3"}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCmRW1I5eS7D_Ev29GviTuqAxVX6VJWPKsTz1MHJpOA&s"
                alt="pa"
                borderRadius={"50%"}
                w={"10"}
                h={"10"}
              />
              <Text noOfLines={1}>Aditya</Text>
            </HStack>
            {/* extra */}
            <HStack gap={3} border={"1px solid red"} borderRadius={"3xl"} p={"3"}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCmRW1I5eS7D_Ev29GviTuqAxVX6VJWPKsTz1MHJpOA&s"
                alt="pa"
                borderRadius={"50%"}
                w={"10"}
                h={"10"}
              />
              <Text noOfLines={1}>Aditya</Text>
            </HStack>
            {/* extraend */}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Right;
