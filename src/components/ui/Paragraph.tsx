import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const paragraphVariants = cva("text-custom-white mb-2", {
    variants: {
        size: {
            default: "text-base sm:text-lg",
            sm: "text-sm sm:text-base",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
        },
        font: {
            default: "font-sans",
            mono: "font-mono",
            serif: "font-serif",
        },
    },
    defaultVariants: {
        size: "default",
        align: "center",
        font: "default",
    },
});

interface ParagraphProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
        VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
    ({ className, size, align, font, children, ...props }, ref) => {
        return (
            <p
                ref={ref}
                {...props}
                className={cn(
                    paragraphVariants({ size, align, className, font })
                )}
            >
                {children}
            </p>
        );
    }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
