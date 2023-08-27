
async function getAllData() {
    const res = await fetch('http://localhost:3000/api/habits', { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Dashboard() {
    const data = await getAllData()


    return (
        <main className="bg-orange-300">
            <h1 className="text-xl font-bold mb-6">Dashboard</h1>
            {data.habits.rows.map((item: Habit, index: number) => (
                <div key={index} className="flex gap-4">
                    <p>{item.name}</p>
                    <p>{Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: "numeric" }).format(new Date(item.day))}</p>
                </div>

            ))}
        </main>
    )
}
