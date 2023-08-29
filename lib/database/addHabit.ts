
export async function addHabit(name: string) {
    try {
        const res = await fetch('http://localhost:3000/api/habits', {
            method: 'POST',
            body: JSON.stringify({
                name
            }),
            headers: {
                "content-type": "application/json",
            },
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}