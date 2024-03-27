---
id: "3"
title: "Configure Route"
para: "Create an AWS account and set up CLI/SDK access."
date: "15-02-2024"
cat: "next auth"
author: "Muzammil"
image: "/opengraph-image.jpg"
---

[NextAuth.js](https://next-auth.js.org/) is an authentication library that simplifies the process of implementing authentication in Next.js applications.

> In this tutorial, I provide you with a step-by-step guide on how to `configure NextAuth` in Next js with Typescript in your project.

## Add API route

> On the other hand, if you are using an `app route`r, create a file in app/api/auth/[...nextauth]/route.ts. 

```bash
import NextAuth from "next-auth"

const handler = NextAuth({
  
})

export { handler as GET, handler as POST }
```

> This file will include the dynamic route handler for NextAuth.js and all of your global NextAuth.js configurations.

## Add Options

> After setting up your Next.js project, install NextAuth.js and its dependencies by running a command in your project directory.

```bash
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {  
  providers: [
   
  ],
};
```
### Start the Next.js Development Server

> Finally, you can start the Next.js development server.

```bash
npm run dev
yarn dev
```

### That's it!

> Congratulations! You have successfully installed NextAuth.js in your Next.js project. Happy Coding!

## Continue Learning

[Official documentation](https://next-auth.js.org/) <br />