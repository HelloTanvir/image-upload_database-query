-- CreateTable
CREATE TABLE `merchant` (
    `merchant_id` INTEGER NOT NULL AUTO_INCREMENT,
    `merchant_name` VARCHAR(255) NOT NULL,
    `user_name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `nid` VARCHAR(255) NOT NULL,
    `subscription_package_id` INTEGER NOT NULL,
    `account_creation_date` DATETIME(3) NOT NULL,
    `subcription_end_date` DATETIME(3) NOT NULL,
    `used_referral_code` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`merchant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shop` (
    `shop_id` INTEGER NOT NULL AUTO_INCREMENT,
    `merchant_id` INTEGER NOT NULL,
    `shop_name` VARCHAR(255) NOT NULL,
    `shop_category` INTEGER NOT NULL,
    `trade_license_number` VARCHAR(255) NOT NULL,
    `age_of_shop` VARCHAR(255) NOT NULL,
    `shop_image` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`shop_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `shop` ADD CONSTRAINT `shop_merchant_id_fkey` FOREIGN KEY (`merchant_id`) REFERENCES `merchant`(`merchant_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
