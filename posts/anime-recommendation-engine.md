---
title: "Anime Culture"
publishedAt: "2022-05-28"
modifiedAt: "2022-05-28"
author: "Sehajpreet Kaur"
summary: "Anime Recommendation System project built during Microsoft Engage 2022 program. It is a web application that gives information about Animes."
tags: ["react", "python", "django", "redux"]
---

# Introduction

I took part in **Microsoft Engage 2022 Program**. Intern Engage is a program for engineering students across India.
As a mentee, I was asked to build a project on any of the three topics they gave us.
Out of the three challenges, I decided to go with the third one that was to demonstrate through our application what algorithms streaming platforms like Netflix and Spotify might use for their Recommendation Systems.

## About the project

- It is a web application that gives information about Animes, the data is fetched from the Kitsu API.
- Content-Based Recommendations are provided to the User.

## Salient Features

- User can search for an anime and search results will be displayed on the screen.
- Ratings, Episode Count, Episode Length, status and summary of the animes are provided.
- Recommends similar animes on the basis of many factors using the KNN Algorithm. KNN Algorithm assumes that similar things exist in close proximity. In other words, similar things are near to each other. It calculates the similarity between the new data and available data and classifies the new data into the categories that are most similar to the available data.

## Technologies and API Used -

- React JS
- Redux
- Python
- Django
- Axios
- BootStrap

### **Fetching all the animes for the Homepage**

```js:src/screens/HomeScreen.js
/* Fetching the data from the Kitsu API */
  useEffect(() => {
    const url = "https://kitsu.io/api/edge/anime";
    axios
      .get(`${url}?page%5Blimit%5D=20&page%5Boffset%5D=${(page - 1) * 20}`) //Adding pagination
      .then(function(response) {
        setAnimeList(response.data);
        console.log(response);
      });
    window.scroll(0, 0);
  }, [page]);
```

All the animes present in the Kitsu Dataset are displayed on the homescreen. The feature of pagination is implemented.

### **Fetching the Recommendations**

```js:src/screens/AnimeScreen.js
/* Getting Recommendations for Current Anime */
 useEffect(() => {
    dispatch(getRecommendations(params.id));
    console.log("recommendation", recommendations);
  }, [dispatch]);

  /* Fetching the Anime from Kitsu API */
  useEffect(() => {
    axios
      .get(`https://kitsu.io/api/edge/anime?filter%5Bid%5D=${params.id}`)
      .then((response) => {
        setCurrAnime(response.data.data[0]);
        console.log(response.data.data[0]);
        return axios.get(
          `https://kitsu.io/api/edge/anime?filter%5Btext%5D=${response.data.data[0].attributes.titles.en}?%5Blimit%5D=5`
        );
      })
      .then((response) => {
        setrecAnime(response.data);
      });

    console.log(recAnime);
    window.scroll(0, 0);
  }, [params]);
```

The details of the anime selected by the user are fetched from the Kitsu API and the recommendations for that anime are fetched from the model created to show the similar animes.

<img
  src="/1.jpeg"
  width="100%"
  height="100%"
  alt="alt of the image"
  title="title of the image"
/>

### **Recommendations**

```py:recommendations/recommend.py
def recommend(data, model, animeId):
    anime = data.iloc[animeId].values.reshape(1, -1)
    recommendations = model.kneighbors(anime, return_distance=False)
    return recommendations[0]
```

Here, we get the recommendations from the model built using KNN algorithm. These recommendations are then send to the AnimeScreen.

> ##### [Click here to visit the website](https://animesculture.up.railway.app/)
>
> ##### [Click here to checkout the source code](https://github.com/sehajbajaj/Anime-Recommendation-Engine)

#

The happiest news I got recently and I would like to share with you all is that I have been selected for the position of **Software Engineer Intern @ Microsoft** for the upcoming summer 2023 🎉❤️
