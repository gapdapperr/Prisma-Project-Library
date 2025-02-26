/*
  Warnings:

  - Made the column `affiliation` on table `Author` required. This step will fail if there are existing NULL values in that column.

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
ALTER TABLE `Borrow` MODIFY `borrowDate` DATE NOT NULL,
    MODIFY `dueDate` DATE NOT NULL,
    MODIFY `returnDate` DATE NULL;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
