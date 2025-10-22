import { NextRequest, NextResponse } from 'next/server';

// サンプルデータ
const users = [
  { id: 1, name: 'User 1', email: 'user1@example.com' },
  { id: 2, name: 'User 2', email: 'user2@example.com' },
];

export async function GET() {
  return NextResponse.json({ users });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newUser = {
    id: users.length + 1,
    ...body,
  };
  users.push(newUser);
  return NextResponse.json({ user: newUser }, { status: 201 });
}
