'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

export default function page() {
    return (
        <main className="flex justify-center items-center text-center">
            <div className="bg-gradient-to-b from-orange-400 to-orange-600 p-10 rounded-2xl mt-40">
                <p className="text-4xl font-bold mb-8">Sign In</p>
                <div className="bg-slate-700 text-white text-lg p-4 rounded-2xl flex justify-center gap-4">
                    <button onClick={() => signIn('github', { callbackUrl: process.env.BASE_URL + '/dashboard' })}>Sign in with GitHub</button>
                    <Image src="/github-mark-white.png" alt="github logo" width={50} height={50} />
                </div>
            </div>
        </main>
    )
}
