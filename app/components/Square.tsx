'use client'
import { addDay } from "@/lib/database/addDay"
import { deleteDay } from "@/lib/database/deleteDay"
import { useRouter } from "next/navigation"
import { experimental_useOptimistic as useOptimistic } from "react"

type Props = {
    day: string
    state: boolean
    habit_id: number
}

export default function Square({ day, state, habit_id }: Props) {
    const [optimisticState, setoptimisticState] = useOptimistic(state)
    async function handleRed() {
        setoptimisticState(true)
        await addDay(habit_id, day)
    }
    async function handleGreen() {
        setoptimisticState(false)
        await deleteDay(habit_id, day)
    }

    return (
        <>
            {!optimisticState ?
                <form action={handleRed}>
                    <button
                        className={`w-12 h-12 mx-2 hover:scale-110 duration-100 bg-red-500 hover:bg-red-600`}
                    >
                    </button>
                </form>
                :
                <form action={handleGreen}>
                    <button
                        className={`w-12 h-12 mx-2 hover:scale-110 duration-100 bg-green-500 hover:bg-green-600`}
                    >
                    </button>
                </form>
            }
        </>
    )
}
