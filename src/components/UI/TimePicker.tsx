/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type TimeDisplayFormat = "12h" | "24h";

interface TimePickerProps {
  className?: string;
  value?: string;
  onChange?: (time: string) => void;
  label?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  stepMinutes?: number;
  displayFormat?: TimeDisplayFormat;
  disabled?: boolean;
}

const pad2 = (value: number) => value.toString().padStart(2, "0");

const clampStep = (stepMinutes: number | undefined) => {
  if (!stepMinutes || Number.isNaN(stepMinutes)) return 30;
  return Math.min(60, Math.max(1, Math.floor(stepMinutes)));
};

const formatTo12Hour = (value: string) => {
  const [hourText, minuteText] = value.split(":");
  const hour = Number(hourText);
  const minute = Number(minuteText);

  if (Number.isNaN(hour) || Number.isNaN(minute)) return value;

  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;

  return `${pad2(hour12)}:${pad2(minute)} ${period}`;
};

const parseTime = (value?: string) => {
  if (!value) {
    return { hour24: 0, minute: 0 };
  }

  const [hourText, minuteText] = value.split(":");
  const hour = Number(hourText);
  const minute = Number(minuteText);

  if (Number.isNaN(hour) || Number.isNaN(minute)) {
    return { hour24: 0, minute: 0 };
  }

  return {
    hour24: Math.min(23, Math.max(0, hour)),
    minute: Math.min(59, Math.max(0, minute)),
  };
};

const toHour12 = (hour24: number) => {
  const period = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;

  return { hour12, period };
};

const toHour24 = (hour12: number, period: "AM" | "PM") => {
  const normalized = hour12 % 12;

  return period === "PM" ? normalized + 12 : normalized;
};

export function TimePicker({
  className,
  value,
  onChange,
  label,
  id,
  name,
  placeholder = "Select time",
  stepMinutes = 1,
  displayFormat = "12h",
  disabled,
}: TimePickerProps) {
  const triggerId = id ?? React.useId();
  const step = React.useMemo(() => clampStep(stepMinutes), [stepMinutes]);
  const normalizedValue = value && value.trim() ? value : undefined;
  const { hour24, minute } = React.useMemo(
    () => parseTime(normalizedValue),
    [normalizedValue]
  );
  const { hour12, period } = React.useMemo(() => toHour12(hour24), [hour24]);
  const is24Hour = displayFormat === "24h";
  const triggerLabel = normalizedValue
    ? displayFormat === "24h"
      ? normalizedValue
      : formatTo12Hour(normalizedValue)
    : placeholder;
  const minuteOptions = React.useMemo(() => {
    const items: number[] = [];

    for (let valueIndex = 0; valueIndex < 60; valueIndex += step) {
      items.push(valueIndex);
    }

    if (!items.includes(minute)) {
      items.unshift(minute);
    }

    return items;
  }, [minute, step]);
  const hourOptions = React.useMemo(() => {
    if (is24Hour) {
      return Array.from({ length: 24 }, (_, index) => index);
    }

    return Array.from({ length: 12 }, (_, index) => index + 1);
  }, [is24Hour]);
  const handleChange = React.useCallback(
    (nextHour24: number, nextMinute: number) => {
      onChange?.(`${pad2(nextHour24)}:${pad2(nextMinute)}`);
    },
    [onChange]
  );

  const selectButtonClass = (isSelected: boolean) =>
    cn(
      "w-full rounded-md px-2 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
      isSelected
        ? "bg-primary text-primary-foreground"
        : "text-foreground hover:bg-primary/10",
      disabled && "pointer-events-none opacity-50"
    );

  return (
    <div className="space-y-1" data-name={name}>
      {label && (
        <label className="block text-sm text-gray-500" htmlFor={triggerId}>
          {label}
        </label>
      )}
      {name && (
        <input type="hidden" name={name} value={normalizedValue ?? ""} />
      )}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id={triggerId}
            variant="outline"
            type="button"
            disabled={disabled}
            aria-label={label ?? "Time"}
            className={cn(
              "w-full justify-between border-input bg-background px-3 text-left font-normal",
              !normalizedValue && "text-muted-foreground",
              className
            )}
          >
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary/80" />
              {triggerLabel}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[260px] p-3">
          <div
            className={cn(
              "grid gap-2",
              is24Hour ? "grid-cols-2" : "grid-cols-[1fr_1fr_70px]"
            )}
          >
            <div className="rounded-md border border-input bg-background">
              <div className="border-b border-input px-2 py-1 text-xs font-semibold text-slate-500">
                Hour
              </div>
              <div className="max-h-48 space-y-1 overflow-y-auto p-2">
                {hourOptions.map((hourOption) => {
                  const isSelected = is24Hour
                    ? hourOption === hour24
                    : hourOption === hour12;
                  const nextHour24 = is24Hour
                    ? hourOption
                    : toHour24(hourOption, period as "AM" | "PM");

                  return (
                    <button
                      key={hourOption}
                      type="button"
                      onClick={() => handleChange(nextHour24, minute)}
                      className={selectButtonClass(isSelected)}
                    >
                      {pad2(hourOption)}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-md border border-input bg-background">
              <div className="border-b border-input px-2 py-1 text-xs font-semibold text-slate-500">
                Min
              </div>
              <div className="max-h-48 space-y-1 overflow-y-auto p-2">
                {minuteOptions.map((minuteOption) => (
                  <button
                    key={minuteOption}
                    type="button"
                    onClick={() => handleChange(hour24, minuteOption)}
                    className={selectButtonClass(minuteOption === minute)}
                  >
                    {pad2(minuteOption)}
                  </button>
                ))}
              </div>
            </div>

            {!is24Hour && (
              <div className="rounded-md border border-input bg-background">
                <div className="border-b border-input px-2 py-1 text-xs font-semibold text-slate-500">
                  Period
                </div>
                <div className="space-y-1 p-2">
                  {["AM", "PM"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        handleChange(toHour24(hour12, option as "AM" | "PM"), minute)
                      }
                      className={selectButtonClass(option === period)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}