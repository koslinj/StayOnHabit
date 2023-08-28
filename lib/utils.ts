export function getPast10Days(): Date[] {
    const today = new Date();
    const past10Days = [];

    for (let i = 0; i < 10; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        past10Days.push(date);
    }

    return past10Days;
}

export function createFinalArray(activityArray: Habit[], pastDatesArray: Date[]) {
    const finalMap = new Map<string, { habit_id: number, name: string, days: boolean[] }>();
    const habits = new Set<{ habit_id: number, name: string }>();
    for (const activity of activityArray) {
        habits.add({ habit_id: activity.habit_id, name: activity.name });
    }
    for (const habit of Array.from(habits)) {
        const activityObj: {
            habit_id: number
            name: string
            days: boolean[]
        } = {
            habit_id: habit.habit_id,
            name: habit.name,
            days: []
        };

        for (const date of pastDatesArray) {
            const hasActivity = activityArray.some(
                entry => entry.name === habit.name && new Date(entry.day).toDateString() === new Date(date).toDateString()
            );
            activityObj.days.push(hasActivity);
        }

        finalMap.set(activityObj.name, { habit_id: activityObj.habit_id, name: activityObj.name, days: activityObj.days });
    }
    const finalArray = Array.from(finalMap.values())
    for (let item of finalArray) {
        item.days.reverse()
    }
    return finalArray
}