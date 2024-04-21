import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const main = async () => {
  try {
    await prisma.$connect();
  } catch (e) {
    return Error("DB接続に失敗しました");
  }
};

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const users = await prisma.user.findMany();
    return NextResponse.json({ message: "Success", users }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Error", e }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { email, name } = await req.json();

    await main();
    const user = await prisma.user.create({ data: { email, name } });
    return NextResponse.json({ message: "Success", user }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ message: "Error", e }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
