import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import axios from "axios";

const Home = () => {
  const fileRef = useRef();
  const [file, setFile] = useState();
  const [url, seturl] = useState();

  const uploadFile = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/uploads", data);
      return res.data;
    } catch (err) {
      console.log(`The Error in uploadFile is : ${err}`);
    }
  };
  const onUpload = () => {
    fileRef.current.click();
  };

  useEffect(() => {
    const getFile = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const fileDetails = await uploadFile(data);
        seturl(fileDetails.path);
      }
      console.log(url);
    };
    getFile();
  }, [file]);

  return (
    <>
      <Center
        minH={"99vh"}
        bgImage={
          'url("https://images.squarespace-cdn.com/content/v1/5bfd4f00710699387b6a460a/1543419663922-5HSYZTBIDEIQ14V7X7K6/darkbg.jpg?format=2500w)'
        }
        objectFit={"fill"}
      >
        <Box border={"2px solid red"} borderRadius={"3xl"} p={"5"} minW={"96"}>
          <Stack gap={5}>
            <Heading>Media Uploader</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              rerum?
            </Text>
            <Button
              type="button"
              size={"lg"}
              bgColor={"linkedin.100"}
              onClick={() => {
                onUpload();
              }}
            >
              Upload
            </Button>
            <input
              type="file"
              name="file"
              id="file"
              ref={fileRef}
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <a href={url}>
              <Text color={"blue.300"} textDecor={"underline"}>
                {url}
              </Text>
            </a>
          </Stack>
        </Box>
      </Center>
    </>
  );
};

export default Home;
