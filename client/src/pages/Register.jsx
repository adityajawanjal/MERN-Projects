import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { register } from "../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [show , setShow] = useState(false);


  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const toggleShow = () =>{
    setShow(!show);
  }

  const handleRegister = async () => {
    if(!name || !email || !password || !pic){
      toast({
        title: 'All fields are Mandatory .',
        description: "Please fill Name , Email , Password , Pic !",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position:"top"
      });
    }else{
      const formdata = new FormData();
    formdata.append("picName", pic.name);
    formdata.append("file", pic);
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);

    const result = await register(formdata);
    if (result) {
      localStorage.setItem("user", JSON.stringify(result.token));
      setTimeout(()=>{
        window.location.reload();
      },1000);
    } else {
      toast({
        title: 'Error in Registration .',
        description: "Please try again !",
        status: "error",
        duration: 3000,
        isClosable: true,
        position:"top"
      });
    }
    }
    
  };

  return (
    <>
      <Container
        maxW={"container.sm"}
        border={"2px solid red"}
        mt={"16"}
        p={"7"}
      >
        <Heading m={"7"} textAlign={"center"}>
          Register
        </Heading>
        <VStack w={"full"} gap={5}>
          <FormControl>
            <FormLabel mb={"4"} fontSize={"1.5rem"}>
              Name :{" "}
            </FormLabel>
            <Input
              type={"text"}
              name={"name"}
              placeholder={"Enter your Name"}
              p={"3"}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel mb={"4"} fontSize={"1.5rem"}>
              Email :{" "}
            </FormLabel>
            <Input
              type={"email"}
              name={"email"}
              placeholder={"Enter your Email"}
              p={"3"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel mb={"4"} fontSize={"1.5rem"}>
              Password :{" "}
            </FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder={"Enter your Password"}
                p={"3"}
                name={"password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement w={"4.5rem"}>
                <Button
                  type="button"
                  bgColor={ "linkedin.700"}
                  color={"whiteAlpha.900"}
                  size={"md"}
                  pr={"10"}
                  pl={"10"}
                  onClick={toggleShow}
                  
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Input
            type={"file"}
            p={"1"}
            onChange={(e) => setPic(e.target.files[0])}
          />
          <Button
            type="button"
            size={"lg"}
            bgColor={"linkedin.500"}
            w={"52"}
            onClick={handleRegister}
          >
            Register
          </Button>
        </VStack>
      </Container>
    </>
  );
};

export default Register;
