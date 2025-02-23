/*
  Warnings:

  - You are about to drop the column `numberOfBorrowedBooks` on the `Borrow` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `Borrow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Borrow` DROP COLUMN `numberOfBorrowedBooks`,
    ADD COLUMN `quantity` INTEGER NOT NULL;
