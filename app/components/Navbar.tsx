import Link from "next/link";
import Image from "next/image";
import SignOutButton from "./SignOutButton";
import homeIcon from "@/public/home_icon.png"
import dashboardIcon from "@/public/dashboard_icon.png"

export default async function Navbar() {
    return (
        <nav className="bg-orange-500 flex justify-between text-xl font-bold py-2 px-5 rounded-b-2xl">
            <div className="flex gap-5">
                <Link href='/'>
                    <div className="flex flex-col justify-center items-center hover:bg-white/50 rounded-2xl px-2 duration-200">
                        <Image className="w-12" src={homeIcon} alt="Home Icon" />
                        <p className="hidden lg:block">Home</p>
                    </div>
                </Link>
                <Link href='/dashboard'>
                    <div className="flex flex-col justify-center items-center hover:bg-white/50 rounded-2xl px-2 duration-200">
                        <Image className="w-12" src={dashboardIcon} alt="Dashboard Icon" />
                        <p className="hidden lg:block">My Dashboard</p>
                    </div>
                </Link>
            </div>
            <SignOutButton />
        </nav>
    )
}
