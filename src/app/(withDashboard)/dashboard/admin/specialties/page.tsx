'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, SquarePlus } from 'lucide-react'
import { useState } from 'react'


import CreateSpecialtyModal from '@/components/dashboard/admin/specialties/CreateSpecialtyModal'
import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import EditSpecialtyModal from '@/components/dashboard/admin/specialties/EditSpecialtyModal'



const doctors = [
    {
        id: '1',
        name: "Cardiologist",
        createdBy: "Sakib",
        status: "active",
    },
    {
        id: "2",
        name: "Dermatologist",
        createdBy: "michael scott",
        status: "active",
    },
    {
        id: "3",
        name: "Neurologist",
        createdBy: "will smith",
        status: "active",
    },
    {
        id: "4",
        name: "Dentist",
        createdBy: "Jon Doe",
        status: "inactive",
    }
];

const SpecialtiesPage = () => {

    const [searchParam, setSearchParam] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedSpecialty, setSelectedSpecialty] = useState('');

    const normalizedSearch = searchParam.trim().toLowerCase();
    const filteredSpecialties = doctors.filter((item) => {
        if (!normalizedSearch) return true;

        return (
            item.name.toLowerCase().includes(normalizedSearch) ||
            item.createdBy.toLowerCase().includes(normalizedSearch)
        );
    });

    const handleOpenEditModal = (id: string) => {
        setSelectedSpecialty(id);
        setIsEditOpen(true);
    }

    return (
        <div>
            <div className="md:flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-medium">All Specialties </h1>
                    <p className="text-gray-500 w-10/12 ">
                        Here you can view, add, edit, and delete specialties from the system.
                    </p>
                </div>

                <Button size={"lg"} onClick={() => setIsOpen(true)}>
                    <SquarePlus size={24} />
                    Add specialty{" "}
                </Button>
            </div>

            <div className="border mt-8 rounded-lg">
                <div className="flex justify-between items-center mb-4 p-4">
                    <Input
                        type="text"
                        placeholder="Search doctors"
                        StartIcon={Search}
                        value={searchParam}
                        onChange={(e) => setSearchParam(e.target.value)}
                        className="w-1/3 py-6 "
                    />

                    <Select>
                        <SelectTrigger className="w-[180px] py-6">
                            <SelectValue placeholder={`Sorted by: `} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Sort by</SelectLabel>

                                <SelectItem value="createdAt">Newest</SelectItem>
                                <SelectItem value="-createdAt">Oldest</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <Table>
                    <TableHeader className="rounded-md">
                        <TableRow className="overflow-hidden rounded-md bg-gray-100">
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Created By</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredSpecialties.map((item) => (
                            <TableRow key={item.id}>


                                <TableCell>
                                    <p>{item.name}</p>
                                </TableCell>

                                <TableCell>
                                    <Badge
                                        variant={item.status === "active" ? "success" : "destructive"}
                                        className="capitalize"
                                    >
                                        {item.status}
                                    </Badge>
                                </TableCell>

                                <TableCell>
                                    <p>{item.createdBy}</p>
                                </TableCell>

                                <TableCell>
                                    <div className="flex items-center space-x-4">
                                        <Button variant={"outline"} size={"sm"} onClick={() => {
                                            handleOpenEditModal(item.id)
                                        }}>
                                            Edit
                                        </Button>
                                        <Button variant={"destructive"} size={"sm"}>
                                            Delete
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Create Specialty Modal */}
            <CreateSpecialtyModal isDialogOpen={isOpen} setIsDialogOpen={setIsOpen} />

            {/* Edit Specialty Modal */}
            <EditSpecialtyModal isDialogOpen={isEditOpen} setIsDialogOpen={setIsEditOpen} itemId={selectedSpecialty} />
        </div>
    )
}

export default SpecialtiesPage