import React from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}℃`);

  }
  let apiKey = "856531c30ebeae24c48d2152bc04716e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (

    <Loader
        type="ThreeDots"
        color="violet"
        height={200}
        width={200} 
      />
  )
}
  
