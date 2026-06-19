import { doctorApi } from "@/api/services/doctor.api";
import DoctorList from "@/components/page/Doctor/DoctorList";
import Container from "@/components/ui/Container";


const DoctorsPage = async ({ searchParams }: {
  searchParams: {
    search?: string
  }
}) => {

  const doctor = await doctorApi.getDoctors({
    searchTerm: searchParams.search
  })


  return (
    <Container className="pt-20 pb-10 backdrop-blur-md">
      <div className="flex items-center">
        <div className=" mb-5">
          <h1 className="text-3xl font-medium">Doctors</h1>

          <p className="text-gray-500 w-10/12 ">
            Find the best doctors in your area. Search by specialty or name to
            find the right doctor for you.
          </p>
        </div>


      </div>

      <hr className="border mb-4" />

      <DoctorList doctors={doctor} />

    </Container>
  );
};

export default DoctorsPage;
