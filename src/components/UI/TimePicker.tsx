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
  const [hour, setHour] = React.useState<string>(
    value ? value.split(":")[0] : "12"
  );
  const [minute, setMinute] = React.useState<string>(
    value ? value.split(":")[1].split(" ")[0] : "00"
  );
  const [period, setPeriod] = React.useState<"AM" | "PM">(
    value ? (value.includes("PM") ? "PM" : "AM") : "AM"
  );

  React.useEffect(() => {
    if (onChange) {
      onChange(`${hour}:${minute} ${period}`);
    }
  }, [hour, minute, period, onChange]);

  return (
    <div className="w-full">
      <label className="mb-1 block text-sm text-gray-500 ">{label}</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !value && "text-muted-foreground",
              className
            )}
          >
            <Clock className="mr-2 h-4 w-4" />
            {value ? value : "Select time"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4">
          <div className="flex items-center space-x-2">
            <Select value={hour} onValueChange={(newHour) => setHour(newHour)}>
              <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="Hour" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                  <SelectItem key={h} value={h.toString().padStart(2, "0")}>
                    {h.toString().padStart(2, "0")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="text-center text-xl">:</span>
            <Select
              value={minute}
              onValueChange={(newMinute) => setMinute(newMinute)}
            >
              <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="Minute" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                  <SelectItem key={m} value={m.toString().padStart(2, "0")}>
                    {m.toString().padStart(2, "0")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={period}
              onValueChange={(newPeriod) => setPeriod(newPeriod as "AM" | "PM")}
            >
              <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="AM/PM" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AM">AM</SelectItem>
                <SelectItem value="PM">PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
