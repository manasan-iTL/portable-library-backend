
import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const prisma = new PrismaClient()

const app = express()
const PORT = 3000;

/*  Expressのミドルウェアの設定  */
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Wlecome to Pocket Library!")
})

app.get("/users", async (req: Request, res: Response) => {
    const allUsers = await prisma.user.findMany()
    res.json({ allUsers })
})

// app.post("/users", async (req: Request, res: Response) => {

// })

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})