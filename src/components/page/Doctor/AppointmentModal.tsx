import QuickForm from '@/components/form/QuickForm'
import QuickInput from '@/components/form/QuickInput'
import { ReusableDialog } from '@/components/shared/ReusableDialog'
import { Button } from '@/components/ui/button'
import { TModalComponentsProps } from '@/types/global'
import React from 'react'

const AppointmentModal = ({
    isDialogOpen,
    setIsDialogOpen
}: TModalComponentsProps) => {


    const handleCancel = () => {
        setIsDialogOpen(false);
    };

    const handleSubmit = () => {
        setIsDialogOpen(false);
    };


    return (
        <ReusableDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            title="Book Appointment"
            description="Select a date and time for your appointment."
            className="w-[600px]"
        >

            <QuickForm onSubmit={handleSubmit}>
                <QuickInput name='reason' label='Reason for Appointment' />
            </QuickForm>

            <div className="flex justify-end mt-6 gap-4">
                <Button onClick={() => handleSubmit()}>Submit</Button>
                <Button variant={"outline"} onClick={handleCancel}>
                    Cancel
                </Button>
            </div>

        </ReusableDialog>
    )
}

export default AppointmentModal