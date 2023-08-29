import { datesToString } from "@/lib/utils"
import Square from "./Square"

type Props = {
    habit_id: number
    name: string
    data: boolean[]
}

export default function SquaresList({ habit_id, name, data }: Props) {
    const days = datesToString(data)
    
    return (
        <div className="flex my-2">
            <p className="w-32 break-words">{name}</p>
            {data.map((value, index) => (
                <Square key={index} day={days[index]} state={value} habit_id={habit_id} />
            ))}
        </div>
    )
}
