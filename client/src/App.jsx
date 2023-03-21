import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  useEffect(()=>{
    const usertoken = localStorage.getItem("user");
    const auth = JSON.parse(usertoken);
    console.log(auth);
  },[])
  return (
    <>
      <BrowserRouter>
        <Box
          bgImg={
            "https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28313.jpg?"
          }
          w={"full"}
          minH={"100vh"}
          bgRepeat={"no-repeat"}
          bgPos={"center"}
          bgSize={"cover"}
          color={"whiteAlpha.900"}
          pb={"14"}
        >
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
