---
title: "Weather App"
publishedAt: "2021-11-06"
modifiedAt: "2021-11-06"
author: "Sehajpreet Kaur"
summary: "A simple website which allows the user to get current weather information about a city on demand."
tags: ["react", "javascript", "chakraui"]
---

# Intoduction

React Weather App displays the sunrise time, humidity, wind and pressure of a city at current time.

## Technologies and API Used:

- React JS
- Chakra UI
- React Icons
- Axios
- OpenWeatherMap API

#### App in Light Mode

<img
  src="/light1.jpeg"
  width="100%"
  height="100%"
  alt="alt of the image"
  title="title of the image"
/>

#### App in Dark Mode

<img
  src="/dark1.jpeg"
  width="100%"
  height="100%"
  alt="weather-app"
  title="weather-app"
/>

### **Fetching the Data**

```jsx:src/App.js

  const fetchWeather = async e => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    changeWeather(response.data);
  };
```

Here data is being fetched from the OpenWeatherMap Api with the help of Axios using the **GET** method. **city** is the name of the variable in which the input (name of the city) given by the user is stored.

> ##### [Click here to visit the website](https://sehaj-weather-app.netlify.app/)
>
> ##### [Click here to checkout the source code](https://github.com/sehajbajaj/Weather-App)

#
