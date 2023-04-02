import React, { useEffect, useState } from "react";
import {
  Heading,
  VStack,
  Image,
  Container,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";
import { getAllBlogs } from "../services/api";
import { Link, NavLink } from "react-router-dom";

const Middle = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const allBlogs = await getAllBlogs();
      setBlogs(allBlogs);
    };
    fetchBlogs();
  }, []);
  return (
    <>
      <Heading as={"h1"} textAlign={"center"}>
        Welcome to our Blogs World !
      </Heading>
      <Container mt={"10"} maxW={"60%"}>
        {blogs.map((e) => {
          return (
            <Box
              key={e._id}
              p={"5"}
              borderRadius={"3xl"}
              border={"2px solid red"}
              bgColor={"WindowText"}
              mb={"10"}
            >
              <VStack gap={3}>
                <HStack gap={3} w={"full"} justifyContent={"left"}>
                  <Link to={`/single-user/${e.userId._id}`}>
                    <Image
                      src={`http://localhost:5000/${e.userId.picUrl}`}
                      alt="pa"
                      borderRadius={"50%"}
                      w={"10"}
                      h={"10"}
                    />
                  </Link>
                  <Heading fontSize={"1.5rem"} noOfLines={2}>
                    {e.title}
                  </Heading>
                </HStack>
                <Image
                  src={`http://localhost:5000/${e.picUrl}`}
                  alt="pa"
                  w={"64"}
                  h={"40"}
                />
                <Text noOfLines={3} fontSize={"1.2rem"}>
                  {e.description}
                </Text>
                
                <Box
                  alignSelf={"end"}
                  fontSize={"1.2rem"}
                  color={"lightpink"}
                  borderBottom={"1px solid pink"}
                  pb={"2px"}
                >
                  <NavLink to={`/single-blog/${e._id}`}>
                  Read more...
                  </NavLink>
                </Box>
               
              </VStack>
            </Box>
          );
        })}
      </Container>
    </>
  );
};

export default Middle;
