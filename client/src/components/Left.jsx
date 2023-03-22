import React, { useRef, useState } from "react";
import { Box, Button, Input, VStack, Textarea } from "@chakra-ui/react";
import { addBlog } from "../services/api";

const Left = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [pic, setPic] = useState();

  const ref = useRef();
  const auth = localStorage.getItem("user");

  const handleAddBlog = async () => {
    if (!auth) {
      console.log("give toast to register first.");
    } else {
      const file = new FormData();
      file.append("title", title);
      file.append("description", description);
      file.append("picName", pic.name);
      file.append("file", pic);

      const result = await addBlog(file);
      console.log(result);
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
            Upload Thumbnail
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
