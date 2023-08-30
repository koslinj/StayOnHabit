import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import NewHabitButton from "../components/NewHabitButton";
import DaysSwiper from "../components/swiper/DaysSwiper";
import getAllHabitsForUser from "@/lib/database/getAllHabitsForUser";
import getAllDays from "@/lib/database/getAllDays";

export default async function Dashboard() {
    const session = await getServerSession(options)

    const habitsData = await getAllHabitsForUser(session?.user?.email as string)
    if(!habitsData){
        throw new Error('fetching habits failed!')
    }
    const habits = habitsData.rows as Habit[]

    const allDaysData = await getAllDays(session?.user?.email as string)
    if(!allDaysData){
        throw new Error('fetching all days failed!')
    }
    const allDays = allDaysData.rows as DaysRow[]

    const uniqueHabits = habits.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === habits.findIndex(obj => {
            return JSON.stringify(obj) === _value;
        });
    }) 

    return (
        <main className="bg-orange-300 px-4">
            <h1 className="text-xl font-bold mb-6">Dashboard</h1>
            <DaysSwiper allDays={allDays} habits={uniqueHabits} />
            <NewHabitButton />
        </main>
    )
}
