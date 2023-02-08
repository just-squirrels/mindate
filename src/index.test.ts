import { describe, expect, test } from "@jest/globals";
import mindates from ".";

const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = MS_PER_SECOND * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;

describe("addDays", () => {
    test("does not mutate input", () => {
        const date = new Date("2000-01-01");
        expect(mindates.addDays(date, 1)).not.toEqual(date);
    });

    test("adjusts date by days", () => {
        const date = new Date("2000-01-01");
        const changed = mindates.addDays(date, 40);
        expect(changed.valueOf()).toEqual(date.valueOf() + 40 * MS_PER_DAY);
    });
});

describe("addHours", () => {
    test("does not mutate input", () => {
        const date = new Date("2000-01-01");
        expect(mindates.addHours(date, 1)).not.toEqual(date);
    });

    test("adjusts date by hours", () => {
        const date = new Date("2000-01-01");
        const changed = mindates.addHours(date, 40);
        expect(changed.valueOf()).toEqual(date.valueOf() + 40 * MS_PER_HOUR);
    });
});

describe("addMinutes", () => {
    test("does not mutate input", () => {
        const date = new Date("2000-01-01");
        expect(mindates.addMinutes(date, 1)).not.toEqual(date);
    });

    test("adjusts date by minutes", () => {
        const date = new Date("2000-01-01");
        const changed = mindates.addMinutes(date, 40);
        expect(changed.valueOf()).toEqual(date.valueOf() + 40 * MS_PER_MINUTE);
    });
});

describe("addSeconds", () => {
    test("does not mutate input", () => {
        const date = new Date("2000-01-01");
        expect(mindates.addSeconds(date, 1)).not.toEqual(date);
    });

    test("adjusts date by seconds", () => {
        const date = new Date("2000-01-01");
        const changed = mindates.addSeconds(date, 40);
        expect(changed.valueOf()).toEqual(date.valueOf() + 40 * MS_PER_SECOND);
    });
});

describe("unix", () => {
    test("returns seconds since epoch", () => {
        const date = new Date("2000-01-01");
        expect(mindates.unix(date)).toEqual(Math.floor(date.valueOf() / 1000));
    });
});