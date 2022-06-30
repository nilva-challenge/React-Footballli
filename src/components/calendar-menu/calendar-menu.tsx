import { Fragment, useEffect, useRef, useState } from "react";
import { useCalendarState } from "@react-stately/calendar";
import {
	AriaCalendarGridProps,
	useCalendar,
	useCalendarGrid,
} from "@react-aria/calendar";
import { createCalendar } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { DateItem } from "./date-item";
import { useRouterDate } from "./use-router-date";

export function CalendarMenu() {
	const dateValue = useRouterDate();
	const { locale } = useLocale();
	const state = useCalendarState({
		visibleDuration: { years: 1 },
		locale,
		createCalendar,
		value: dateValue,
	});
	const { calendarProps } = useCalendar({}, state);
	const { gridProps } = useCalendarGrid({}, state);
	return (
		<div {...calendarProps}>
			<table {...gridProps}>
				<tbody>
					<tr className="flex gap-4 w-screen overflow-x-scroll hide-scrollbar">
						{[...new Array(53).keys()].map((weekIndex) => (
							<Fragment key={weekIndex}>
								{state
									.getDatesInWeek(weekIndex)
									.map((date, i) =>
										date ? (
											<DateItem key={i} state={state} date={date} />
										) : (
											<td key={i} />
										)
									)}
							</Fragment>
						))}
					</tr>
				</tbody>
			</table>
		</div>
	);
}
