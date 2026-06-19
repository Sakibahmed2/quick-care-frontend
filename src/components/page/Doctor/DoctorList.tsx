/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import DoctorCard from "@/components/ui/DoctorCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { TDoctor, TDoctorListResult } from "@/api/services/doctor.api";
import useDebounce from "@/hooks/useDebounce";


const DoctorList = ({ doctors }: {
    doctors: TDoctorListResult
}) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const doctor = doctors?.doctors || [];

    const [search, setSearch] = useState(
        searchParams.get("search") || ""
    );

    const debouncedSearch = useDebounce(
        search,
        500
    );


    useEffect(() => {
        const params = new URLSearchParams(
            searchParams.toString()
        );

        if (debouncedSearch) {
            params.set(
                "search",
                debouncedSearch
            );
        } else {
            params.delete("search");
        }

        router.push(
            `/doctors?${params.toString()}`
        );
    }, [debouncedSearch]);



    return (
        <>
            <Input
                placeholder="Search doctors"
                StartIcon={Search}
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
            />

            <div className="grid grid-cols-4 gap-8 mt-8">
                {
                    doctor.map((doctor: TDoctor) => (
                        <DoctorCard
                            key={doctor.id}
                            doctor={doctor}
                        />
                    ))
                }
            </div>
        </>
    )
}


export default DoctorList;