import {
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleBlog, getSingleUser } from "../services/api";

const SingleBlog = () => {
  const params = useParams();
  const [blog, setBlog] = useState([]);
  const [user, setUser] = useState([]);

  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleBlog(params.id);
      if (data) {
        setBlog(data);
        const userInfo = await getSingleUser(data.userId);
        setUser(userInfo);
        console.log(data);
      } else {
        toast({
          title: "No such Blog .",
          description: "Incorrect Blog  !",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    };
    fetchData();
  }, [navigate, params.id, toast]);
  return (
    <>
      <Stack alignItems={"center"} w={"full"} gap={6}>
        <HStack m={"10"} gap={10}>
          <Image
            src={`http://localhost:5000/${user.picUrl}`}
            alt={user.name}
            w={"32"}
            h={"32"}
            borderRadius={"full"}
          />
          <Heading as={"h2"}>{user.name}</Heading>
        </HStack>
        <Image
          src={`http://localhost:5000/${blog.picUrl}`}
          w={"600px"}
          h={"400px"}
        />
        <Heading>{blog.title}</Heading>
        <Text textAlign={"justify"} maxW={"70%"}>   {blog.description} </Text>
      </Stack>
    </>
  );
};

export default SingleBlog;
