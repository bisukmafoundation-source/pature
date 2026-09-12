import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(request: Request) {
  try {
    const { query, params } = (await request.json()) as {
      query?: string;
      params?: Record<string, unknown>;
    };

    if (!query || typeof query !== "string") {
      return NextResponse.json({ error: "Query Sanity tidak valid." }, { status: 400 });
    }

    const data = await client.fetch(query, params ?? {});
    return NextResponse.json(data);
  } catch (error) {
    console.error("[v0] Sanity proxy request failed:", error);
    return NextResponse.json({ error: "Gagal mengambil data berita." }, { status: 502 });
  }
}
