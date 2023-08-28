'use client'
type Props = {
    state: boolean
}

export default function Square({ state }: Props) {
    return (
        <div
            onClick={ () => console.log('a')}
            className={`w-12 h-12 mx-2 hover:scale-110 duration-100 ${state ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
        >
        </div>
    )
}
