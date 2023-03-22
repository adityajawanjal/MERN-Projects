import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { getAllUsers } from "../services/api";
import { Link } from "react-router-dom";

const Right = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const allUsers = await getAllUsers();
      setUsers(allUsers);
    };
    fetchUsers();
  }, []);
  return (
    <>
      <Box>
        <Heading as={"h3"} w={"full"} fontSize={"1.5rem"} mb={"10"}>
          Our Members
        </Heading>
        <Container maxW={"container.sm"}>
          <Stack gap={2}>
            {users.map((e) => {
              return (
                <Link to={`/single-user/${e._id}`} key={e._id}>
                  <HStack
                    gap={3}
                    border={"1px solid red"}
                    borderRadius={"3xl"}
                    p={"3"}
                  >
                    <Image
                      src={`http://localhost:5000/${e.picUrl}`}
                      alt="pa"
                      borderRadius={"50%"}
                      w={"10"}
                      h={"10"}
                    />
                    <Text noOfLines={1}>{e.name}</Text>
                  </HStack>
                </Link>
              );
            })}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Right;
