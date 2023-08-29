import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name } = await request.json()

    try {
        if (!name) throw new Error('Name is required');
        const res = await sql`INSERT INTO habits (name) VALUES (${name}) RETURNING habit_id;`;
        return NextResponse.json(res.rows[0], { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}