import getAllHabits from "@/lib/database/getAllHabits"
import SquaresList from "../components/SquaresList";
import { createFinalArray, getPast10Days } from "@/lib/utils";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";

export default async function Dashboard() {
    const session = await getServerSession(options)
    const data = await getAllHabits(session?.user?.email as string)
    const rows = data?.rows as Habit[]

    const past10DaysArray = getPast10Days();
    const finalArray = createFinalArray(rows, past10DaysArray);

    return (
        <main className="bg-orange-300">
            <h1 className="text-xl font-bold mb-6">Dashboard</h1>
            {finalArray && finalArray.map((item, index: number) => (
                <SquaresList habit_id={item.habit_id} name={item.name} data={item.days} user_id={session?.user?.email as string} />
            ))}
        </main>
    )
}
