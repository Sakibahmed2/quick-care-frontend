import { cn } from "@/lib/utils";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

type TInputFormProps = {
  name: string;
  placeholder?: string;
  inputClassName?: string;
  type?: string;
  startIcon?: React.ComponentType;
  required?: boolean;
  label?: string;
};

const QuickInput = ({
  name,
  placeholder = "Enter text",
  inputClassName = "",
  type = "text",
  startIcon,
  required,
  label,
}: TInputFormProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          <div className="w-full">
            <label className="mb-1 block text-sm text-gray-500 ">{label}</label>
            <Input
              {...field}
              placeholder={placeholder}
              className={cn("w-full", inputClassName)}
              type={type}
              StartIcon={startIcon}
              required={required}
            />
            {error && (
              <span className="text-red-500 text-xs">{error.message}</span>
            )}
          </div>
        </>
      )}
    />
  );
};

export default QuickInput;
