"use client";

import { ReusableDialog } from "@/components/shared/ReusableDialog";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/ui/DatePicker";
import { TimePicker } from "@/components/ui/TimePicker";
import { TModalComponentsProps } from "@/types/global";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

const CreateScheduleModal = ({
  isDialogOpen,
  setIsDialogOpen,
}: TModalComponentsProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [startTime, setStartTime] = useState<string | undefined>(undefined);
  const [endTime, setEndTime] = useState<string | undefined>(undefined);

  const handleCancel = () => {
    setIsDialogOpen(false);
  };

  const handleSubmit = () => {
    const scheduleData: FieldValues = {
      date: date,
      startTime: startTime,
      endTime: endTime,
    };
    console.log("Schedule Data:", scheduleData);

    setIsDialogOpen(false);
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
        <Button onClick={() => handleSubmit()}>Submit</Button>
        <Button variant={"outline"} onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </ReusableDialog>
  );
};

export default CreateScheduleModal;
