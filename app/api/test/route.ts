import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({
        message: "Hello, World!",
        timestamp: new Date().toISOString(),
    },
{
    headers: {
        "Cache-control": "public, s-maxage=30, stale-while-revalidate=10",
    }
});
}