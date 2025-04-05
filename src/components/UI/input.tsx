import { cn } from "@/lib/utils";
import * as React from "react";

interface InputProps extends React.ComponentProps<"input"> {
  StartIcon?: React.ComponentType;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, StartIcon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {StartIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <StartIcon />
          </span>
        )}

        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            StartIcon && "pl-10", // Add left padding when icon is present
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
