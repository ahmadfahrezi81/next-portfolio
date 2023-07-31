"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import CrispChat from "./CrispChat";
import { Motion } from "@/components/Motion";

function Navbar() {
    return (
        <nav>
            <div>logo</div>
            <Motion />

            <div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Link href="/">Home</Link>
                </motion.button>

                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="#">
                    <CrispChat />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
