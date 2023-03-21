import React from "react";
import { Box, Heading, HStack, Image, Input } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <HStack
        h={"28"}
        borderBottom={"1px solid brown"}
        justifyContent={"space-between"}
        pl={"8"}
        pr={"8"}
      >
        <HStack gap={4}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCmRW1I5eS7D_Ev29GviTuqAxVX6VJWPKsTz1MHJpOA&s"
            alt="pa"
            borderRadius={"50%"}
            w={"24"}
            h={"24"}
          />
          <Heading>Bloggers Web</Heading>
        </HStack>
        <Box>
          <Input type={"search"} w={"80"} placeholder={"Search..."} />
        </Box>
        <HStack gap={3}>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/register"}>Register</NavLink>
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
