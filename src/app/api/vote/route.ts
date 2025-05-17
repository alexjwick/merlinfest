import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { userId, theme } = await req.json();

    if (!userId || !theme) {
      return NextResponse.json(
        { error: "Missing userId or theme" },
        { status: 400 }
      );
    }

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create the vote
    const vote = await prisma.vote.create({
      data: {
        userId,
        theme,
      },
    });

    return NextResponse.json(vote);
  } catch (error) {
    console.error("Vote creation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const votes = await prisma.vote.findMany();
  return NextResponse.json(votes);
}
