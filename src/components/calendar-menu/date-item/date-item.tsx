import { useCallback, useEffect, useRef } from "react";
import { useCalendarCell } from "@react-aria/calendar";
import { useDateFormatter } from "@react-aria/i18n";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import {
	isToday,
	isTomorrow,
	isAfterTomorrow,
	isYesterday,
	TIMEZONE,
} from "@/lib/calendar-date";
import { CalendarState } from "@react-stately/calendar";
import { CalendarDate } from "@internationalized/date";
import clsx from "clsx";
import Link from "next/link";

interface CalenderCellProps {
	state: CalendarState;
	date: CalendarDate;
}

export function DateItem(props: CalenderCellProps) {
	let ref = useRef<HTMLElement>(null);
	let { cellProps, buttonProps } = useCalendarCell(props, props.state, ref);
	let dateFormatter = useDateFormat({
		timeZone: props.state.timeZone,
		calendar: props.date.calendar.identifier,
	});
	let isSelected = props.state.isSelected(props.date);
	let cellRef = useCallback(
		(node: HTMLTableCellElement | null) => {
			if (node && isSelected) {
				node.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "center",
				});
			}
		},
		[isSelected]
	);
	let { focusProps, isFocusVisible } = useFocusRing();
	return (
		<td {...cellProps} ref={cellRef}>
			<span
				ref={ref}
				{...mergeProps(buttonProps, focusProps)}
				className={clsx(
					"flex items-center justify-center py-2 cursor-pointer whitespace-nowrap",
					isFocusVisible ? "outline outline-2" : "outline-none",
					isSelected
						? "text-black border-b-4 border-b-green-600"
						: "text-gray-600"
				)}
			>
				<Link href={`/tournaments?date=${props.date.toString()}`}>
					<a className="no-underline hover:no-underline focus:no-underline active:no-underline">
						{dateFormatter(props.date)}
					</a>
				</Link>
			</span>
		</td>
	);
}

function useDateFormat(options: { timeZone: string; calendar: string }) {
	const dayAndMonth = useDateFormatter({
		day: "numeric",
		month: "long",
		...options,
	});
	const dayOfWeek = useDateFormatter({
		weekday: "long",
		...options,
	});
	const dateFormatter = useCallback(
		(calenderDate: CalendarDate) => {
			if (isToday(calenderDate)) {
				return "امروز";
			}
			if (isYesterday(calenderDate)) {
				return "دیروز";
			}
			if (isTomorrow(calenderDate)) {
				return "فردا";
			}
			if (isAfterTomorrow(calenderDate)) {
				return dayOfWeek.format(calenderDate.toDate(TIMEZONE));
			}
			return dayAndMonth.format(calenderDate.toDate(TIMEZONE));
		},
		[dayAndMonth, dayOfWeek]
	);

	return dateFormatter;
}
