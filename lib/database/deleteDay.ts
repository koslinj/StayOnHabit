
export async function deleteDay(habit_id: number, day: string) {
    try {
        const res = await fetch('/api/days', {
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