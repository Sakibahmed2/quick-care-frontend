"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimeSlot {
  date: string;
  startTime: string;
  endTime: string;
  period: string;
}

const AppointmentCarousel = () => {
  // Generate sample time slots for demonstration
  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    for (let i = 0; i < 14; i++) {
      slots.push({
        date: "Wed Feb 2025",
        startTime: "01:00",
        endTime: "02:00",
        period: "PM",
      });
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  // Scroll the carousel
  const scrollCarousel = (direction: "left" | "right") => {
    const container = document.getElementById("time-slots-container");
    if (container) {
      const scrollAmount = 300;
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="w-full mx-auto px-4">
      <div className="relative">
        <div className="flex items-center">
          <div className="flex items-center gap-4 absolute -top-8 right-0">
            {/* Left navigation button */}
            <Button
              variant="ghost"
              size="icon"
              className="size-10 rounded-full border border-gray-600 bg-background shadow-sm"
              onClick={() => scrollCarousel("left")}
              aria-label="Scroll left"
            >
              <ChevronLeft />
            </Button>

            {/* Right navigation button */}
            <Button
              variant="ghost"
              size="icon"
              className="size-10 rounded-full border border-gray-600 bg-background shadow-sm"
              onClick={() => scrollCarousel("right")}
              aria-label="Scroll right"
            >
              <ChevronRight />
            </Button>
          </div>

          {/* Time slots container */}
          <div
            id="time-slots-container"
            className="flex w-full overflow-x-auto gap-4 py-4 px-2 scrollbar-hide snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {timeSlots.map((slot, index) => (
              <Card
                key={index}
                className={cn(
                  "flex-shrink-0 cursor-pointer snap-start transition-all border rounded-md hover:border-gray-400",
                  selectedSlot === index
                    ? "bg-primary/5 border-primary shadow-sm"
                    : ""
                )}
                onClick={() => setSelectedSlot(index)}
              >
                <CardContent className="p-4 flex flex-col items-center justify-center min-w-[180px]">
                  <div className="text-center">
                    <p className="font-medium">{slot.date}</p>
                    <p className="text-gray-600">
                      {slot.startTime} - {slot.endTime}
                      <br />
                      {slot.period}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Button variant={"outline"} size={"lg"}>
        Book an appointment
      </Button>
    </div>
  );
};

export default AppointmentCarousel;
