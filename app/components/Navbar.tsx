import Link from "next/link";
import SignOutButton from "./SignOutButton";

export default async function Navbar() {
    return (
        <nav className="bg-orange-500 flex justify-between text-xl font-bold p-4">
            <div className="flex gap-8">
                <Link href='/'>Home</Link>
                <Link href='/dashboard'>My Dashboard</Link>
            </div>
            <SignOutButton />
        </nav>
    )
}
