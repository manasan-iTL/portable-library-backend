import Router, { Request, Response } from 'express'
import prisma from '../orm/prismaClien'
import { TypedRequestBody, TypedRequestQuery } from '../interfaces/common'
import { createBook } from '../interfaces/bookType'

const router = Router()

router.get("/", async (req: Request, res: Response) => {
    const books = await prisma.book.findMany()
    res.json({ books })
})

router.post("/", async (req: Request, res: Response) => {
    const { title, author, book_type  } = req.body

    const book =  await prisma.book.create({
        data: { title, author, book_type }
    })

    res.json({ book })
})

router.get("/rentable", async (req: Request, res: Response) => {
    const rentableBooks = await prisma.rentable_Book.findMany({
        include: {
            book: true,
        }
    })

    res.json({ rentableBooks })
})
export default router