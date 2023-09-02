'use client'
import { addDay } from "@/lib/database/addDay"
import { deleteDay } from "@/lib/database/deleteDay"
import { experimental_useOptimistic as useOptimistic } from "react"

type Props = {
    day: string
    state: boolean
    habit_id: number
    first: boolean
    user: string
}

export default function Square({ day, state, habit_id, first, user }: Props) {
    const [optimisticState, setoptimisticState] = useOptimistic(state)
    async function handleRed() {
        setoptimisticState(true)
        const res = await addDay(habit_id, day, user)
        console.log(res)
    }
    async function handleGreen() {
        setoptimisticState(false)
        const res = await deleteDay(habit_id, day, user)
        console.log(res)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            {first && <div>
                <p className="leading-4 font-light text-black/70 border-b-2 border-black">{day.slice(5, 7)}</p>
                <p className="leading-5 text-lg font-semibold">{day.slice(-2)}</p>
            </div>
            }
            {!optimisticState ?
                <form action={handleRed}>
                    <button
                        className={`w-12 h-12 rounded-lg border-black border-2 mx-1.5 hover:scale-110 duration-100 bg-red-500 hover:bg-red-600`}
                    >
                    </button>
                </form>
                :
                <form action={handleGreen}>
                    <button
                        className={`w-12 h-12 rounded-lg border-black border-2 mx-1.5 hover:scale-110 duration-100 bg-green-500 hover:bg-green-600`}
                    >
                    </button>
                </form>
            }
        </div>
    )
}
