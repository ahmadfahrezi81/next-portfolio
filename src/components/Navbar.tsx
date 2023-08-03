"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import CrispChat from "./CrispChatWrapper";
import Image from "next/image";
import CrispChatWrapper from "./CrispChatWrapper";

function Navbar() {
    return (
        <nav className="py-5 flex rsm:justify-center justify-between">
            <motion.button whileTap={{ scale: 0.9 }}>
                <Link href="/">
                    <Image
                        className="rsm:hidden"
                        src="./logo.svg"
                        height={40}
                        width={40}
                        alt="logo"
                    />
                </Link>
            </motion.button>

            {/* <Motion /> */}

            <div
                className="rsm:text-custom-white rsm:bg-transparent rsm:p-0 flex rsm:justify-between rsm:w-[380px]
            w-fit items-center sm:gap-5 bg-[#787A91] bg-opacity-30 text-custom-white px-10 py-3 rounded-xl"
            >
                <Link href="/">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        className="hover:bg-black hover:bg-opacity-20 px-4 py-2 rounded-lg"
                    >
                        Home
                    </motion.button>
                </Link>

                <Link
                    className="block hover:bg-black hover:bg-opacity-20 px-4 py-2 rounded-lg"
                    href="/projects"
                >
                    Projects
                </Link>
                <Link
                    className="hover:bg-black hover:bg-opacity-20  px-4 py-2 rounded-lg"
                    href="/about"
                >
                    About
                </Link>

                <CrispChatWrapper>
                    <Link
                        className="hover:bg-black hover:bg-opacity-20  px-4 py-2 rounded-lg"
                        href="#"
                    >
                        Contact
                    </Link>
                </CrispChatWrapper>
            </div>
        </nav>
    );
}

export default Navbar;
