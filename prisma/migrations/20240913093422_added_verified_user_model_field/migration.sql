-- CreateEnum
CREATE TYPE "UserSourceType" AS ENUM ('EMAIL', 'EXTERNALPROVIDER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT true;
