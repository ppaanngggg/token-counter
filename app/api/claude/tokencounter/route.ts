import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { model, text } = await req.json();

    const response = await anthropic.countTokens({
        model,
        messages: [{
            role: "user",
            content: text
        }],
    });

    return NextResponse.json({ tokens: response.tokens });
  } catch (error) {
    console.error("Error counting tokens:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
