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
    },
    defaultVariants: {
        size: "default",
        align: "center",
    },
});

interface ParagraphProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
        VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
    ({ className, size, align, children, ...props }, ref) => {
        return (
            <p
                ref={ref}
                {...props}
                className={cn(paragraphVariants({ size, align, className }))}
            >
                {children}
            </p>
        );
    }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
