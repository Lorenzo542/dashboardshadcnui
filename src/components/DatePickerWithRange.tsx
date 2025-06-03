"use client";
import * as React from "react";
import {
	addDays,
	subDays,
	subWeeks,
	subMonths,
	subQuarters,
	subYears,
	startOfWeek,
	endOfWeek,
	startOfMonth,
	endOfMonth,
	startOfQuarter,
	endOfQuarter,
	startOfYear,
	endOfYear,
	format,
} from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function DatePickerWithRange({ className }: React.HTMLAttributes<HTMLDivElement>) {
	const [date, setDate] = React.useState<DateRange | undefined>({
		from: new Date(2022, 0, 20),
		to: addDays(new Date(2022, 0, 20), 20),
	});

	const handlePresetSelect = (value: string) => {
		const today = new Date();
		let from: Date;
		let to: Date;

		switch (value) {
			case "yesterday":
				from = subDays(today, 1);
				to = subDays(today, 1);
				break;
			case "lastweek":
				from = startOfWeek(subWeeks(today, 1));
				to = endOfWeek(subWeeks(today, 1));
				break;
			case "lastmonth":
				from = startOfMonth(subMonths(today, 1));
				to = endOfMonth(subMonths(today, 1));
				break;
			case "lastquarter":
				from = startOfQuarter(subQuarters(today, 1));
				to = endOfQuarter(subQuarters(today, 1));
				break;
			case "lastyear":
				from = startOfYear(subYears(today, 1));
				to = endOfYear(subYears(today, 1));
				break;
			default:
				return;
		}

		setDate({ from, to });
	};

	return (
		<div className={cn("grid gap-2", className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id="date"
						variant={"outline"}
						className={cn(
							"w-[300px] justify-start text-left font-normal",
							!date && "text-muted-foreground"
						)}
					>
						<CalendarIcon />
						{date?.from ? (
							date.to ? (
								<>
									{format(date.from, "LLL dd, y")} -{" "}
									{format(date.to, "LLL dd, y")}
								</>
							) : (
								format(date.from, "LLL dd, y")
							)
						) : (
							<span>Pick a date range</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent align="start" className="flex w-auto flex-col space-y-2 p-2">
					<Select onValueChange={handlePresetSelect}>
						<SelectTrigger>
							<SelectValue placeholder="Select preset" />
						</SelectTrigger>
						<SelectContent position="popper">
							<SelectItem value="yesterday">Yesterday</SelectItem>
							<SelectItem value="lastweek">Last Week</SelectItem>
							<SelectItem value="lastmonth">Last Month</SelectItem>
							<SelectItem value="lastquarter">Last Quarter</SelectItem>
							<SelectItem value="lastyear">Last Year</SelectItem>
						</SelectContent>
					</Select>
					<div className="rounded-md border">
						<Calendar
							initialFocus
							mode="range"
							defaultMonth={date?.from}
							selected={date}
							onSelect={setDate}
							numberOfMonths={2}
							key={date?.from?.getTime()} // Force re-render when date changes
						/>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
}
