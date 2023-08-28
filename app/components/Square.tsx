'use client'
import { addDay } from "@/lib/database/addDay"
import { deleteDay } from "@/lib/database/deleteDay"
import { useRouter } from "next/navigation"

type Props = {
    day: string
    state: boolean
    habit_id: number
}

export default async function Square({ day, state, habit_id }: Props) {
    const router = useRouter()
    async function handleRed(){
        await addDay(habit_id, day)
        router.refresh()
    }
    async function handleGreen(){
        await deleteDay(habit_id, day)
        router.refresh()
    }
    
    return (
        <div
            onClick={!state ? () => handleRed() : () => handleGreen()}
            className={`w-12 h-12 mx-2 hover:scale-110 duration-100 ${state ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
        >
        </div>
    )
}
