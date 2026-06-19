// components/table/DataTableToolbar.tsx
"use client";

import * as React from "react";
import { Table } from "@tanstack/react-table";
import { ArrowDownAZ, ArrowUpAZ, Search, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
    searchValue: string;
    onSearchChange: (value: string) => void;
    searchPlaceholder?: string;
    toolbar?: React.ReactNode; // extra filters/buttons (status filter, date range, etc.)
}

export function DataTableToolbar<TData>({
    table,
    searchValue,
    onSearchChange,
    searchPlaceholder = "Search...",
    toolbar,
}: DataTableToolbarProps<TData>) {
    const sortableColumns = table
        .getAllLeafColumns()
        .filter((col) => col.getCanSort());

    const sorting = table.getState().sorting;
    const activeSort = sorting[0];

    const handleSortColumnChange = (columnId: string) => {
        if (columnId === "none") {
            table.setSorting([]);
            return;
        }
        table.setSorting([{ id: columnId, desc: activeSort?.desc ?? false }]);
    };

    const toggleDirection = () => {
        if (!activeSort) return;
        table.setSorting([{ id: activeSort.id, desc: !activeSort.desc }]);
    };

    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between my-4 mx-2">
            <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center justify-between">
                {/* Search */}
                <div className="relative w-full sm:max-w-xs">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder={searchPlaceholder}
                        value={searchValue}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="pl-8 pr-8"
                    />
                    {searchValue && (
                        <button
                            type="button"
                            onClick={() => onSearchChange("")}
                            className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </div>

                {/* Sort dropdown */}
                {sortableColumns.length > 0 && (
                    <div className="flex items-center gap-1.5">
                        <Select
                            value={activeSort?.id ?? "none"}
                            onValueChange={handleSortColumnChange}
                        >
                            <SelectTrigger className="w-[160px]">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="none">Sort by</SelectItem>
                                {sortableColumns.map((col) => (
                                    <SelectItem key={col.id} value={col.id}>
                                        {(col.columnDef.meta?.label as string) ?? col.id}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {activeSort && (
                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={toggleDirection}
                                title={activeSort.desc ? "Descending" : "Ascending"}
                            >
                                {activeSort.desc ? (
                                    <ArrowDownAZ className="h-4 w-4" />
                                ) : (
                                    <ArrowUpAZ className="h-4 w-4" />
                                )}
                            </Button>
                        )}
                    </div>
                )}
            </div>

            {toolbar && <div className="flex items-center gap-2">{toolbar}</div>}
        </div>
    );
}