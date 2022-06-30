import {
	getLocalTimeZone,
	ZonedDateTime,
	toCalendarDate,
	isSameDay,
	CalendarDate,
} from "@internationalized/date";

export const TIMEZONE = new Intl.DateTimeFormat().resolvedOptions().timeZone;

function getTimeZoneOffset(ms: number, timeZone: string) {
	// Fast path for UTC.
	if (timeZone === "UTC") {
		return 0;
	}
	return new Date(ms).getTimezoneOffset() * -60 * 1000;
}

function fromAbsolute(ms: number, timeZone: string): ZonedDateTime {
	let offset = getTimeZoneOffset(ms, timeZone);
	let date = new Date(ms + offset);
	let year = date.getUTCFullYear();
	let month = date.getUTCMonth() + 1;
	let day = date.getUTCDate();
	let hour = date.getUTCHours();
	let minute = date.getUTCMinutes();
	let second = date.getUTCSeconds();
	let millisecond = date.getUTCMilliseconds();

	return new ZonedDateTime(
		year,
		month,
		day,
		timeZone,
		offset,
		hour,
		minute,
		second,
		millisecond
	);
}

export const getCalenderDate = (date: number) => {
	return toCalendarDate(fromAbsolute(date, TIMEZONE));
};

export const isToday = (date: CalendarDate) => {
	return isSameDay(date, getCalenderDate(Date.now()));
};

export const isYesterday = (date: CalendarDate) => {
	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	return isSameDay(date, getCalenderDate(yesterday.valueOf()));
};

export const isTomorrow = (date: CalendarDate) => {
	const tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	return isSameDay(date, getCalenderDate(tomorrow.valueOf()));
};

export const isAfterTomorrow = (date: CalendarDate) => {
	const afterTomorrow = new Date();
	afterTomorrow.setDate(afterTomorrow.getDate() + 2);
	return isSameDay(date, getCalenderDate(afterTomorrow.valueOf()));
};
