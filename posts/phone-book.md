---
title: "PhoneBook"
publishedAt: "2022-09-22"
modifiedAt: "2022-09-22"
author: "Sehajpreet Kaur"
summary: "PhoneBook Application is a Full-stack application built using MERN Stack. It has features for adding, editing, and deleting contacts, as well as an intuitive search function for quickly locating contacts."
tags: ["react", "mongodb", "express", "nodejs"]
---

# Introduction

PhoneBook is a Full-stack web application built using **MERN** Stack. I built this application in order to put my knowledge of what I have learnt till now in practice.

## Salient Features

- A website where users can add, update, delete and search for contact information of people/organizations.
- The front end of the website is created using React and Tailwind CSS.
- Theme of the application can be changed. The user can select any theme from the themes given in the dropdown.
- The back end of the web application is implemented using MongoDB for the database, NodeJS and ExpressJS.

## Technologies Used -

- MongoDB
- Express JS
- React JS
- Node js
- Tailwind CSS

<img
  src="/phone3.jpeg"
  width="100%"
  height="100%"
  alt="alt of the image"
  title="title of the image"
/>

### **The Schema of the database**

```js:backend/models/PersonModel.js
const personSchema = new Schema(
  {
    name: {
      type: String,
      requires: true,
      minLength: 3,
      trim: true,
      unique: true,
    },
    number: {
      type: Number,
      required: true,
      minLength: 3,
      maxLength: 10,
      unique: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
```

The records entered by the users are stored in the database in the above format. The name and the number must be unique.

### **Fetching the contact information from the database created.**

```js:frontend/src/pages/Home.js
useEffect(() => {
    const fetchPersons = async () => {
      const response = await fetch(
        "https://phonebook-xvm7.onrender.com/api/persons"
      );
      const json = await response.json();
      if (response.ok) {
        setPersons(json);
      }
    };
    fetchPersons();
  }, []);
```

Here, we make a call to the url of the deployed database to fetch the contact information of all the people added by the users.

> ##### [Click here to visit the website](https://phonelib.netlify.app/)
>
> ##### [Click here to checkout the source code](https://github.com/sehajbajaj/PhoneBook)
