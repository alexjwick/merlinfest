import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { userId, actionType, details } = await req.json();

  const interaction = await prisma.interaction.create({
    data: {
      userId,
      actionType,
      details,
    },
  });

  return NextResponse.json(interaction);
}
