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

router.get("/users/:user_id", async (req: Request, res: Response) => {
    const userId = req.params?.user_id
    const rentaledBooks = await prisma.user.findUnique({
        where: {
            id: parseInt(userId)
        },
        select: {
            rentaled_books: {
                select: {
                    book: {
                        select: {
                            id: true,
                            title: true,
                            author: true,
                            book_type: true
                        }
                    }
                }
            }
        }
    })

    res.json({ rentaledBooks })
})

export default router