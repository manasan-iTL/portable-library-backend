import Router, { Request, Response } from 'express'
import prisma from '../orm/prismaClien'
import { TypedRequestBody, TypedRequestQuery } from '../interfaces/common'
import { createBook } from '../interfaces/bookType'

const router = Router()

router.get("/", async (req: Request, res: Response) => {
    const books = await prisma.book.findMany()
    res.json({ books })
})
export default router