type Habit = {
    habit_id: number
    name: string
}

type DaysRow = {
    day_id: number
    habit_id: number
    day: Date
    user_id: string
}