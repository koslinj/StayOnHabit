import DaysSwiper from "../../components/swiper/DaysSwiper";
import getAllHabitsForUser from "@/lib/database/getAllHabitsForUser";
import getAllDays from "@/lib/database/getAllDays";
import Link from "next/link";
import backIcon from '@/public/arrow_back.png'
import Image from 'next/image';

type Props = {
    params: {
        user_id: string
    }
}

export default async function Dashboard({ params }: Props) {
    const user_id = decodeURIComponent(params.user_id)
    const habitsData = await getAllHabitsForUser(user_id)
    if (!habitsData) {
        throw new Error('fetching habits failed!')
    }
    const habits = habitsData.rows as Habit[]

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
                <h1 className="text-2xl italic text-center text-black/70">{user_id} Dashboard</h1>
                <DaysSwiper allDays={allDays} habits={uniqueHabits} user={user_id} />
                <div className="w-40">
                    <Link href={'/dashboard'}>
                        <div className="group bg-white flex items-center justify-between mt-4 hover:-rotate-6 duration-200 p-2 rounded-xl border-black border-2">
                            <h2 className="text-xl italic font-bold">
                                Go back
                            </h2>
                            <Image src={backIcon} alt="go back arrow" width={50} height={50} className="group-hover:scale-125 duration-200" />
                        </div>
                    </Link>
                </div>
            </main>
        </div>

    )
}
