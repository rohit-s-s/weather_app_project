import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Data } from "./Components/utils";
import Form from "./Components/Form";
import Display from "./Components/Display";

function App() {
  const [inputValue,setInputValue] = useState<string>("")
  const [data, setData] = useState<Data>();
  const [location,setLocation] = useState<string>("Kerala")

  const formHandle = (e:FormEvent)=>{
    e.preventDefault()
    setLocation(inputValue)
    setInputValue("")
  }

  useEffect(() => {
    try{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b1b15e88fa797225412429c1c50c122a1`).then((response) => {
        setData(response.data);
      });
    }catch(err){
      console.log(err)
    }
  },[location])

  return (
    <>
    <Form formHandle={formHandle} inputValue={inputValue} setInputValue={setInputValue}/>
    <Display name={data?.name} desc={data?.weather[0].description} temp={data?.main.temp}/>
    </>
  );
}

export default App;

