import EditDoctorForm from '@/components/dashboard/admin/doctor/EditDoctorForm';
import React from 'react'

const EditDoctorPage = async ({ params }: { params: Promise<{ edit: string }> }) => {
    const { edit } = await params;

    console.log({ edit })

    return (
        <div>
            <EditDoctorForm id={edit} />
        </div>
    )
}

export default EditDoctorPage