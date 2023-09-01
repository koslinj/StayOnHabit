import { sql } from '@vercel/postgres';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';
import { options } from '../auth/[...nextauth]/options';

export async function POST(request: Request) {
    const session = await getServerSession(options)
    const { habit_id, day, user } = await request.json()

    if (!session) {
        return NextResponse.json({ message: "No user logged in!" }, { status: 403 });
    }

    const user_id = session.user?.email
    try {
        if (!habit_id || !day || !user_id || !user) throw new Error('habit_id, day and user_id are required');
        if (user !== user_id) {
            return NextResponse.json({ message: 'You cannot change other users data!' }, { status: 200 });
        }
        await sql`INSERT INTO days(habit_id, day, user_id) VALUES(${habit_id}, ${day}, ${user_id});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
}

export async function DELETE(request: Request) {
    const session = await getServerSession(options)
    const { habit_id, day, user } = await request.json()

    if (!session) {
        return NextResponse.json({ message: "No user logged in!" }, { status: 403 });
    }

    const user_id = session.user?.email
    try {
        if (!habit_id || !day || !user_id || !user) throw new Error('habit_id, day and user_id are required');
        if (user !== user_id) {
            return NextResponse.json({ message: 'You cannot change other users data!' }, { status: 200 });
        }
        await sql`DELETE FROM days WHERE habit_id=${habit_id} AND day=${day} AND user_id=${user_id};`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Success' }, { status: 200 });
}