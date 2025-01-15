import { NextRequest, NextResponse } from "next/server";

type BlogParams = {
  year: string;
  month: string;
  date: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: BlogParams }
): Promise<NextResponse> {
  const paramsData = await params;
  const query = request.nextUrl.searchParams;
  const testQuery = query.get("test");

  // NOTE: 下記URLで「{"year":"2025","month":"01","date":"15","test":"hoge"}」が返ってくる
  // http://localhost:3000/api/blogs/2025/01/15?test=hoge
  return NextResponse.json({
    ...paramsData,
    test: testQuery,
  });
}
