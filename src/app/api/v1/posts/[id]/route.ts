import { NextResponse } from "next/server";
import { main } from "../route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 投稿詳細取得API
export const GET = async (req: Request, res: NextResponse) => {
  const id: number = parseInt(req.url.split("/posts/")[1]);

  http: try {
    await main();
    const post = await prisma.post.findFirst({
      where: { id },
    });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Error", e }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// 投稿編集API
export const PUT = async (req: Request, res: NextResponse) => {
  const id: number = parseInt(req.url.split("/posts/")[1]);

  const { title, content } = await req.json();

  http: try {
    await main();
    const post = await prisma.post.update({
      data: { title, content },
      where: { id },
    });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Error", e }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// 投稿削除API
export const DELETE = async (req: Request, res: NextResponse) => {
  const id: number = parseInt(req.url.split("/posts/")[1]);

  http: try {
    await main();
    const post = await prisma.post.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Error", e }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
