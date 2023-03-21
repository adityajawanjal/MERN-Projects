import React, { useState } from "react";
import { Box, Button, Input, VStack, Textarea } from "@chakra-ui/react";
import { addBlog } from "../services/api";

const Left = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [pic, setPic] = useState();

  const handleAddBlog = async () =>{
    const file = new FormData();
    file.append("name",pic.name);
    file.append("file",pic.file);
    const blogInfo = {title,description,file};
    const result = await addBlog(blogInfo);
    console.log(result);
  }

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
            onChange={(e) => setPic(e.target.files[0])}
          >
            Upload Thumbnail
          </Button>
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
