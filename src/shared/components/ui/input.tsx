"use client";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  // States
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <span className="relative block w-full">
      <InputPrimitive
        type={type === "password" && isPasswordVisible ? "text" : type}
        data-slot="input"
        className={cn(
          "w-full min-w-0 rounded-lg border border-[#6B7280] bg-transparent text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-custom-primary focus-visible:ring-3 focus-visible:ring-custom-primary/10 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 py-2.5 px-4",
          type === "password" && "pr-6",
          className,
          "data-[destructive=true]:text-[#881337] data-[destructive=true]:bg-[#FFF1F24D] data-[destructive=true]:border-[#FB7185] data-[destructive=true]:ring-[#ffb3b84d]",
        )}
        {...props}
      />
      {type === "password" && (
        <button
          type="button"
          aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          aria-pressed={isPasswordVisible}
          disabled={props.disabled}
          onClick={() => setIsPasswordVisible((visible) => !visible)}
          className="absolute inset-y-0 right-2 flex items-center text-muted-foreground disabled:pointer-events-none"
        >
          {isPasswordVisible ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      )}
    </span>
  );
}

export { Input };
