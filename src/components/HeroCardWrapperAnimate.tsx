"use client";

import { motion } from "framer-motion";

export default function HeroCardWrapperAnimate({ children }: any) {
    return (
        <>
            <motion.div
                className="w-fit "
                whileHover={{ y: -10, scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                    delay: 0.1,
                    duration: 0.2,
                }}
            >
                {children}
            </motion.div>
        </>
    );
}
