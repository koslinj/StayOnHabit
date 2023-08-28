
export async function deleteDay(habit_id: number, day: string) {
    try {
        const res = await fetch('http://localhost:3000/api/days', {
            method: 'DELETE',
            body: JSON.stringify({
                habit_id,
                day,
            }),
            headers: {
                "content-type": "application/json",
            },
        })
    } catch (error) {
        console.log(error)
    }
}