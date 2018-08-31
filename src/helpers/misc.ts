export const generateBoolean = (): boolean => {
    const randomNaturalNumber = Math.floor((Math.random() * 10));
    return randomNaturalNumber % 2 === 0;
}

export function generateWeek(): string[]{
    const today: Date = new Date();
    const week: string[] = [];
    for (let i: number = 0; i < 7; i += 1) {
        const tempDay: Date = new Date(Number(today));
        tempDay.setDate(today.getDate() + i);
        week.push(`${tempDay.getDate()}.${tempDay.getMonth()}.${tempDay.getFullYear()}`);
      }
    return week;
}