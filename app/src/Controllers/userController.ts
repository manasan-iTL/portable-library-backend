import { Request, Response, Router } from "express";
import prisma from "../orm/prismaClien";
const router = Router()

router.get("/", async (req: Request, res: Response) => {
    const allUsers = await prisma.user.findMany()
    res.json({ allUsers })
})

export default router