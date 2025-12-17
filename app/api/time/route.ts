import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 0;

export async function GET() {
    return NextResponse.json({
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
        message: "This response was served by a Next.js API Route!",
    });
}
