---
title: "College Buddy"
publishedAt: "2022-10-10"
modifiedAt: "2022-10-10"
author: "Sehajpreet Kaur"
summary: "College Buddy allows users to create their personal profile, where they can add and track their subjects, attendance and marks. It also includes a todo list feature, where users can create and manage their tasks and deadlines.
"
tags: ["react", "supabase", "tailwind", "nodejs"]
---

# Introduction

Welcome to College Buddy, a personal organization and productivity tool for students built using React and powered by Supabase for a fast and reliable platform for managing user data.

## Salient Features

- College Buddy allows users to create their personal profile, where they can add and track their subjects, attendance and marks.
- It also includes a todo list feature, where users can create and manage their tasks and deadlines.
- The app is built using React and powered by Supabase, providing a fast and reliable platform for managing user data.
- Applied Tailwind CSS for styling, allowing for a modular and customizable design.

## Technologies Used -

- React JS
- Supabase
- Node js
- Tailwaind CSS

### **Supabase Client**

```js:src/config/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

<img
  src="/cb1.png"
  width="100%"
  height="100%"
  alt="alt of the image"
  title="title of the image"
/>

### **Authorising the user**

```js:src/pages/Auth.js
export default function Auth() {
  const navigate = useNavigate();
  const { session } = useContext(SessionContext);

  useEffect(() => {
    if (session) {
      navigate("/user/");
    }
  }, [session, navigate]);

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

```

### **Todos**

<img
  src="/cb2.png"
  width="100%"
  height="100%"
  alt="alt of the image"
  title="title of the image"
/>

### **User Profile**

<img
  src="/cb3.png"
  width="100%"
  height="100%"
  alt="alt of the image"
  title="title of the image"
/>

> ##### [Click here to visit the website](https://collegebuddie.netlify.app/)
>
> ##### [Click here to checkout the source code](https://github.com/sehajbajaj/CollegeBuddie)
