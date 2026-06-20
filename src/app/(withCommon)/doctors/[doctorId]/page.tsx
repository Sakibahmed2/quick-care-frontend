import { doctorApi } from "@/api/services/doctor.api";
import doctor1 from "@/assets/doctors/doctor1.png";
import AppointmentCarousel from "@/components/page/Doctor/AppointmentCarousel";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import { Share2 } from "lucide-react";
import Image from "next/image";

const SingleDoctorPage = async ({
  params,
}: {
  params: Promise<{ doctorId: string }>;
}) => {
  const doctorId = (await params).doctorId;

  const doctorInfo = await doctorApi.getDoctorInfo(doctorId);

  // console.log(doctorInfo)


  const {
    user,
    specialty,
    experience,
    about,
    qualification,
    fees,
    location,
    services,
    schedules
  } = doctorInfo;





  return (
    <Container className="mt-10 pt-10 w-full">
      <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start">
        <div className="w-full lg:w-[70%]">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
              <div className="flex items-start gap-4">
                <Image
                  src={doctor1}
                  alt="doctor image"
                  className="h-24 w-24 rounded-lg bg-primary/10 object-cover p-2"
                />
                <div className="space-y-1">
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
                    {user?.name}
                  </h2>
                  <p className="text-sm text-slate-500">{qualification}</p>
                  <p className="text-sm text-slate-700">{specialty}</p>
                  <p className="text-sm font-medium text-primary">
                    {experience} Years of Experience
                  </p>
                  <p className="text-sm text-slate-500">{location}</p>
                  <p className="text-sm text-slate-500">
                    Appointment Fee: <span className="font-semibold">${fees}</span>
                  </p>
                </div>
              </div>

            </div>


            <Separator className="my-4" />

            <div>
              <p className="text-sm font-medium text-slate-700">Serves for:</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {services.map((service: string) => (
                  <Badge
                    key={service}
                    variant="outline"
                    className="border-slate-200 bg-slate-50 text-xs text-slate-600"
                  >
                    {service}
                  </Badge>
                ))}
                <button
                  type="button"
                  className="text-xs font-semibold text-primary hover:text-primary/80"
                >
                  View more
                </button>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-700">About</p>
              <button
                type="button"
                className="text-primary hover:text-primary/80"
                aria-label="Share doctor profile"
              >
                <Share2 className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {about}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[30%]">
          <div className="rounded-lg border bg-white p-5 shadow-sm">
            <h2 className="text-lg md:text-xl font-semibold text-slate-800">
              Booking a slot
            </h2>
            <AppointmentCarousel schedules={schedules} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleDoctorPage;
