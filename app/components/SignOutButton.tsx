'use client'
import { signOut } from "next-auth/react"
import Image from "next/image"
import logoutIcon from "@/public/logout_icon.png"

export default function SignOutButton() {
    return (
        <button className="hover:bg-white/50 rounded-2xl px-2 duration-200" onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}>
            <div className="flex flex-col justify-center items-center">
                <Image className="w-12" src={logoutIcon} alt="Logout Icon" />
                <p className="hidden lg:block">Sign Out</p>
            </div>
        </button>
    )
}