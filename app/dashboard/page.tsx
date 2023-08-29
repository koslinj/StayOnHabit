import getAllHabits from "@/lib/database/getAllHabits"
import SquaresList from "../components/SquaresList";
import { createFinalArray, getPast10Days } from "@/lib/utils";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import NewHabitButton from "../components/NewHabitButton";

export default async function Dashboard() {
    const session = await getServerSession(options)
    const data = await getAllHabits(session?.user?.email as string)
    const rows = data?.rows as Habit[]

    const past10DaysArray = getPast10Days();
    const finalArray = createFinalArray(rows, past10DaysArray).sort((a, b) => a.habit_id - b.habit_id);

    return (
        <main className="bg-orange-300 px-4">
            <h1 className="text-xl font-bold mb-6">Dashboard</h1>
            {finalArray && finalArray.map((item, index: number) => (
                <SquaresList habit_id={item.habit_id} name={item.name} data={item.days} />
            ))}
            <NewHabitButton />
        </main>
    )
}
