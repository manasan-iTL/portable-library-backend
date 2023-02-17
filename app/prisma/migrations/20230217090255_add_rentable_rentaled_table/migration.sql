-- CreateEnum
CREATE TYPE "Book_type" AS ENUM ('WINC', 'EXTERNEL');

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "book_type" "Book_type" NOT NULL DEFAULT 'EXTERNEL',

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rentable_Book" (
    "id" SERIAL NOT NULL,
    "book_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rentable_Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rentaled_Book" (
    "id" SERIAL NOT NULL,
    "book_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "return_at" TIMESTAMP(3) NOT NULL,
    "limit" INTEGER NOT NULL,
    "isProcess" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Rentaled_Book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rentable_Book_book_id_key" ON "Rentable_Book"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "Rentaled_Book_book_id_key" ON "Rentaled_Book"("book_id");

-- AddForeignKey
ALTER TABLE "Rentable_Book" ADD CONSTRAINT "Rentable_Book_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rentaled_Book" ADD CONSTRAINT "Rentaled_Book_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rentaled_Book" ADD CONSTRAINT "Rentaled_Book_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
