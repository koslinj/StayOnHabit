import { sql } from '@vercel/postgres';

export default async function getAllDays(email: string) {
    try {
        const habits = await sql`SELECT * FROM days WHERE user_id=${email};`;
        return habits
    } catch (error) {
        return null
    }
}