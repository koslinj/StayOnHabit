import getAllHabits from "@/lib/database/getAllHabits"
import SquaresList from "../components/SquaresList";
import { createFinalArray, getPast10Days } from "@/lib/utils";

export default async function Dashboard() {
    const data = await getAllHabits()
    const rows = data?.rows as Habit[]

    const past10DaysArray = getPast10Days();
    const finalArray = createFinalArray(rows, past10DaysArray);

    return (
        <main className="bg-orange-300">
            <h1 className="text-xl font-bold mb-6">Dashboard</h1>
            {finalArray && finalArray.map((item, index: number) => (
                <SquaresList name={item.name} data={item.days} />
            ))}
        </main>
    )
}
