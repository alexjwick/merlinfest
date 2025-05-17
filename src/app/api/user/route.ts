import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { nickname } = await req.json();

  const user = await prisma.user.create({
    data: {
      nickname,
    },
  });

  return NextResponse.json(user);
}

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
