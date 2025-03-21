"use client";

import { ReusableDialog } from "@/components/shared/ReusableDialog";
import { Button } from "@/components/UI/button";
import { TimePicker } from "@/components/UI/TimePicker";
import { TModalComponentsProps } from "@/types/global";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const CreateScheduleModal = ({
  isDialogOpen,
  setIsDialogOpen,
}: TModalComponentsProps) => {
  const [selectedTime, setSelectedTime] = useState<string>("");

  console.log(selectedTime);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const handleCancel = () => {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TimePicker value={selectedTime} onChange={setSelectedTime} />
        </div>

        <div className="flex justify-end mt-6 gap-4">
          <Button type="submit">Submit</Button>
          <Button variant={"outline"} onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </ReusableDialog>
  );
};

export default CreateScheduleModal;
