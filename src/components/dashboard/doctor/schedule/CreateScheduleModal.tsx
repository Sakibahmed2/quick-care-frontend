"use client";

import { TScheduleCreateInput } from "@/api/services/schedule.api";
import { useCreateSchedule } from "@/api/hooks/schedule.hook";
import { ReusableDialog } from "@/components/shared/ReusableDialog";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/ui/DatePicker";
import { TimePicker } from "@/components/ui/TimePicker";
import useProfile from "@/hooks/useProfile";
import { TModalComponentsProps } from "@/types/global";
import { toast } from "sonner";
import { useState } from "react";

const pad2 = (value: number) => value.toString().padStart(2, "0");

const toTimeValue = (value: Date) =>
  `${pad2(value.getHours())}:${pad2(value.getMinutes())}`;

const combineDateAndTime = (baseDate: Date, timeValue: string) => {
  const [hourText, minuteText] = timeValue.split(":");
  const hour = Number(hourText);
  const minute = Number(minuteText);

  if (Number.isNaN(hour) || Number.isNaN(minute)) {
    return undefined;
  }

  const combined = new Date(baseDate);
  combined.setHours(hour, minute, 0, 0);
  return combined;
};

const CreateScheduleModal = ({
  isDialogOpen,
  setIsDialogOpen,
}: TModalComponentsProps) => {
  const { profile, isLoadingProfile } = useProfile();
  const [date, setDate] = useState<Date | undefined>(() => new Date());
  const [startTime, setStartTime] = useState<string | undefined>(() =>
    toTimeValue(new Date()),
  );
  const [endTime, setEndTime] = useState<string | undefined>(() =>
    toTimeValue(new Date()),
  );

  const createScheduleMutation = useCreateSchedule();

  const handleCancel = () => {
    setIsDialogOpen(false);
  };


  const handleSubmit = async () => {
    if (!profile?.id) {
      toast.error("Doctor profile not available. Please log in again.");
      return;
    }

    if (!date || !startTime || !endTime) {
      toast.error("Please select a date, start time, and end time.");
      return;
    }

    const startDateTime = combineDateAndTime(date, startTime);
    const endDateTime = combineDateAndTime(date, endTime);

    if (!startDateTime || !endDateTime) {
      toast.error("Invalid time format. Please reselect times.");
      return;
    }

    if (startDateTime >= endDateTime) {
      toast.error("End time must be after start time.");
      return;
    }

    const scheduleDate = new Date(date);
    scheduleDate.setHours(0, 0, 0, 0);

    const payload: TScheduleCreateInput = {
      date: scheduleDate,
      start_time: startDateTime,
      end_time: endDateTime,
      status: "available",
    };

    try {
      await createScheduleMutation.mutateAsync(payload);
      toast.success("Schedule created successfully.");
      setIsDialogOpen(false);
    } catch {
      toast.error("Failed to create schedule. Please try again.");
    }
  };



  return (
    <ReusableDialog
      isOpen={isDialogOpen}
      onClose={() => setIsDialogOpen(false)}
      title="Create Schedule"
      description="Create a new schedule for your patients."
      className="w-[600px]"
    >
      <div className="space-y-3">
        <DatePicker date={date} setDate={setDate} label="Pick a date"

        />
        <div className="flex gap-4 ">
          <TimePicker
            value={startTime}
            onChange={setStartTime}
            label="Start time"
          />
          <TimePicker value={endTime} onChange={setEndTime} label="End time" />
        </div>
      </div>

      <div className="flex justify-end mt-6 gap-4">
        <Button
          onClick={handleSubmit}
          disabled={createScheduleMutation.isPending || isLoadingProfile}
        >
          {createScheduleMutation.isPending ? "Saving..." : "Submit"}
        </Button>
        <Button variant={"outline"} onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </ReusableDialog>
  )
}


export default CreateScheduleModal;
