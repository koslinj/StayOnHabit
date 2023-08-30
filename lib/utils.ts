export function getPast60Days(): Date[] {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const past60Days = [];

    for (let i = 0; i < 60; i++) {
        const date = new Date(today);
        date.setHours(0,0,0,0);
        past60Days.unshift(date);
        date.setDate(today.getDate() - i);
    }

    return past60Days;
}

export function datesToString(data: boolean[], today: Date){
    const days: string[] = []
    for (let i = 0; i < data.length; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        console.log()
        const dateString = date.getFullYear() + '-' + String(date.getMonth()+1).padStart(2,'0') + '-' + String(date.getDate()).padStart(2,'0')
        days.unshift(dateString)
    }
    
    return days
}