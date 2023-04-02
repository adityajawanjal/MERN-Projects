import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import jwtDecode from "jwt-decode";
import { deleteBlog, getSingleUser } from "../services/api";
import { FiMoreVertical } from "react-icons/fi";

const Profile = () => {
  const [info, setInfo] = useState({});
  const [blogs, setBlogs] = useState([]);

  const toast = useToast();

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




  const removeBlog = async(id) =>{
    await deleteBlog(id);
    toast({
      title: 'Blog Deleted Successfully .',
      description: "The is deleted successfully !",
      status: "success",
      duration: 2000,
      isClosable: true,
      position:"top"
    });
    setTimeout(()=>{window.location.reload()},2000);
  }

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
                <HStack justifyContent={"space-between"}>
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
                  <Menu>
                    <MenuButton as={"button"}>
                      <FiMoreVertical />
                    </MenuButton>
                    <MenuList>
                      <MenuItem color={"blackAlpha.900"} onClick={()=>{removeBlog(e._id)}}>Delete</MenuItem>
                    </MenuList>
                  </Menu>
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
