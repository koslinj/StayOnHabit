"use server"
import { options } from "@/app/api/auth/[...nextauth]/options";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache"

export async function addDay(habit_id: number, day: string) {
    const session = await getServerSession(options)
    if(!session){
        throw new Error('No user logged in!')
    }

    const user_id = session.user?.email
    try {
        if (!habit_id || !day || !user_id) throw new Error('habit_id, day and user_id are required')
        await sql`INSERT INTO days(habit_id, day, user_id) VALUES(${habit_id}, ${day}, ${user_id});`
        revalidatePath('/dashboard')
    } catch (error) {
        console.log(error)
    }
}