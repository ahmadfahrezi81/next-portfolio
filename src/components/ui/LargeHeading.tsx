"use client";

import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import OnLoadWrapperAnimate from "@/components/OnLoadWrapperAnimate";

const headingVariants = cva(
    "text-custom-white dark:text-white font-extrabold leading-tight tracking-tighter",
    {
        variants: {
            size: {
                default: "text-4xl md:text-5xl lg:text-6xl",
                lg: "text-5xl md:text-6xl lg:text-7xl",
                md: "text-2xl md:text-3xl lg:text-4xl",
                sm: "text-lg md:text-xl lg:text-2xl",
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
    }
);

interface LargeHeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof headingVariants> {}

const LargeHeading = React.forwardRef<HTMLHeadingElement, LargeHeadingProps>(
    ({ className, size, align, children, ...props }, ref) => {
        return (
            // <motion.div
            //     animate={{ rotate: 360 }}
            //     transition={{
            //         type: "spring",
            //         damping: 10,
            //         mass: 0.75,
            //         stiffness: 100,
            //     }}
            // >

            <h1
                ref={ref}
                {...props}
                className={cn(headingVariants({ size, align, className }))}
            >
                {children}
            </h1>

            // </motion.div>
        );
    }
);

LargeHeading.displayName = "LargeHeading";

export default LargeHeading;
