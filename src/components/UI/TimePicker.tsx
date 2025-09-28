"use client";

import * as React from "react";
import { Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TimePickerProps {
  className?: string;
  value?: string;
  onChange?: (time: string) => void;
  label?: string;
}

export function TimePicker({
  className,
  value,
  onChange,
  label,
}: TimePickerProps) {
  // Parse the initial value or use defaults
  const parseTimeValue = (timeStr?: string) => {
    if (!timeStr) return { hour: "12", minute: "00", period: "AM" as const };

    try {
      const [timePart, periodPart] = timeStr.split(" ");
      const [hourStr, minuteStr] = timePart.split(":");

      return {
        hour: hourStr?.padStart(2, "0") || "12",
        minute: minuteStr?.padStart(2, "0") || "00",
        period: (periodPart?.toUpperCase() === "PM" ? "PM" : "AM") as "AM" | "PM"
      };
    } catch {
      return { hour: "12", minute: "00", period: "AM" as const };
    }
  };

  const [timeState, setTimeState] = React.useState(() => parseTimeValue(value));

  // Sync with external value changes
  React.useEffect(() => {
    if (value) {
      const parsed = parseTimeValue(value);
      setTimeState(parsed);
    }
  }, [value]);

  // Update time state and call onChange only when complete and valid
  const updateTime = (updates: Partial<typeof timeState>) => {
    const newState = { ...timeState, ...updates };
    setTimeState(newState);

    // Only call onChange if we have all values
    if (onChange && newState.hour && newState.minute && newState.period) {
      const newTime = `${newState.hour}:${newState.minute} ${newState.period}`;
      // Prevent unnecessary calls if time hasn't changed
      if (newTime !== value) {
        onChange(newTime);
      }
    }
  };


  return (
    <div className="w-full">
      {label && (
        <label className="mb-1 block text-sm text-gray-500">{label}</label>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !value && "text-muted-foreground",
              className
            )}
            aria-label={value ? `Selected time: ${value}` : "Select time"}
          >
            <Clock className="mr-2 h-4 w-4" />
            {value ? value : "Select time"}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-4"
          align="start"
          sideOffset={8}
        >
          <div className="flex items-center space-x-2">
            <Select
              value={timeState.hour}
              onValueChange={(newHour) => updateTime({ hour: newHour })}
            >
              <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="Hour" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                  <SelectItem
                    className="cursor-pointer hover:bg-primary/10"
                    key={h}
                    value={h.toString().padStart(2, "0")}
                  >
                    {h.toString().padStart(2, "0")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <span className="text-center text-xl">:</span>

            <Select
              value={timeState.minute}
              onValueChange={(newMinute) => updateTime({ minute: newMinute })}
            >
              <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="Minute" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                  <SelectItem
                    className="cursor-pointer hover:bg-primary/10"
                    key={m}
                    value={m.toString().padStart(2, "0")}
                  >
                    {m.toString().padStart(2, "0")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={timeState.period}
              onValueChange={(newPeriod) => updateTime({ period: newPeriod as "AM" | "PM" })}
            >
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder="AM/PM" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="cursor-pointer hover:bg-primary/10" value="AM">
                  AM
                </SelectItem>
                <SelectItem className="cursor-pointer hover:bg-primary/10" value="PM">
                  PM
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}