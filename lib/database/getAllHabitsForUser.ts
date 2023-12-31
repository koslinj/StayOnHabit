import { sql } from '@vercel/postgres';

export default async function getAllHabitsForUser(email: string) {
    try {
        const habits = await sql`SELECT h.habit_id, name FROM days AS d JOIN habits AS h ON d.habit_id=h.habit_id WHERE user_id=${email};`;
        return habits
    } catch (error) {
        return null
    }
}