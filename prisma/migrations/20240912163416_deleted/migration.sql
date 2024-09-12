/*
  Warnings:

  - You are about to drop the `Language` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CategoryTranslation" DROP CONSTRAINT "CategoryTranslation_languageCode_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_languageCode_fkey";

-- DropTable
DROP TABLE "Language";
