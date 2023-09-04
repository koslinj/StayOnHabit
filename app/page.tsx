import Link from "next/link";
import HomeSwiper from "./components/HomeSwiper";

export default function Home() {
    return (
        <main className="max-w-5xl mx-auto text-center px-4">
            <h1 className="p-4 lg:p-10 font-extrabold italic text-transparent text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">Stay On Habit</h1>
            <h2 className="text-2xl text-white font-bold">
                A place where you can track your daily routine and become more productive day after day. Just join us and start your progress today!
            </h2>
            <Link href="/dashboard">
                <div className="bg-gradient-to-b from-orange-400 to-orange-600 text-3xl font-bold p-10 rounded-2xl mt-10 mb-2 w-fit mx-auto hover:scale-110 duration-500">
                    <p>Go to your Dashboard</p>
                </div>
            </Link>
            <div className="mx-auto">
                <p className="text-white/60 italic text-lg">In order to use this app and see your dashboard you have to sign in with your github account!</p>
            </div>
            <HomeSwiper />
        </main>
    )
}
