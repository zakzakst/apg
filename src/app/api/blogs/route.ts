import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const params = await request.json();
  return NextResponse.json({
    ...params,
  });
}
