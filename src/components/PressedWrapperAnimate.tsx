"use client";

import { motion } from "framer-motion";

export default function PressedWrapperAnimate({ children }: any) {
    return (
        <>
            <motion.div
                className="w-fit h-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
                {children}
            </motion.div>
        </>
    );
}
