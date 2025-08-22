import { forwardRef, type ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    const baseClasses =
      "ui:inline-flex ui:items-center ui:justify-center ui:rounded-md ui:font-medium ui:transition-colors ui:focus-visible:outline-none ui:focus-visible:ring-2 ui:focus-visible:ring-ring ui:disabled:pointer-events-none ui:disabled:opacity-50";

    const variantClasses = {
      primary:
        "ui:bg-primary ui:text-primary-foreground ui:hover:bg-primary/90",
      secondary:
        "ui:bg-secondary ui:text-secondary-foreground ui:hover:bg-secondary/80",
      outline:
        "ui:border ui:border-input ui:bg-background ui:hover:bg-accent ui:hover:text-accent-foreground",
    };

    const sizeClasses = {
      sm: "ui:h-9 ui:rounded-md ui:px-3 ui:text-xs",
      md: "ui:h-10 ui:px-4 ui:py-2",
      lg: "ui:h-11 ui:rounded-md ui:px-8",
    };

    return (
      <button
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ui:bg-red-300`}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
