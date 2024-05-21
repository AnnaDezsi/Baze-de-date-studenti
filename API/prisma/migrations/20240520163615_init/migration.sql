-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `prenume` VARCHAR(191) NOT NULL,
    `nume` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `numarTelefon` VARCHAR(191) NOT NULL,
    `adresa` VARCHAR(191) NOT NULL,
    `varsta` INTEGER NOT NULL,
    `termeni` BOOLEAN NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_numarTelefon_key`(`numarTelefon`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
