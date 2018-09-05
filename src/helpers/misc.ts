import * as datefns from "date-fns";

export const generateBoolean = (): boolean => {
  const randomNaturalNumber = Math.floor(Math.random() * 10);
  return randomNaturalNumber % 2 === 0;
};

export function generateWeek(): string[] {
  const today: Date = new Date();
  const week: string[] = [];
  for (let i: number = 0; i < 7; i += 1) {
    const tempDay: Date = new Date(Number(today));
    tempDay.setDate(today.getDate() + i);
    week.push(
      `${tempDay.getDate()}.${tempDay.getMonth()}.${tempDay.getFullYear()}`
    );
  }
  return week;
}

export const checkDate = (date: string): boolean => {
  if (/([1-9]|[1-2][0-9]|3[0-1])\.([1-9]|1[0-2])\.\d{4}/.test(date)) {
    return true;
  }
  return false;
};

export const checkDates = (dateFrom: string, dateTo: string): boolean => {
  const dateFromArray: string[] = dateFrom.split(".").reverse();
  const dateToArray: string[] = dateFrom.split(".").reverse();
  const compareDates = datefns.compareAsc(
    new Date(
      Number(dateFromArray[2]),
      Number(dateFromArray[1]),
      Number(dateFromArray[0])
    ),
    new Date(
      Number(dateToArray[2]),
      Number(dateToArray[1]),
      Number(dateToArray[0])
    )
  );
  if (checkDate(dateFrom) && checkDate(dateTo)) {
    if (compareDates === -1 || compareDates === 0) {
      return true;
    }
  }
  return false;
};
