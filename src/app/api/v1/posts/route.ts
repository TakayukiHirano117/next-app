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
    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Error", e }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { title, content, authorId } = await req.json();

    await main();
    const post = await prisma.post.create({ data: { title, content, authorId } });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Error", e }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
