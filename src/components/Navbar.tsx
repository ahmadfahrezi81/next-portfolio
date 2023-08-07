"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import CrispChatWrapper from "./CrispChatWrapper";
import Logo from "@/public/Logo.svg";
import PressedWrapperAnimate from "@/components/PressedWrapperAnimate";
import AnimatedCursor from "react-animated-cursor";

function Navbar() {
    return (
        <nav className="py-5 flex rsm:justify-center justify-between">
            <AnimatedCursor
                innerSize={12}
                outerSize={8}
                outerAlpha={0.2}
                innerScale={1}
                outerScale={10}
                trailingSpeed={1}
                color="248, 248, 248"
                innerStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
                outerStyle={{
                    border: "3px solid rgba(0, 0, 0, 0.4)",
                }}
            />
            <motion.button whileTap={{ scale: 0.9 }}>
                <Link href="/">
                    <Image
                        className="rsm:hidden"
                        src={Logo}
                        height={40}
                        width={40}
                        alt="logo"
                    />
                </Link>
            </motion.button>

            {/* <Motion /> */}

            <div
                className="flex rsm:justify-between rsm:p-2 rsm:w-[380px]
            w-fit items-center sm:gap-5 bg-[#787A91] bg-opacity-30 text-custom-white px-10 py-3 rounded-xl"
            >
                <PressedWrapperAnimate>
                    <Link
                        href="/"
                        className="hover:bg-black hover:bg-opacity-20 px-4 py-2 rounded-lg"
                    >
                        Home
                    </Link>
                </PressedWrapperAnimate>

                <PressedWrapperAnimate>
                    <Link
                        className="block hover:bg-black hover:bg-opacity-20 px-4 py-2 rounded-lg"
                        href="/projects"
                    >
                        Projects
                    </Link>
                </PressedWrapperAnimate>

                <PressedWrapperAnimate>
                    <Link
                        className="hover:bg-black hover:bg-opacity-20  px-4 py-2 rounded-lg"
                        href="/about"
                    >
                        About
                    </Link>
                </PressedWrapperAnimate>

                <PressedWrapperAnimate>
                    <CrispChatWrapper>
                        <Link
                            className="hover:bg-black hover:bg-opacity-20  px-4 py-2 rounded-lg"
                            href="#"
                        >
                            Contact
                        </Link>
                    </CrispChatWrapper>
                </PressedWrapperAnimate>
            </div>
        </nav>
    );
}

export default Navbar;
