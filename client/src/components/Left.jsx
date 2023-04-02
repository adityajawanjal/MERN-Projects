import React, { useRef, useState } from "react";
import { Box, Button, Input, VStack, Textarea, Spinner } from "@chakra-ui/react";
import { addBlog } from "../services/api";
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Left = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [pic, setPic] = useState();
  const [loading , setLoading] = useState(false);
  
  const toast = useToast();
  const ref = useRef();
  const navigate = useNavigate();

  const auth = localStorage.getItem("user");

  const handleAddBlog = async () => {
    if (auth){
      setLoading(true);
      const file = new FormData();
      file.append("title", title);
      file.append("description", description);
      file.append("picName", pic.name);
      file.append("file", pic);

      await addBlog(file);
      setLoading(false);
        toast({
          title: "Blog Posted Successfully !",
          description: "Your blog is added.",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position:"top"
        });
        setTimeout(()=>{
          window.location.reload();
        },3000);
    }else{
      toast({
        title: 'Redirecting to Login page.',
        description: "You need to Login or Register first !",
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position:"top"
      });
      setTimeout(()=>{
        navigate("/login");
      },3000);
    }
  };

  return (
    <>
      <Box>
        <VStack gap={3}>
          <Input
            type={"text"}
            placeholder={"Enter your Title."}
            name={"title"}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            size={"lg"}
            h={"40"}
            placeholder={"Write your Blog..."}
            name={"description"}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <Button
            type="button"
            bgColor={"linkedin.200"}
            color={"blackAlpha.900"}
            size={"md"}
            w={"60%"}
            onClick={() => {
              ref.current.click();
            }}
          >
           { loading ? <Spinner size={"md"} thickness={"5px"} speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'/> : "Upload Thumbnail"}
          </Button>
          <input
            type="file"
            name="file"
            id="file"
            ref={ref}
            style={{ display: "none" }}
            onChange={(e) => setPic(e.target.files[0])}
          />
          <Button
            type="button"
            bgColor={"linkedin.200"}
            color={"blackAlpha.900"}
            size={"lg"}
            w={"full"}
            onClick={handleAddBlog}
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default Left;
