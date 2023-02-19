import Router, { Request, Response } from 'express'
import prisma from '../orm/prismaClien'

const router = Router()

router.get("/all", async (req: Request, res: Response) => {
    const rentaledBooks = await prisma.rentaled_Book.findMany({
        include: {
            user: true,
            book: true
        }
    })

    res.json({ rentaledBooks })
})


export default router