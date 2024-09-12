/*
  Warnings:

  - You are about to alter the column `languageCode` on the `CategoryTranslation` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.
  - You are about to alter the column `languageCode` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.

*/
-- AlterTable
ALTER TABLE "CategoryTranslation" ALTER COLUMN "languageCode" SET DATA TYPE VARCHAR(10);

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "languageCode" SET DATA TYPE VARCHAR(10);
