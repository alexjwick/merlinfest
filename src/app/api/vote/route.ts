import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { activeTheme, speed, intensity, colorScheme, effectIds } =
    await req.json();

  const updatedState = await prisma.visualState.upsert({
    where: { id: 1 }, // assume single record
    update: {
      activeTheme,
      speed,
      intensity,
      colorScheme,
      effectIds,
    },
    create: {
      activeTheme,
      speed,
      intensity,
      colorScheme,
      effectIds,
    },
  });

  return NextResponse.json(updatedState);
}

export async function GET() {
  const state = await prisma.visualState.findFirst();
  return NextResponse.json(state);
}
