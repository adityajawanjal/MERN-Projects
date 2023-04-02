import React, { useState } from "react";
import {
  Button,
  Center,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import DateTimePicker from "react-datetime-picker";
import { Link } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState(new Date());

  const addNote = () => {
    console.log(title, description, date);
    alert(date.toLocaleString());
  };

  return (
    <>
      <Center minH={"99vh"}>
        <Stack
          gap={4}
          maxW={"96"}
          border={"2px solid red"}
          p={"3"}
          borderRadius={"3xl"}
          alignItems={"center"}
        >
          <Heading as={"h2"}>Add a Note !</Heading>
          <Input
            placeholder="Enter Title"
            p={"3"}
            fontSize={"1.2rem"}
            onChange={(e) => setTitle(e.target.value)}
            value={title ? title : ""}
          />
          <Textarea
            placeholder="Enter Description"
            p={"3"}
            fontSize={"1.2rem"}
            onChange={(e) => setDescription(e.target.value)}
            value={description ? description : ""}
          />
          <DateTimePicker
            onChange={setDate}
            value={date}
            dayPlaceholder="DD"
            hourPlaceholder="hh"
            yearPlaceholder="YY"
            monthPlaceholder="MM"
            minutePlaceholder="mm"
            secondPlaceholder="ss"
            format="dd / MM / yyyy - hh / mm / ss - a"
            minDate={new Date()}
            required={true}
            amPmAriaLabel="AM / PM"
          />
          <Button
            size={"lg"}
            bgColor={"whatsapp.200"}
            w={"80%"}
            onClick={addNote}
          >
            Add Note{" "}
          </Button>
          <Link to={"/notes"} style={{ width: "100%" }}>
            <Button size={"lg"} bgColor={"whatsapp.200"} w={"full"}>
              View all Notes{" "}
            </Button>
          </Link>
        </Stack>
      </Center>
    </>
  );
};

export default Home;
