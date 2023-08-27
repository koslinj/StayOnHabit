import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET() {
    const habits = await sql`SELECT * FROM habits;`;
    return NextResponse.json({ habits }, { status: 200 });
}