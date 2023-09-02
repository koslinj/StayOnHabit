"use server"
import { options } from "@/app/api/auth/[...nextauth]/options";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache"

export async function deleteDay(habit_id: number, day: string, user: string) {
    const session = await getServerSession(options)

    if (!session) {
        throw new Error('No user logged in!')
    }

    const user_id = session.user?.email
    try {
        if (!habit_id || !day || !user_id || !user) throw new Error('habit_id, day and user_id are required')
        if (user !== user_id) throw new Error('You cannot change other users data!')
        await sql`DELETE FROM days WHERE habit_id=${habit_id} AND day=${day} AND user_id=${user_id};`
        revalidatePath('/dashboard')
        return 'Success'
    } catch (error: any) {
        console.log(error)
        revalidatePath('/dashboard')
        return error?.message
    }
}