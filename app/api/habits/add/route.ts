import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name, day } = await request.json()

    try {
        if (!name || !day) throw new Error('Name and Day are required');
        await sql`INSERT INTO habits (Name, Day) VALUES (${name}, ${day});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
}