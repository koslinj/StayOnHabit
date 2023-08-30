"use server"
import { options } from "@/app/api/auth/[...nextauth]/options";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache"

export async function deleteDay(habit_id: number, day: string) {
    const session = await getServerSession(options)

    if (!session) {
        throw new Error('No user logged in!')
    }

    const user_id = session.user?.email
    try {
        if (!habit_id || !day || !user_id) throw new Error('habit_id, day and user_id are required')
        await sql`DELETE FROM days WHERE habit_id=${habit_id} AND day=${day} AND user_id=${user_id};`
        revalidatePath('/dashboard')
    } catch (error) {
        console.log(error)
    }
}