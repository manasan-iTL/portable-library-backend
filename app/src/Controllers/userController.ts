import { Request, Response, Router } from "express";
import { TypedRequestBody, TypedRequestQuery } from "../interfaces/common";
import { CreateUser } from "../interfaces/userType";
import prisma from "../orm/prismaClien";

const router = Router()

router.get("/", async (req: Request, res: Response) => {
    const allUsers = await prisma.user.findMany()
    res.json({ allUsers })
})

router.post("/", async (req: TypedRequestBody<CreateUser>, res: Response) => {
    const { email, password, username } = req.body
    const user = await prisma.user.create({
        data : { email, password, username }
    })

    res.json({ user })
})

router.get("/:user_id", async (req:Request<{ user_id: string }>, res: Response ) => {
    const userId = req.params?.user_id
    const user = await prisma.user.findUnique({
        where: { id: parseInt(userId) },
    });
    res.json({ user });
})

export default router