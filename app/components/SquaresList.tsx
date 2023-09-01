"use client"
import Square from "./Square"
import { datesToString } from "@/lib/utils"

type Props = {
    days: Date[]
    allDays: DaysRow[]
    habit_id: number
    first: boolean
    user: string
}

export default function SquaresList({ days, allDays, habit_id, first, user }: Props) {

    const formatedDays = days.map(day => new Date(day.setHours(0,0,0,0)).toString())
    const filtered: boolean[] = []
    console.log(allDays)
    console.log(formatedDays)
    formatedDays.forEach(day => {
        const x = allDays.some(e => new Date(e.day.setHours(0,0,0,0)).toString() === day && e.habit_id === habit_id)
        filtered.push(x)
    })
    const maxDate = new Date(Math.max(...days.map(e => e.getTime())));
    const finalDates = datesToString(filtered, maxDate)
    console.log(filtered)
    return (
        <div className={`flex ${first ? 'items-start h-28' : 'items-center h-24'}`}>
            {filtered.map((value, index) => (
                <Square key={index} day={finalDates[index]} state={value} habit_id={habit_id} first={first} user={user} />
            ))}
        </div>
    )
}
