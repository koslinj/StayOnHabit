import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name } = await request.json()

    try {
        if (!name) throw new Error('Name is required');
        await sql`INSERT INTO habits (name) VALUES (${name});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
}