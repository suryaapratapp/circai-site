import { NextResponse } from 'next/server';

type DemoRequestBody = {
  name?: string;
  email?: string;
  organisation?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as DemoRequestBody;

  if (!payload.name || !payload.email) {
    return NextResponse.json(
      { ok: false, message: 'Name and email are required.' },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true });
}
