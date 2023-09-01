'use client'
import { useRouter } from "next/navigation"
import { FormEvent } from "react"

type Props = {
    day: string
    state: boolean
    habit_id: number
    first: boolean
    user: string
}

export default function Square({ day, state, habit_id, first, user }: Props) {
    const router = useRouter()

    async function handleRed(e: FormEvent) {
        e.preventDefault()
        const res = await fetch('/api/days', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ habit_id, day, user })
        })
        console.log(await res.json())
        router.refresh()
    }
    async function handleGreen(e: FormEvent) {
        e.preventDefault()
        const res = await fetch('/api/days', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ habit_id, day, user })
        })
        console.log(await res.json())
        router.refresh()
    }

    return (
        <div className="flex flex-col justify-center items-center">
            {first && <div>
                <p className="leading-4 font-light text-black/70 border-b-2 border-black">{day.slice(5, 7)}</p>
                <p className="leading-5 text-lg font-semibold">{day.slice(-2)}</p>
            </div>
            }
            {!state ?
                <form onSubmit={handleRed}>
                    <button
                        className={`w-12 h-12 rounded-lg border-black border-2 mx-1.5 hover:scale-110 duration-100 bg-red-500 hover:bg-red-600`}
                    >
                    </button>
                </form>
                :
                <form onSubmit={handleGreen}>
                    <button
                        className={`w-12 h-12 rounded-lg border-black border-2 mx-1.5 hover:scale-110 duration-100 bg-green-500 hover:bg-green-600`}
                    >
                    </button>
                </form>
            }
        </div>
    )
}
