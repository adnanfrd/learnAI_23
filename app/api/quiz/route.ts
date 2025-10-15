export const runtime = "edge";

import { NextResponse } from "next/server";
import type {
  QuizStep,
  QuizItem,
  QuizOption,
  ContentParagraph,
  QuizApiResponse,
} from "@/lib/types/quiz";
import { queryD1 } from "@/lib/cloudflare-d1";

export async function GET(): Promise<NextResponse<QuizApiResponse>> {
  try {
    console.log("Fetching all quiz data...");

    const steps = await queryD1<QuizStep>(
      'SELECT * FROM quiz_steps ORDER BY "order"'
    );
    const items = await queryD1<QuizItem>(
      'SELECT * FROM quiz_items ORDER BY "order"'
    );
    const options = await queryD1<QuizOption>(
      'SELECT * FROM quiz_options ORDER BY "order"'
    );
    const paragraphs = await queryD1<ContentParagraph>(
      'SELECT * FROM content_paragraphs ORDER BY "order"'
    );

    console.log("Quiz data fetched:", {
      steps: steps.length,
      items: items.length,
      options: options.length,
      paragraphs: paragraphs.length,
    });

    const response: QuizApiResponse = {
      success: true,
      message: "Quiz data fetched successfully!",
      data: {
        steps,
        items,
        options,
        paragraphs,
      },
      count: {
        steps: steps.length,
        items: items.length,
        options: options.length,
        paragraphs: paragraphs.length,
      },
    };

    return NextResponse.json(response, {
      headers: {
          'Access-Control-Allow-Origin': '*', // for public APIs
          'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        },
      });
  } catch (error) {
    console.error("Quiz fetch error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch quiz data",
        error: error instanceof Error ? error.message : "Unknown error",
        data: { steps: [], items: [], options: [], paragraphs: [] },
        count: { steps: 0, items: 0, options: 0, paragraphs: 0 },
      } as QuizApiResponse,
      { status: 500 }
    );
  }
}