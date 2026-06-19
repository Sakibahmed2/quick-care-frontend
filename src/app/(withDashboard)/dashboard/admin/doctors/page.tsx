"use client";

import { useGetDoctors } from "@/api/hooks/doctor.hook";
import { TDoctor } from "@/api/services/doctor.api";
import { DataTable } from "@/components/table/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Loading from "@/components/ui/Loading";
import { ColumnDef, SortingState } from "@tanstack/react-table";
import { Edit, Eye, SquarePlus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const AdminDoctorPage = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);


  const {
    data,
    isLoading,
    isFetching,
  } = useGetDoctors({
    page,
    searchTerm,
    sortBy: sorting[0]?.id,
    sortOrder: sorting[0] ? (sorting[0].desc ? "desc" : "asc") : undefined,
  });

  if (isLoading) {
    return (
      <Loading />
    )
  }

  const doctorData = data?.doctors ?? [];
  const meta = data?.meta;

  console.log(meta)

  const doctorColumns: ColumnDef<TDoctor>[] = [
    {
      id: "name",
      accessorFn: (row) => row.user.name,
      header: "Name",
      cell: ({ row }) => {
        const doctor = row.original;
        return (
          <div className="flex items-center space-x-4">
            <Image
              src={doctor.user.img || "/placeholder.png"}
              alt={doctor.user.name}
              className="h-12 w-12 rounded-full"
              height={48}
              width={48}
            />
            <div className="flex flex-col items-start">
              <p className="font-semibold">{doctor.user.name}</p>
              <Badge variant="outline" className="text-gray-500">
                {doctor.experience} years
              </Badge>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "specialty",
      header: "Specialty",
    },
    {
      id: "availability",
      accessorFn: (row) => (row.user.isActive ? "active" : "inactive"),
      header: "Availability",
      cell: ({ row }) => {
        const doctor = row.original;
        return (
          <Badge
            variant={doctor.user.isActive ? "success" : "danger"}
            className="capitalize"
          >
            {doctor.user.isActive ? "Active" : "Inactive"}
          </Badge>
        );
      },
      filterFn: (row, id, value) =>
        String(row.getValue(id)) === String(value),
    },
    {
      id: "actions",
      header: "Actions",
      enableSorting: false,
      enableColumnFilter: false,
      cell: ({ row }) => (

        <div className="flex items-center space-x-2">
          <Link href={`/dashboard/admin/doctors/${row.original.id}`}>
            <Button variant="outline" size="sm"
            >
              <Edit size={16} />
            </Button>
          </Link>
          <Button variant="destructive" size="sm">
            <Trash size={16} />
          </Button>
          <Button variant="default" color="blue" size="sm">
            <Eye size={16} />
          </Button>
        </div>
      ),
    },
  ]


  return (
    <div>
      <div className="md:flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium">All doctors </h1>
          <p className="text-gray-500 w-10/12 ">
            Here you can view, add, edit, and delete doctors from the system.
          </p>
        </div>
        <Link href={"/dashboard/admin/doctors/create"}>
          <Button size={"lg"} >
            <SquarePlus size={24} />
            Add doctor{" "}
          </Button>
        </Link>
      </div>

      <div className="mt-8">

        <DataTable
          columns={doctorColumns}
          data={doctorData}
          page={page}
          setPage={setPage}
          totalPages={meta?.totalPages || 1}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchPlaceholder="Search doctors..."
          sorting={sorting}
          setSorting={setSorting}
          isFetching={isFetching}
          emptyMessage="No doctors found."

        />

      </div>

    </div>
  );
};

export default AdminDoctorPage;
