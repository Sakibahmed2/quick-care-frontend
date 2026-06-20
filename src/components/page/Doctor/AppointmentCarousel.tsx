/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import generateSlots from "@/utils/generateSlots";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import AppointmentModal from "./AppointmentModal";


const generateDates = () => {

  const dates = [];

  const today = new Date();


  for (let i = 0; i < 7; i++) {

    const date = new Date(today);

    date.setDate(
      today.getDate() + i
    );


    dates.push({
      date,
      label: date.toLocaleDateString(
        "en-US",
        {
          day: "numeric",
          month: "short"
        }
      ),
      day: date.toLocaleDateString(
        "en-US",
        {
          weekday: "short"
        }
      )
    });

  }


  return dates;

};

const groupSlots = (slots: any[]) => {

  const morning: any[] = [];
  const afternoon: any[] = [];
  const evening: any[] = [];


  slots.forEach(slot => {

    const hour = slot.startTime.getHours();


    if (hour < 12) {
      morning.push(slot)
    }
    else if (hour < 17) {
      afternoon.push(slot)
    }
    else {
      evening.push(slot)
    }

  });


  return [
    {
      label: "Morning",
      slots: morning
    },
    {
      label: "Afternoon",
      slots: afternoon
    },
    {
      label: "Evening",
      slots: evening
    }
  ].filter(
    item => item.slots.length
  );

}


type TSchedule = {
  id: string;
  doctorId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  slotDuration: number;
  createdAt: string;
  updatedAt: string;
}

const AppointmentCarousel = ({ schedules }: { schedules: TSchedule[] }) => {
  const [selectedDate, setSelectedDate] = useState(0)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDateShift = (direction: "prev" | "next") => {
    setSelectedDate((current) => {
      if (direction === "prev") {
        return Math.max(0, current - 1);
      }
      return Math.min(dates.length - 1, current + 1);
    });
  };

  const dates = generateDates();

  const selectedSchedule = schedules.find(
    (schedule) => {

      return schedule.dayOfWeek ===
        dates[selectedDate].date.getDay();

    }
  );

  const slots = selectedSchedule
    ?
    generateSlots(
      selectedSchedule.startTime,
      selectedSchedule.endTime,
      selectedSchedule.slotDuration
    )
    :
    [];

  const slotSections = groupSlots(slots);

  console.log({ schedules })


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
          {dates.map((date, index) => (
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

              const slotKey = slot.startTime.toISOString();

              const isSelected = selectedSlot === slotKey;


              return (
                <button
                  key={slotKey}
                  type="button"
                  onClick={() => setSelectedSlot(slotKey)}
                  className={cn(
                    "rounded-md border px-2 py-2 text-xs font-semibold",
                    isSelected
                      ?
                      "border-primary bg-primary/5 text-primary"
                      :
                      "border-primary/30 text-slate-700 hover:border-primary"
                  )}
                >

                  {slot.label}

                </button>
              )

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
