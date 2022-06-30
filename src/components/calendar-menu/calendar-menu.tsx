import { Fragment, useRef } from "react";
import { useCalendarState } from "@react-stately/calendar";
import {
	AriaCalendarGridProps,
	useCalendar,
	useCalendarGrid,
} from "@react-aria/calendar";
import { CalendarDate, createCalendar } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { DateItem } from "./date-item";

interface WeekViewProps extends AriaCalendarGridProps {
	defaultValue: CalendarDate;
}

export function CalendarMenu(props: WeekViewProps) {
	let { locale } = useLocale();
	let state = useCalendarState({
		...props,
		visibleDuration: { years: 1 },
		locale,
		createCalendar,
	});
	let { calendarProps } = useCalendar(props, state);
	let { gridProps } = useCalendarGrid(props, state);
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
