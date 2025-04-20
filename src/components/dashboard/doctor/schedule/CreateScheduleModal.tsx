/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ReusableDialog } from "@/components/shared/ReusableDialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { TModalComponentsProps } from "@/types/global";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { format } from "date-fns";
import DatePicker from "@/components/ui/DatePicker";
import { TimePicker } from "@/components/ui/TimePicker";
import QuickForm from "@/components/form/QuickForm";

const CreateScheduleModal = ({
  isDialogOpen,
  setIsDialogOpen,
}: TModalComponentsProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [startTime, setStartTime] = useState<string | undefined>(undefined);
  const [endTime, setEndTime] = useState<string | undefined>(undefined);

  const handleCancel = () => {
    setIsDialogOpen(false);
  };

  const handleSubmit = (data: FieldValues) => {
    data = {
      date: date,
      startTime: startTime,
      endTime: endTime,
    };
    console.log(data);
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
      <QuickForm
        onSubmit={handleSubmit}
        defaultValues={{
          date: date,
          startTime: startTime,
          endTime: endTime,
        }}
      >
        <div className="space-y-3">
          <DatePicker date={date} setDate={setDate} label="Pick a date" />
          <div className="flex gap-4 ">
            <TimePicker
              value={startTime}
              onChange={setStartTime}
              label="Start time"
            />
            <TimePicker
              value={endTime}
              onChange={setEndTime}
              label="End time"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6 gap-4">
          <Button type="submit">Submit</Button>
          <Button type="button" variant={"outline"} onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </QuickForm>
    </ReusableDialog>
  );
};

export default CreateScheduleModal;
