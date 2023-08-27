'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

export default function page() {
    return (
        <main className="flex justify-center items-center text-center mt-40">
            <div className="bg-slate-200 rounded-2xl p-6">
                <p className="text-4xl font-bold mb-8">Sign In</p>
                <div className="bg-slate-700 text-white text-lg p-4 rounded-2xl flex justify-center gap-4">
                    <button onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000/dashboard' })}>Sign in with GitHub</button>
                    <Image src="/github-mark-white.png" alt="github logo" width={50} height={50} />
                </div>
            </div>
        </main>
    )
}