"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface Day {
  date: Date;
}

function buildMonth(date: Date): Day[] {
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const days: Day[] = [];

  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: new Date(date.getFullYear(), date.getMonth(), i),
    });
  }

  const offset = days[0].date.getDay();

  for (let i = offset; i > 0; i--) {
    days.unshift({
      date: new Date(date.getFullYear(), date.getMonth(), 0 - (offset - i)),
    });
  }

  const offsetEnd = 6 - days[days.length - 1].date.getDay();
  for (let i = 0; i < offsetEnd; i++) {
    days.push({
      date: new Date(date.getFullYear(), date.getMonth() + 1, i + 1),
    });
  }

  return days;
}

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [days, setDays] = useState(buildMonth(new Date()));

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
    setDays(
      buildMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
      )
    );
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
    setDays(
      buildMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
      )
    );
  };

  function isCurrentMonth(day: Day): boolean {
    return (
      day.date.getMonth() === currentMonth.getMonth() &&
      day.date.getFullYear() === currentMonth.getFullYear()
    );
  }

  function isToday(day: Day): boolean {
    return (
      day.date.getDate() === new Date().getDate() &&
      day.date.getMonth() === new Date().getMonth() &&
      day.date.getFullYear() === new Date().getFullYear()
    );
  }

  function isSelected(day: Day): boolean {
    return (
      day.date.getDate() === selectedDate.getDate() &&
      day.date.getMonth() === selectedDate.getMonth() &&
      day.date.getFullYear() === selectedDate.getFullYear()
    );
  }

  return (
    <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
      <div className="flex items-center text-gray-900">
        <button
          type="button"
          className="m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon
            className="h-5 w-5"
            aria-hidden="true"
            onClick={prevMonth}
          />
        </button>
        <div className="flex-auto text-sm font-semibold">
          {monthNames[currentMonth.getMonth()]}
        </div>
        <button
          type="button"
          className="m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon
            className="h-5 w-5"
            aria-hidden="true"
            onClick={nextMonth}
          />
        </button>
      </div>
      <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
        {days.map((day, dayIdx) => (
          <button
            key={day.date.toString()}
            type="button"
            onClick={() => setSelectedDate(day.date)}
            className={classNames(
              "py-1.5 hover:bg-gray-100 focus:z-10",
              isCurrentMonth(day) ? "bg-white" : "bg-gray-50",
              (isSelected(day) || isToday(day)) && "font-semibold",
              isSelected(day) && "text-white",
              !isSelected(day) &&
                isCurrentMonth(day) &&
                !isToday(day) &&
                "text-gray-900",
              !isSelected(day) &&
                !isCurrentMonth(day) &&
                !isToday(day) &&
                "text-gray-400",
              isToday(day) && !isSelected(day) && "text-indigo-600",
              dayIdx === 0 && "rounded-tl-lg",
              dayIdx === 6 && "rounded-tr-lg",
              dayIdx === days.length - 7 && "rounded-bl-lg",
              dayIdx === days.length - 1 && "rounded-br-lg"
            )}
          >
            <time
              dateTime={day.date.toISOString()}
              className={classNames(
                "mx-auto flex h-7 w-7 items-center justify-center rounded-lg",
                isSelected(day) && isToday(day) && "bg-indigo-600",
                isSelected(day) && !isToday(day) && "bg-gray-900"
              )}
            >
              {day.date.getDate()}
            </time>
          </button>
        ))}
      </div>
      <button
        type="button"
        className="mt-8 w-full rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add event
      </button>
    </div>
  );
}
