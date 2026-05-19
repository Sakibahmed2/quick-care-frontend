"use client";

import { useCreateDoctor } from "@/api/hooks/doctor.hook";
import { TCreateDoctorPayload } from "@/api/services/doctor.api";
import QuickForm from "@/components/form/QuickForm";
import QuickInput from "@/components/form/QuickInput";
import QuickSelect from "@/components/form/QuickSelect";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formValidationSchema = z.object({
    // Personal
    name: z.string().min(1, { message: "Name is required" }),
    img: z.string().min(1, { message: "Image URL is required" }),
    age: z.number().min(1, { message: "Age is required" }),
    gender: z.enum(["Male", "Female"]),
    location: z.string().min(1, { message: "Location is required" }),
    phone: z.string().min(1, { message: "Phone number is required" }),

    // Auth
    email: z.string().email(),
    password: z.string().min(6),

    // Professional
    specialty: z.string().min(1),
    experience: z.number().min(1),
    qualification: z.string().min(1),
    fees: z.number().min(1),
});

const CreateDoctorPage = () => {

    const createDoctorMutation = useCreateDoctor();

    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Creating doctor...");
        try {
            const doctorData: TCreateDoctorPayload = {
                name: data.name,
                img: data.img,
                age: data.age,
                gender: data.gender,
                location: data.location,
                email: data.email,
                password: data.password,
                specialty: data.specialty,
                experience: data.experience,
                qualification: data.qualification,
                fees: data.fees,
                phone: data.phone
            }
            await createDoctorMutation.mutateAsync(doctorData);
            toast.success("Doctor created successfully!", { id: toastId });

        } catch (err) {
            toast.error("Failed to create doctor.", { id: toastId });
            console.log(err);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto mb-10">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-semibold">Create Doctor</h1>
                <p className="text-gray-500 mt-1">
                    Add a new doctor with complete information for better patient experience.
                </p>
            </div>

            {/* Form */}
            <QuickForm
                onSubmit={onSubmit}
                resolver={zodResolver(formValidationSchema)}
                defaultValues={{
                    name: "Sakib Ahmed ",
                    img: "https://media.istockphoto.com/id/1337144145/photo/portrait",
                    age: 22,
                    gender: "Male",
                    location: "Dhaka",
                    email: "sakib@gmail.com",
                    password: "sakib123",
                    specialty: "Cardiologist",
                    experience: 4,
                    qualification: "MBBS, FCPS",
                    fees: 500,
                    phone: "01712345678"
                }}
                className="space-y-6"
            >
                {/* ================= PERSONAL INFO ================= */}
                <div className="border rounded-xl p-5 shadow-sm space-y-4">
                    <h2 className="text-lg font-medium">Personal Information</h2>




                    <div className="grid grid-cols-2 gap-4">
                        <QuickInput name="name" label="Full Name" placeholder="Dr. John Doe" />
                        <QuickInput name="age" label="Age" placeholder="30" type="number" />

                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <QuickInput name="phone" label="Phone" placeholder="01712345678" />
                        <QuickSelect
                            name="gender"
                            label="Gender"
                            placeholder="Select gender"
                            values={[
                                { label: "Male", value: "Male" },
                                { label: "Female", value: "Female" }
                            ]}
                        />
                    </div>

                    <QuickInput name="img" label="Profile Image URL" placeholder="https://..." />

                    <QuickInput name="location" label="Location" placeholder="Dhaka" />
                </div>

                {/* ================= AUTH ================= */}
                <div className="border rounded-xl p-5 shadow-sm space-y-4">
                    <h2 className="text-lg font-medium">Authentication</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <QuickInput name="email" label="Email" placeholder="doctor@email.com" />
                        <QuickInput
                            name="password"
                            label="Password"
                            placeholder="******"
                            type="password"
                        />
                    </div>
                </div>

                {/* ================= PROFESSIONAL ================= */}
                <div className="border rounded-xl p-5 shadow-sm space-y-4">
                    <h2 className="text-lg font-medium">Professional Information</h2>


                    <div className="grid grid-cols-2 gap-4">
                        <QuickInput name="experience" label="Experience (years)" placeholder="5" type="number" />
                        <QuickInput name="fees" label="Consultation Fee" placeholder="500" type="number" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <QuickInput
                            name="qualification"
                            label="Qualification"
                            placeholder="MBBS, FCPS"
                        />
                        <QuickInput
                            name="specialty"
                            label="Specialty"
                            placeholder="Cardiologist"
                        />
                    </div>
                </div>

                {/* ================= ACTION ================= */}
                <div className="flex justify-end gap-4 pt-2">
                    <Button type="submit">Create Doctor</Button>
                    <Button type="button" variant="outline">
                        Cancel
                    </Button>
                </div>
            </QuickForm>
        </div>
    );
};

export default CreateDoctorPage;