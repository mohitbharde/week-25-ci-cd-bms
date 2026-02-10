import express, { Request, Response } from "express";
import { prisma } from "@repo/db/prisma";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hi there");
});

app.post("/signup", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await prisma.user.create({
    data: {
      email: username,
      password: password,
    },
  });

  res.json({
    message: "user created successfully ",
    id: user.id,
  });
});

app.listen(3002, () => {
  console.log("http server running on port 3002");
});
