import React from "react";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";

const Notes = () => {
  return (
    <>
      <Stack
        w={"96"}
        border={"2px solid red"}
        borderRadius={"3xl"}
        p={"5"}
        gap={4}
      >
        <Heading as={"h3"} noOfLines={1}>
          Title
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit
          veniam natus ab quod, omnis earum sint non cumque eaque?
        </Text>
        <Button size={"lg"} bgColor={"linkedin.200"} w={"full"}>
          22 Mar 2023 - 11:15 A.M
        </Button>
      </Stack>
    </>
  );
};

export default Notes;
