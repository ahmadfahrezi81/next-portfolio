"use client";

import { motion } from "framer-motion";

export default function HeroCardWrapperAnimate({ children }: any) {
    return (
        <>
            <motion.div
                className="w-fit "
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    duration: 0.2,
                }}
            >
                {children}
            </motion.div>
        </>
    );
}
