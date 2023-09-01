import { sql } from '@vercel/postgres';

export default async function getAllUsers() {
    try {
        const users = await sql`SELECT user_id FROM days;`;
        const uniqueUsers = [...new Set(users.rows.map(item => item.user_id))]
        return uniqueUsers
    } catch (error) {
        return null
    }
}