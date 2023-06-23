import { Dayjs } from "dayjs";
interface CalendarDate {
    currentMonth: boolean;
    date: Dayjs;
    today?: boolean;
}
export declare const generateDate: (month?: number, year?: number) => CalendarDate[];
export declare const months: string[];
export {};
