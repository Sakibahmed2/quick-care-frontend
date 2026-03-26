
"use client";

import QuickForm from "@/components/form/QuickForm";
import QuickInput from "@/components/form/QuickInput";
import { ReusableDialog } from "@/components/shared/ReusableDialog";
import { Button } from "@/components/ui/button";
import { TModalComponentsProps } from "@/types/global";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const SpecialtyFormValidationSchema = z.object({
    name: z.string().min(1, { message: "Specialty name is required" }),
})

const CreateSpecialtyModal = ({ isDialogOpen,
    setIsDialogOpen }: TModalComponentsProps) => {

    const onSubmit = () => {

    };

    return (
        <ReusableDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            title="Create Specialty"
            description="Create a new specialty for your doctors."
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
                resolver={zodResolver(SpecialtyFormValidationSchema)}
                className="space-y-3"
            >
                <QuickInput name="name" placeholder="Specialty name" label="Specialty name" />



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
    )
}

export default CreateSpecialtyModal