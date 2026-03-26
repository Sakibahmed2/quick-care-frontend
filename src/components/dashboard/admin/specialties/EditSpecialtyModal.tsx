
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

const EditSpecialtyModal = ({ isDialogOpen,
    setIsDialogOpen }: TModalComponentsProps) => {

    const onSubmit = () => {

    };

    return (
        <ReusableDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            title="Edit Specialty"
            description="Edit the details of an existing specialty."
            className="w-[600px]"
        >
            <QuickForm
                onSubmit={onSubmit}
                defaultValues={{
                    name: "",
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

export default EditSpecialtyModal