'use client'

import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'


type TSelectFormProps = {
    name: string;
    placeholder?: string;
    inputClassName?: string;
    startIcon?: React.ComponentType;
    required?: boolean;
    label?: string;
    values?: { label: string, value: string }[];
}

const QuickSelect = ({
    name,
    placeholder,
    required,
    label,
    values = [],
}: TSelectFormProps) => {

    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <>
                    <div className="w-full ">
                        <label className="mb-1 block text-sm text-gray-500 ">{label}</label>
                        <Select
                            required={required}
                            onValueChange={field.onChange}
                            value={field.value ?? ""}
                        >
                            <SelectTrigger className="w-full ">
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>{label}</SelectLabel>
                                    {values.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {error && (
                            <span className="text-red-500 text-xs">{error.message}</span>
                        )}
                    </div>
                </>
            )}
        />
    )
}

export default QuickSelect