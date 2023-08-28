import Square from "./Square"

type Props = {
    habit_id: number
    name: string
    data: boolean[]
    user_id: string
}

export default function SquaresList({ habit_id, name, data, user_id }: Props) {
    const days: string[] = []
    const today = new Date();
    for (let i = 0; i < data.length; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        console.log()
        const dateString = date.getFullYear() + '-' + String(date.getMonth()+1).padStart(2,'0') + '-' + String(date.getDate()).padStart(2,'0')
        days.unshift(dateString)
    }
    console.log(days)
    
    return (
        <div className="flex my-2">
            <p className="w-32 break-words">{name}</p>
            {data.map((value, index) => (
                <Square day={days[index]} state={value} habit_id={habit_id} user_id={user_id} />
            ))}
        </div>
    )
}
