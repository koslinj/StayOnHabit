import Square from "./Square"

type Props = {
    name: string
    data: boolean[]
}

export default function SquaresList({ name, data }: Props) {
    return (
        <div className="flex my-2">
            <p className="w-32 break-words">{name}</p>
            {data.map((value, index) => (
                <Square state={value} />
            ))}
        </div>
    )
}
