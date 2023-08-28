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
    const finalMap = new Map<string, {name: string, days: boolean[]}>();
    const names = new Set<string>();
    for (const activity of activityArray) {
      names.add(activity.name);
    }
    for (const name of Array.from(names)) {
        const activityObj: {
            name: string
            days: boolean[]
        } = {
            name: name,
            days: []
        };

        for (const date of pastDatesArray) {
            const hasActivity = activityArray.some(
                entry => entry.name === name && new Date(entry.day).toDateString() === new Date(date).toDateString()
            );
            activityObj.days.push(hasActivity);
        }

        finalMap.set(activityObj.name, {name: activityObj.name, days: activityObj.days} );
    }
    const finalArray = Array.from(finalMap.values())
    for (let item of finalArray){
        item.days.reverse()
    }
    return finalArray
}