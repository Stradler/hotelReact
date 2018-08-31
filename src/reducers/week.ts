export function generateWeek(): string[]{
    const today: Date = new Date();
    const week: string[] = [];
    for (let i: number = 0; i < 7; i += 1) {
        const tempDay: Date = new Date(today);
        tempDay.setDate(today.getDate() + i);
        week.push(`${tempDay.getDate()}.${tempDay.getMonth()}.${tempDay.getFullYear()}`);
      }
    return week;
}


export const week = (state = generateWeek(), action = {}): string[] => {
    return state;
};