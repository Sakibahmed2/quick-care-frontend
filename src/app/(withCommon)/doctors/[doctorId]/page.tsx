import doctor1 from "@/assets/doctors/doctor1.png";
import doctor2 from "@/assets/doctors/doctor2.png";
import AppointmentCarousel from "@/components/page/Doctor/AppointmentCarousel";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import { Share2 } from "lucide-react";
import Image from "next/image";

const defaultServices = [
  "Bacterial Vaginosis",
  "Dysmenorrhea (Menstrual Disorder)",
  "Embolization",
  "Female Sexual Dysfunction",
  "Gynae Problems",
  "Hormone Disturbances",
  "Hysteroscopy",
  "Menorrhagia (Menstrual Disorder)",
];

const doctors = [
  {
    id: "1",
    name: "Dr. Nargis Fatema",
    img: doctor1,
    credentials: "MBBS, FCPS, MS",
    specialty: "Gynecologist & Obstetrician",
    experience: "24 Years of Experience Overall",
    registration: "BMDC Reg: Coming Soon",
    doctorCode: "ID: D13RZ66",
    hospitalName: "Square Hospitals Ltd",
    hospitalAddress:
      "18/F, Bir Uttam Qazi Nuruzzaman Sarak, Panthapath, 12, Dhanmondi, Dhaka-1205, Bangladesh",
    availabilityDays: "Sat Sun Mon Tue Wed",
    availabilityTime: "Thu 9:00 AM - 05:00 PM",
    services: defaultServices,
    about:
      "Dr. Nargis Fatema is an Obstetrics & Gynaecology specialist in Dhaka. Her credentials include MBBS from Sir Salimullah Medical College, FCPS in Obstetrics & Gynaecology from BCPS, and MS (ObsGyn) from BSMMU. She previously served under the Ministry of Health and Family Welfare and worked at Dhaka Medical College Hospital and Sir Salimullah Medical College & Mitford Hospital. She received advanced training in laparoscopic surgery from BIRDEM and has participated in many national and international workshops, seminars, and symposiums. With 24 years of experience, she has special interest in high-risk pregnancy and laparoscopic surgery. She is currently working as a full-time consultant at Square Hospital since 2007. For appointments or additional information, please contact us at: 09611530530.",
    fees: "$150",
    isAvailable: true,
  },
  {
    id: "2",
    name: "Dr. Michael Johnson",
    img: doctor2,
    credentials: "MBBS, DDV",
    specialty: "Dermatologist",
    experience: "8 Years of Experience Overall",
    registration: "BMDC Reg: Coming Soon",
    doctorCode: "ID: D13RZ67",
    hospitalName: "Square Hospitals Ltd",
    hospitalAddress:
      "18/F, Bir Uttam Qazi Nuruzzaman Sarak, Panthapath, 12, Dhanmondi, Dhaka-1205, Bangladesh",
    availabilityDays: "Sat Sun Mon Tue Wed",
    availabilityTime: "Thu 9:00 AM - 05:00 PM",
    services: defaultServices,
    about:
      "Dr. Johnson has extensive experience in treating skin diseases and providing advanced dermatological care.",
    fees: "$120",
    isAvailable: false,
  },
  {
    id: "3",
    name: "Dr. Sarah Williams",
    img: doctor2,
    credentials: "MBBS, FCPS",
    specialty: "Pediatrician",
    experience: "12 Years of Experience Overall",
    registration: "BMDC Reg: Coming Soon",
    doctorCode: "ID: D13RZ68",
    hospitalName: "Square Hospitals Ltd",
    hospitalAddress:
      "18/F, Bir Uttam Qazi Nuruzzaman Sarak, Panthapath, 12, Dhanmondi, Dhaka-1205, Bangladesh",
    availabilityDays: "Sat Sun Mon Tue Wed",
    availabilityTime: "Thu 9:00 AM - 05:00 PM",
    services: defaultServices,
    about:
      "Dr. Williams is dedicated to providing exceptional healthcare to children of all ages.",
    fees: "$100",
    isAvailable: true,
  },
  {
    id: "4",
    name: "Dr. James Anderson",
    img: doctor1,
    credentials: "MBBS, MS",
    specialty: "Orthopedic Surgeon",
    experience: "15 Years of Experience Overall",
    registration: "BMDC Reg: Coming Soon",
    doctorCode: "ID: D13RZ69",
    hospitalName: "Square Hospitals Ltd",
    hospitalAddress:
      "18/F, Bir Uttam Qazi Nuruzzaman Sarak, Panthapath, 12, Dhanmondi, Dhaka-1205, Bangladesh",
    availabilityDays: "Sat Sun Mon Tue Wed",
    availabilityTime: "Thu 9:00 AM - 05:00 PM",
    services: defaultServices,
    about:
      "Dr. Anderson is a leading expert in treating bone and joint issues, ensuring patients recover quickly.",
    fees: "$200",
    isAvailable: true,
  },
];

const SingleDoctorPage = async ({
  params,
}: {
  params: Promise<{ doctorId: string }>;
}) => {
  const doctorId = (await params).doctorId;

  const doctor = doctors.find((doctor) => doctor.id === doctorId);

  if (!doctor) {
    return <p>Doctor not found</p>;
  }

  const {
    name,
    img,
    specialty,
    experience,
    about,
    credentials,
    registration,
    doctorCode,
    services,
  } = doctor;

  return (
    <Container className="mt-10 pt-10 w-full">
      <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start">
        <div className="w-full lg:w-[70%]">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
              <div className="flex items-start gap-4">
                <Image
                  src={img}
                  alt="doctor image"
                  className="h-24 w-24 rounded-lg bg-primary/10 object-cover p-2"
                />
                <div className="space-y-1">
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
                    {name}
                  </h2>
                  <p className="text-sm text-slate-500">{credentials}</p>
                  <p className="text-sm text-slate-700">{specialty}</p>
                  <p className="text-sm font-medium text-primary">
                    {experience}
                  </p>
                  <p className="text-sm text-slate-500">{registration}</p>
                  <p className="text-sm text-slate-500">{doctorCode}</p>
                </div>
              </div>

            </div>


            <Separator className="my-4" />

            <div>
              <p className="text-sm font-medium text-slate-700">Serves for:</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {services.map((service) => (
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
            <AppointmentCarousel />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleDoctorPage;
