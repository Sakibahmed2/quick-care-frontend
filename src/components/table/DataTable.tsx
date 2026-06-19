"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import useDebounce from "@/hooks/useDebounce"
import { useEffect, useState } from "react"
import Loading from "../ui/Loading"
import DataTablePagination from "./DataTablePagination"
import { DataTableToolbar } from "./DataTableToolbar"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]

    // Pagination
    page: number
    setPage: (page: number) => void
    totalPages: number

    // Search
    searchTerm?: string
    setSearchTerm?: (term: string) => void
    searchPlaceholder?: string

    // Sorting
    sorting?: SortingState
    setSorting?: (sorting: SortingState) => void

    isFetching?: boolean
    emptyMessage?: string
    toolbar?: React.ReactNode
}

export function DataTable<TData, TValue>({
    columns,
    data,
    page,
    setPage,
    totalPages,
    searchTerm,
    setSearchTerm,
    searchPlaceholder = "Search...",
    sorting,
    setSorting,
    isFetching = false,
    emptyMessage = "No results.",
    toolbar,

}: DataTableProps<TData, TValue>) {

    // Search debounce
    const [localSearch, setLocalSearch] = useState(searchTerm || "");
    const debouncedSearch = useDebounce(localSearch, 500);

    useEffect(() => {
        setLocalSearch(searchTerm ?? "");
    }, [searchTerm]);

    useEffect(() => {
        if (setSearchTerm && debouncedSearch !== (searchTerm ?? "")) {
            setSearchTerm(debouncedSearch);
            setPage(1); // reset to page 1 whenever the search changes
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearch]);


    // ---- sorting (controlled = server-side, uncontrolled = client-side) ----
    const [internalSorting, setInternalSorting] = useState<SortingState>([]);
    const isManualSorting = sorting !== undefined && setSorting !== undefined;
    const sortingState = isManualSorting ? sorting! : internalSorting;

    const handleSortingChange: React.Dispatch<React.SetStateAction<SortingState>> = (
        updater
    ) => {
        const next = typeof updater === "function" ? updater(sortingState) : updater;
        if (isManualSorting) {
            setSorting!(next);
            setPage(1);
        } else {
            setInternalSorting(next);
        }
    };



    const table = useReactTable({
        data,
        columns,
        state: { sorting: sortingState },
        onSortingChange: handleSortingChange,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: isManualSorting ? undefined : getSortedRowModel(),
        manualSorting: isManualSorting,
        manualPagination: true,
        manualFiltering: true,
    });


    return (
        <div className="border rounded-md bg-muted/40">
            {/* Toolbar */}
            <DataTableToolbar
                table={table}
                searchValue={localSearch}
                onSearchChange={setLocalSearch}
                searchPlaceholder={searchPlaceholder}
                toolbar={toolbar}
            />


            {/* Table */}
            <div className="relative rounded-md border">
                {isFetching && (
                    <Loading />
                )}
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                                    {emptyMessage}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>


            {/* Pagination */}
            <DataTablePagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
    )
}
