import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"

export default async function Navbar() {
    const session = await getServerSession(options)

    return (
        <nav className="bg-orange-500 flex justify-between text-xl font-bold p-4">
            <div className="flex gap-8">
                <Link href='/'>Home</Link>
                <Link href='/dashboard'>Dashboard</Link>
            </div>
            {session && <SignOutButton />}
        </nav>
    )
}
