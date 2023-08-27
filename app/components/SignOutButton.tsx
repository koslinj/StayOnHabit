'use client'
import { signOut } from "next-auth/react"

export default function SignOutButton() {
    return (
        <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}>Sign Out</button>
    )
}