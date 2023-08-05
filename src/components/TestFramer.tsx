"use client";

// import { AnimatePresence, motion } from "framer-motion";

// export default function TestFramer({ isVisible }: { isVisible: boolean }) {
//     return (
//         <>
//             <AnimatePresence>
//                 {isVisible && (
//                     <motion.div
//                         className="w-[10rem] h-[10rem] bg-white"
//                         animate={{ y: -100 }}
//                         initial={{ opacity: 0 }}
//                         transition={{ duration: 2 }}
//                         whileInView={{ opacity: 1, animation: "ease" }}
//                     />
//                 )}
//             </AnimatePresence>
//         </>
//     );
// }

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function TestFramer() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <>
            <div ref={ref}>
                <AnimatePresence>
                    {inView && (
                        <motion.div
                            className="w-[15rem] h-[15rem] bg-white"
                            animate={{ y: 0 }} // Starts at y: 0 (initial position)
                            initial={{ y: -100, opacity: 0 }} // Falls from y: -100 (above the initial position)
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            whileInView={{ opacity: 1 }}
                        >
                            While meeee
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
