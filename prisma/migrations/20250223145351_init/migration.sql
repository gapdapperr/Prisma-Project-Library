/*
  Warnings:

  - The primary key for the `Borrow` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Borrow` table. All the data in the column will be lost.
  - Made the column `affiliation` on table `Author` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `numberOfBorrowedBooks` to the `Borrow` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Book` DROP FOREIGN KEY `Book_authorId_fkey`;

-- DropIndex
DROP INDEX `Book_authorId_fkey` ON `Book`;

-- AlterTable
ALTER TABLE `Author` MODIFY `affiliation` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Book` MODIFY `authorId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Borrow` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `numberOfBorrowedBooks` INTEGER NOT NULL,
    ADD PRIMARY KEY (`memberId`, `bookId`);

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
