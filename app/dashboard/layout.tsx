import Navbar from "../components/Navbar"

export const revalidate = 0

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Navbar />
            {children}
        </section>
    )
}