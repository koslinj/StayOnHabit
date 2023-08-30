"use client"
import Square from "./Square"
import { datesToString } from "@/lib/utils"

type Props = {
    days: Date[]
    allDays: DaysRow[]
    habit_id: number
}

export default function SquaresList({ days, allDays, habit_id }: Props) {

    const formatedDays = days.map(day => day.toString())
    const filtered: boolean[] = []
    formatedDays.forEach(day => {
        const x = allDays.some(e => e.day.toString() === day && e.habit_id === habit_id)
        filtered.push(x)
    })
    const maxDate = new Date(Math.max(...days.map(e => e.getTime())));
    const finalDates = datesToString(filtered, maxDate)

    return (
        <div className="flex my-2">
            {filtered.map((value, index) => (
                <Square key={index} day={finalDates[index]} state={value} habit_id={habit_id} />
            ))}
        </div>
    )
}
