"use client";

import "../app/globals.css";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Ensure you have a cn function for concatenating class names.

const parallaxVariants = cva(
    "scroller", // Base styles
    {
        variants: {
            color: {
                blue: "text-custom-blue",
                white: "text-custom-white",
            },
        },
        defaultVariants: {
            color: "blue", // Default color if none is specified
        },
    }
);

interface ParallaxProps extends VariantProps<typeof parallaxVariants> {
    children: any;
    baseVelocity: number;
    className?: string;
}

export default function ParallaxText({
    children,
    baseVelocity = 100,
    color,
    className,
}: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax">
            <motion.div
                className={cn(parallaxVariants({ color }), className)}
                style={{ x }}
            >
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
}
