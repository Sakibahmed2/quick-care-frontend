"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AppointmentModal from "./AppointmentModal";

type DateOption = {
  label: string;
  day: string;
};

type Slot = {
  time: string;
  disabled?: boolean;
};

type SlotSection = {
  label: string;
  slots: Slot[];
};

const dateOptions: DateOption[] = [
  { label: "15 May", day: "Fri" },
  { label: "16 May", day: "Sat" },
  { label: "17 May", day: "Sun" },
  { label: "18 May", day: "Mon" },
];

const slotSections: SlotSection[] = [
  {
    label: "Morning",
    slots: [
      { time: "09:00 AM", disabled: true },
      { time: "09:10 AM", disabled: true },
      { time: "09:20 AM", disabled: true },
      { time: "09:30 AM", disabled: true },
      { time: "09:40 AM", disabled: true },
      { time: "09:50 AM", disabled: true },
      { time: "10:00 AM", disabled: true },
      { time: "10:10 AM", disabled: true },
      { time: "10:20 AM", disabled: true },
      { time: "10:30 AM", disabled: true },
      { time: "10:40 AM", disabled: true },
      { time: "10:50 AM", disabled: true },
      { time: "11:00 AM", disabled: true },
      { time: "11:10 AM", disabled: true },
      { time: "11:20 AM", disabled: true },
      { time: "11:30 AM" },
      { time: "11:40 AM" },
      { time: "11:50 AM" },
    ],
  },
  {
    label: "Afternoon",
    slots: [
      { time: "12:00 PM" },
      { time: "12:10 PM" },
      { time: "12:20 PM" },
      { time: "12:30 PM" },
      { time: "12:40 PM" },
      { time: "12:50 PM" },
      { time: "01:00 PM" },
      { time: "01:10 PM" },
      { time: "01:20 PM" },
      { time: "01:30 PM" },
      { time: "01:40 PM" },
      { time: "01:50 PM" },
      { time: "02:00 PM" },
      { time: "02:10 PM" },
      { time: "02:20 PM" },
      { time: "02:30 PM" },
      { time: "02:40 PM" },
      { time: "02:50 PM" },
      { time: "03:00 PM" },
      { time: "03:10 PM" },
      { time: "03:20 PM" },
      { time: "03:30 PM" },
      { time: "03:40 PM" },
      { time: "03:50 PM" },
    ],
  },
  {
    label: "Evening",
    slots: [
      { time: "04:00 PM" },
      { time: "04:10 PM" },
      { time: "04:20 PM" },
      { time: "04:30 PM" },
      { time: "04:40 PM" },
      { time: "04:50 PM" },
      { time: "05:00 PM", disabled: true },
    ],
  },
];

const AppointmentCarousel = () => {
  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDateShift = (direction: "prev" | "next") => {
    setSelectedDate((current) => {
      if (direction === "prev") {
        return Math.max(0, current - 1);
      }
      return Math.min(dateOptions.length - 1, current + 1);
    });
  };


  return (
    <div className="mt-4">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full border border-slate-200 text-slate-600 hover:text-primary"
          aria-label="Previous dates"
          onClick={() => handleDateShift("prev")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="grid grid-cols-4 gap-2">
          {dateOptions.map((date, index) => (
            <button
              key={date.label}
              type="button"
              onClick={() => setSelectedDate(index)}
              className={cn(
                "rounded-md  px-1 py-2 text-center text-xs  transition-colors",
                selectedDate === index
                  ? "bg-primary/5 text-primary"
                  : "border-transparent text-slate-500 hover:text-primary"
              )}
            >
              <div className="font-semibold">{date.label}</div>
              <div className="text-[11px]">{date.day}</div>
            </button>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full border border-slate-200 text-slate-600 hover:text-primary"
          aria-label="Next dates"
          onClick={() => handleDateShift("next")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {slotSections.map((section) => (
        <div key={section.label} className="mt-5">
          <p className="text-sm font-semibold text-slate-600">
            {section.label}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {section.slots.map((slot) => {
              const slotKey = `${section.label}-${slot.time}`;
              const isSelected = selectedSlot === slotKey;

              return (
                <button
                  key={slotKey}
                  type="button"
                  disabled={slot.disabled}
                  onClick={() =>
                    setSelectedSlot(slot.disabled ? null : slotKey)
                  }
                  className={cn(
                    "rounded-md border px-2 py-2 text-xs font-semibold transition-colors",
                    slot.disabled
                      ? "cursor-not-allowed border-slate-200 bg-slate-50 text-slate-300"
                      : isSelected
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-primary/30 text-slate-700 hover:border-primary/60"
                  )}
                >
                  {slot.time}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div>
        <Button
          className="mt-6 w-full"
          disabled={!selectedSlot}
          onClick={() => setIsDialogOpen(true)}
        >
          Book Appointment
        </Button>
      </div>

      {/* Appointment modal*/}
      <AppointmentModal isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />

    </div>
  );
};

export default AppointmentCarousel;
