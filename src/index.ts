/**
 * Add a number of days to a date
 * @param date Initial date
 * @param days Number of days to add
 * @returns Adjusted date as a new object
 */
export function addDays(date: Date, days: number) {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
}

/**
 * Add a number of hours to a date
 * @param date Initial date
 * @param hours Number of hours to add
 * @returns Adjusted date as a new object
 */
export function addHours(date: Date, hours: number) {
    const d = new Date(date);
    d.setHours(d.getHours() + hours);
    return d;
}

/**
 * Add a number of minutes to a date
 * @param date Initial date
 * @param minutes Number of minutes to add
 * @returns Adjusted date as a new object
 */
export function addMinutes(date: Date, minutes: number) {
    const d = new Date(date);
    d.setMinutes(d.getMinutes() + minutes);
    return d;
}

/**
 * Add a number of seconds to a date
 * @param date Initial date
 * @param seconds Number of seconds to add
 * @returns Adjusted date as a new object
 */
export function addSeconds(date: Date, seconds: number) {
    const d = new Date(date);
    d.setSeconds(d.getSeconds() + seconds);
    return d;
}

/**
 * Get the Unix timestamp (number of seconds since epoch) from a date
 * @param date Date to convert
 * @returns Unix timestamp
 */
export function unix(date: Date) {
    return Math.floor(date.valueOf() / 1000);
}

export default { addDays, addHours, addMinutes, addSeconds, unix };
