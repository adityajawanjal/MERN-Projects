import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import jwtDecode from "jwt-decode";
import { getSingleUser } from "../services/api";

const Profile = () => {
  const [info, setInfo] = useState({});
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const auth = localStorage.getItem("user");
    const fetchDetails = async () => {
      const decode = jwtDecode(auth);
      const data = await getSingleUser(decode.id);
      setInfo(data);
      setBlogs(data.blogs);
    };
    fetchDetails();
  }, []);
  return (
    <>
      <Heading textAlign={"center"} m={"8"}>
        {info.name}
      </Heading>
      <Center>
        <Image
          src={`http://localhost:5000/${info.picUrl}`}
          alt="pica"
          w={"96"}
          h={"60"}
          borderRadius={"3xl"}
        />
      </Center>
      <HStack wrap={"wrap"} m={"8"} gap={5}>
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
                  <Image
                    src={`http://localhost:5000/${info.picUrl}`}
                    alt="pa"
                    borderRadius={"50%"}
                    w={"10"}
                    h={"10"}
                  />
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
                  Read more...
                </Box>
              </VStack>
            </Box>
          );
        })}
      </HStack>
    </>
  );
};

export default Profile;
