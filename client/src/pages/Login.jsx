import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
  HStack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/api";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async () => {
    const userInfo = { email, password };
    const result = await login(userInfo);
    if (result) {
      navigate("/");
    } else {
      console.log("toast of error");
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
          Login
        </Heading>
        <VStack w={"full"} gap={5}>
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
                type={"password"}
                placeholder={"Enter your Password"}
                p={"3"}
                name={"password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement w={"4.5rem"}>
                <Button
                  type="button"
                  bgColor={"linkedin.700"}
                  color={"whiteAlpha.900"}
                  size={"md"}
                  pr={"8"}
                  pl={"8"}
                >
                  Show
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            type="button"
            size={"lg"}
            bgColor={"linkedin.500"}
            w={"52"}
            onClick={handleLogin}
          >
            Login
          </Button>
          <HStack gap={1}>
            <Text>Don`t have a account ?</Text>
            <Link to={"/register"}>
              <Text color={"cyan.500"}>Register</Text>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </>
  );
};

export default Login;
