import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Middle from "../components/Middle";
import Left from "../components/Left";
import Right from "../components/Right";

const Home = () => {
  return (
    <>
      <Grid templateColumns={"1fr 3fr 1fr"} gap={3} p={"3"} >
        <GridItem>
          <Left />
        </GridItem>
        <GridItem>
          <Middle />
        </GridItem>
        <GridItem>
          <Right />
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
