// enums
export const enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

export const enum TimeConstant {
    milliSecond = 1,
    second=1000,
    minute=60000,
    houre= 3600000,
    day = 24 * 3600000,
    week = 7 * 24 * 3600000
}

// intefaces ========================================================

export interface ICellData {
    date: Date;
}

export interface IConfigurations {
    dbVersion: string;
    startTime: number;
    endTime: number;
    //minutes
    durationInMinute: number;
    repeatEveryMinute: number;
    culture: string;
    startOfWeek: DayOfWeek;
}

export interface IDayCellData {
    startTime: Date;
    endTime: Date;
    isNotAvailable: boolean;
    comment: string;
}

export interface IDayCellStore {
    [dayIndex: number]: IDayCellData[];
}