import { Box, Button } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./task.css";

export const TaskComponent = () => {
  const [weatherdata, setweatherdata] = useState("");
  const [cityname, setcityname] = useState("");
  const [current_observation, setcurrent_observation] = useState()
  const getWeatherDetails = async () => {
    const res = await axios.get(
      "https://yahoo-weather5.p.rapidapi.com/weather?location=" + cityname,
      {
        headers: {
          "X-RapidAPI-Key":
            "31d1226a4emsh360870fc0afd462p1fcacejsnd176aa00dfe9",
          "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
        },
      }
    );
    // console.log(res.data);
    setweatherdata(res.data.location)
    setcurrent_observation(res.data.current_observation.atmosphere)
    toast('🦄 Data Recicved!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <div class="form-outline mb-4">
        <input
          type="text"
          id="form1Example1"
          class="form-control"
          onChange={(e) => {
            setcityname(e.target.value);
          }}
        />
        <label class="form-label" for="form1Example1">
          Enter City For Weather Data
        </label>
      </div>
      <ToastContainer />
      <Button color="primary" onClick={getWeatherDetails}>
        Show Weather
      </Button>

      <div class="container-fluid px-1 px-sm-3 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="row card0">
            <div class="card1 col-lg-8 col-md-7">
              <small>Shivam's Weather Report</small>
              <div class="text-center">
                <img class="image mt-5" src="https://i.imgur.com/M8VyA2h.png" />
              </div>
              <div class="row px-3 mt-3 mb-3">
                <h1 class="large-font mr-3">26&#176;</h1>
                <div class="d-flex flex-column mr-3">
                  <h2 class="mt-3 mb-0">{weatherdata.city}</h2>
                  <small>10:36 - Tuesday, 22 Oct '19</small>
                </div>
                <div class="d-flex flex-column text-center">
                  <h3 class="fa fa-sun-o mt-4"></h3>
                  <small>{current_observation.atmosphere.humidity}</small>
                </div>
              </div>
            </div>
            <div class="card2 col-lg-4 col-md-5">
              <div class="row px-3"></div>
              <div class="mr-5">
                <div class="line my-5"></div>
                <small>Weather Detail's For City</small>

                <div class="line my-5"></div>

                <p>Weather Details</p>
                <div class="row px-3">
                  <p class="light-text">Cloudy</p>
                  <p class="ml-auto">12%</p>
                </div>
                <div class="line my-5"></div>
                <div class="row px-3">
                  <p class="light-text">Humidity</p>
                  <p class="ml-auto">78%</p>
                </div>
                <div class="line my-5"></div>
                <div class="row px-3">
                  <p class="light-text">Wind</p>
                  <p class="ml-auto">1km/h</p>
                </div>
                <div class="row px-3">
                  <p class="light-text">Rain</p>
                  <p class="ml-auto">0mm</p>
                </div>

                <div class="line mt-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
