import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import NewHabitButton from "../components/NewHabitButton";
import DaysSwiper from "../components/swiper/DaysSwiper";
import getAllHabitsForUser from "@/lib/database/getAllHabitsForUser";
import getAllDays from "@/lib/database/getAllDays";
import getAllUsers from "@/lib/database/getAllUsers";
import Link from "next/link";

export default async function Dashboard() {
    const session = await getServerSession(options)
    const user_id = session?.user?.email as string

    const habitsData = await getAllHabitsForUser(user_id)
    if (!habitsData) {
        throw new Error('fetching habits failed!')
    }
    const habits = habitsData.rows as Habit[]

    const usersData = await getAllUsers()
    if (!usersData) {
        throw new Error('fetching users failed!')
    }
    const users = usersData.filter(item => item !== user_id)

    const allDaysData = await getAllDays(user_id)
    if (!allDaysData) {
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
        <div>
            <h1 className="text-center p-4 lg:p-10 font-extrabold italic text-transparent text-4xl tracking-wider lg:text-5xl bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">Stay On Habit</h1>
            <main className="bg-orange-300 rounded-2xl p-4">
                <h1 className="text-2xl italic text-center text-black/70">My Dashboard</h1>
                <DaysSwiper allDays={allDays} habits={uniqueHabits} user={user_id} />
                <NewHabitButton user={user_id} />
                <div className="flex flex-col items-center text-xl">
                    <h2 className="text-2xl font-semibold italic mb-2">Other users dashboards: </h2>
                    {users.map((item, index) => (
                        <Link key={index} href={'/dashboard/' + item}>
                            <p className="hover:underline hover:font-semibold duration-200 m-2">{item}</p>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    )
}
