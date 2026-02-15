import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="space-y-1">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-dark"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-sm border border-cream-dark bg-white px-4 py-3 text-dark placeholder:text-text-secondary/50 transition-colors duration-200",
            "focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
