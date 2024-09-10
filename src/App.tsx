import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Data } from "./Components/utils";
import Form from "./Components/Form";
import Display from "./Components/Display";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

const apiKey = import.meta.env.VITE_APP_ID;

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [data, setData] = useState<Data>();
  const [location, setLocation] = useState<string>("Kerala");

  const formHandle = (e: FormEvent) => {
    e.preventDefault();
    setLocation(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
        )
        .then((response) => {
          if (response.status === 200) {
            setData(response.data);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }, [location]);

  return (
    <Stack
      spacing={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Form
        formHandle={formHandle}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Box
        boxShadow={3}
        sx={{
          width: 350,
          height: 250,
          borderRadius: 1,
        }}
      >
        <Display
          name={data?.name}
          desc={data?.weather[0].description}
          temp={data?.main.temp}
          icon={data?.weather[0].icon}
        />
      </Box>
    </Stack>
  );
}

export default App;
