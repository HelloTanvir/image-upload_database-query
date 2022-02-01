import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const { merchant, shop } = new PrismaClient();

export const insertIntoBothTables = async (req: Request, res: Response) => {
  const {
    merchant_id,
    merchant_name,
    user_name,
    phone,
    email,
    nid,
    subscription_package_id,
    account_creation_date,
    subcription_end_date,
    used_referral_code,
    shop_name,
    shop_category,
    trade_license_number,
    age_of_shop,
    shop_image,
  } = req.body as {
    merchant_id: number;
    merchant_name: string;
    user_name: string;
    phone: string;
    email: string;
    nid: string;
    subscription_package_id: number;
    account_creation_date: string | Date;
    subcription_end_date: string | Date;
    used_referral_code: string;
    shop_name: string;
    shop_category: number;
    trade_license_number: string;
    age_of_shop: string;
    shop_image: string;
  };

  const newMerchant = await merchant.create({
    data: {
      merchant_name,
      user_name,
      phone,
      email,
      nid,
      subscription_package_id,
      account_creation_date: new Date(account_creation_date),
      subcription_end_date: new Date(subcription_end_date),
      used_referral_code,
    },
  });

  const newShop = await shop.create({
    data: {
      merchant_id,
      shop_name,
      shop_category,
      trade_license_number,
      age_of_shop,
      shop_image,
    },
  });

  res.status(201).json({ merchant: newMerchant, shop: newShop });
};
