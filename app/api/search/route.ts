import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const keyword = req.nextUrl.searchParams.get("keyword") as string;
  const token = process.env.WAQI_TOKEN;

  let url =
    "https://api.waqi.info/v2/search/?token=" + token + "&keyword=" + keyword;

  const resp = await fetch(url);
  const results = await resp.json();

  return NextResponse.json({ data: results.data }, { status: 200 });
};
