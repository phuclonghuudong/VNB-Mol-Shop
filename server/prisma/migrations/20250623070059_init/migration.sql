-- CreateTable
CREATE TABLE `NhanVien` (
    `MaNguoiDung` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `HoTen` VARCHAR(191) NOT NULL,
    `SoDienThoai` VARCHAR(191) NOT NULL,
    `CCCD` VARCHAR(191) NOT NULL,
    `DiaChi` VARCHAR(191) NULL,
    `GioiTinh` INTEGER NULL,
    `NgaySinh` DATETIME(3) NULL,
    `Avatar` VARCHAR(191) NULL,
    `TrangThai` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `NhanVien_Email_key`(`Email`),
    UNIQUE INDEX `NhanVien_SoDienThoai_key`(`SoDienThoai`),
    UNIQUE INDEX `NhanVien_CCCD_key`(`CCCD`),
    PRIMARY KEY (`MaNguoiDung`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
