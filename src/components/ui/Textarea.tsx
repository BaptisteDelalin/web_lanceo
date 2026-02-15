import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="space-y-1">
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-dark"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          rows={5}
          className={cn(
            "w-full rounded-sm border border-cream-dark bg-white px-4 py-3 text-dark placeholder:text-text-secondary/50 transition-colors duration-200 resize-vertical",
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

Textarea.displayName = "Textarea";
export default Textarea;
