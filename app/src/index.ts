import express, { Request, Response } from "express";
import userRouter from "./Controllers/userController";
import bookRouter from "./Controllers/bookController"

const app = express()
const PORT = 3000;

/*  Expressのミドルウェアの設定  */
app.use(express.json())
app.use("/users", userRouter)
app.use("/books", bookRouter)

app.get("/", (req: Request, res: Response) => {
    res.send("Wlecome to Pocket Library!")
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})