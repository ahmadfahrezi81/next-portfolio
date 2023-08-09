"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function OnLoadWrapperAnimate({
    children,
    delay = 0,
    duration = 0.5,
    triggerOnce = true,
}: any) {
    const { ref, inView } = useInView({
        triggerOnce: triggerOnce,
        threshold: 0.2,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div ref={ref}>
                <AnimatePresence>
                    {inView && (
                        <motion.div
                            initial={{ y: -30, opacity: 0 }} // Falls from y: -100 (above the initial position)
                            animate={{ y: 0, opacity: 1 }} // Starts at y: 0 (initial position)
                            transition={{
                                duration: duration,
                                ease: "linear",
                                delay: delay,
                            }}
                        >
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
