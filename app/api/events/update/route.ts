import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id, ...data } = await req.json();
  try {
    const existingEvent = await prismadb.event.findUnique({
      where: { id: id },
    });

    if (!existingEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    const updatedEvent = await prismadb.event.update({
      where: { id: id },
      data: data,
    });

    return NextResponse.json({ message: "Updated successfully", status: 200 });
  } catch (error) {
    console.error("Failed to update event:", error);
    return NextResponse.json(
      { error: "Failed to update event" },
      { status: 500 }
    );
  }
}
