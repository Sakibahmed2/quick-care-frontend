"use client";

import * as React from "react";
import { format } from "date-fns";
import { cn } from "@/lib/cn";
import { Button } from "@/components/UI/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";
import { ScrollArea, ScrollBar } from "@/components/UI/scroll-area";
import { ClockIcon } from "lucide-react"; // Changed from CalendarIcon to ClockIcon

interface TimePickerProps {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  placeholder?: string;
}

export function TimePicker({ value, onChange, placeholder }: TimePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1); // Hours from 1 to 12
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5); // Minutes in 5-minute intervals

  const handleTimeChange = (
    type: "hour" | "minute" | "ampm",
    value: string
  ) => {
    const newDate = value ? new Date(value) : new Date(); // Use the selected date or current date
    if (type === "hour") {
      newDate.setHours(
        (parseInt(value) % 12) + (newDate.getHours() >= 12 ? 12 : 0)
      );
    } else if (type === "minute") {
      newDate.setMinutes(parseInt(value));
    } else if (type === "ampm") {
      const currentHours = newDate.getHours();
      newDate.setHours(value === "PM" ? currentHours + 12 : currentHours - 12);
    }
    onChange(newDate);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <ClockIcon className="mr-2 h-4 w-4" /> {/* Changed to ClockIcon */}
          {value ? (
            format(value, "hh:mm aa") // Display only time
          ) : (
            <span>{placeholder || "Select time"}</span> // Placeholder for time
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
          {/* Hours Section */}
          <ScrollArea className="w-64 sm:w-auto">
            <div className="flex sm:flex-col p-2">
              {hours.reverse().map((hour) => (
                <Button
                  key={hour}
                  size="icon"
                  variant={
                    value && value.getHours() % 12 === hour % 12
                      ? "default"
                      : "ghost"
                  }
                  className="sm:w-full shrink-0 aspect-square"
                  onClick={() => handleTimeChange("hour", hour.toString())}
                >
                  {hour}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="sm:hidden" />
          </ScrollArea>

          {/* Minutes Section */}
          <ScrollArea className="w-64 sm:w-auto">
            <div className="flex sm:flex-col p-2">
              {minutes.map((minute) => (
                <Button
                  key={minute}
                  size="icon"
                  variant={
                    value && value.getMinutes() === minute ? "default" : "ghost"
                  }
                  className="sm:w-full shrink-0 aspect-square"
                  onClick={() => handleTimeChange("minute", minute.toString())}
                >
                  {minute.toString().padStart(2, "0")}{" "}
                  {/* Ensure 2-digit format */}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="sm:hidden" />
          </ScrollArea>

          {/* AM/PM Section */}
          <ScrollArea className="">
            <div className="flex sm:flex-col p-2">
              {["AM", "PM"].map((ampm) => (
                <Button
                  key={ampm}
                  size="icon"
                  variant={
                    value &&
                    ((ampm === "AM" && value.getHours() < 12) ||
                      (ampm === "PM" && value.getHours() >= 12))
                      ? "default"
                      : "ghost"
                  }
                  className="sm:w-full shrink-0 aspect-square"
                  onClick={() => handleTimeChange("ampm", ampm)}
                >
                  {ampm}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </PopoverContent>
    </Popover>
  );
}
