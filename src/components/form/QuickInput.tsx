import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-select";

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
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label>{label}</Label>
            <Input
              {...field}
              placeholder={placeholder}
              className={cn("w-full", inputClassName)}
              type={type}
              StartIcon={startIcon}
              required={required}
            />
          </div>
          {error && <span className="text-red-500">{error.message}</span>}
        </>
      )}
    />
  );
};

export default QuickInput;
