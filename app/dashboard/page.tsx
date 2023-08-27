import getAllHabits from "@/lib/getAllHabits"

export default async function Dashboard() {
    const data = await getAllHabits()
    const rows = data?.rows as Habit[]

    return (
        <main className="bg-orange-300">
            <h1 className="text-xl font-bold mb-6">Dashboard</h1>
            {rows && rows.map((item, index: number) => (
                <div key={index} className="flex gap-4">
                    <p>{item.name}</p>
                    <p>{Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: "numeric" }).format(new Date(item.day))}</p>
                </div>

            ))}
        </main>
    )
}
