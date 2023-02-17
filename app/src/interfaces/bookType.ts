
interface Book  {
	book_id: string,
	title: string,
	author: string,
	book_type: BookType
}

type BookType = "WINC" | "EXTERNAL"

type Books = Array<Book>

export interface createBook {
    title: string,
	author: string,
	book_type: BookType | undefined
}