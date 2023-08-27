import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-fuchsia-700">
        <Link href='/'>Home</Link>
        <Link href='/dashboard'>Dashboard</Link>
    </nav>
  )
}
