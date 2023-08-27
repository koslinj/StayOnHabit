import { sql } from '@vercel/postgres';

export default async function getAllHabits() {
    try {
        const habits = await sql`SELECT * FROM habits;`;
        return habits
    } catch (error) {
        return null
    }
}