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

router.post("/",async (req:Request, res: Response) => {

    const { book_id, user_id } = req.body

    try {
        
            // 本が借りることができるか試す→エラーを返す
            const rentableBook = await prisma.rentable_Book.findUnique({
                where: { id: parseInt(book_id) }
            })

            if (rentableBook === null) {
                throw new Error("借りることができません。");
            }

            // 該当の本を削除する
            await prisma.rentable_Book.delete({
                where: { id: parseInt(book_id) }
            })

            // 貸し出しテーブルに登録
            // const rentaledBook = await prisma.user.update({
            //     where: { id: user_id },
            //     data: {
            //         rentaled_books: {
                        
            //         }
            //     }
            // })

    } catch (error) {
        
    }

    const rentaledBook = await prisma.user.update({
        where: { id: parseInt(user_id)},
        data: {
            rentaled_books: {

            }
        }
    })
})

export default router