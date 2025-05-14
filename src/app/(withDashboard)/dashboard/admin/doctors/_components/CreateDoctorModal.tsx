import QuickForm from "@/components/form/QuickForm";
import QuickInput from "@/components/form/QuickInput";
import { ReusableDialog } from "@/components/shared/ReusableDialog";
import { Button } from "@/components/ui/button";
import { TModalComponentsProps } from "@/types/global";
import React from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 character" }),
  specialty: z.string().min(1, { message: "Specialty is required" }),
  location: z.string().min(1, { message: "Location is required" }),
});

const CreateDoctorModal = ({
  isDialogOpen,
  setIsDialogOpen,
}: TModalComponentsProps) => {
  const onSubmit = (data: FieldValues) => {
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
        onSubmit={onSubmit}
        defaultValues={{
          name: "",
          email: "",
          password: "",
          specialty: "",
          location: "",
        }}
        resolver={zodResolver(formValidationSchema)}
        className="space-y-3"
      >
        <QuickInput name="name" placeholder="Name" label="Doctor name" />

        <div className="flex gap-3">
          <QuickInput name="email" placeholder="Email" label="Doctor email" />
          <QuickInput
            name="password"
            placeholder="Password"
            label="Doctor password "
          />
        </div>

        <div className="flex gap-3">
          <QuickInput
            name="specialty"
            placeholder="Specialty"
            label="Doctor specialty"
          />
          <QuickInput
            name="location"
            placeholder="Location"
            label="Doctor location"
          />
        </div>

        <div className="flex justify-end mt-6 gap-4">
          <Button type="submit">Submit</Button>
          <Button
            type="button"
            variant={"outline"}
            onClick={() => setIsDialogOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </QuickForm>
    </ReusableDialog>
  );
};

export default CreateDoctorModal;
