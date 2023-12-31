"use client";

import Link from "next/link";
import Image from "next/image";
import CrispChatWrapper from "./CrispChatWrapper";
import Logo from "@/public/Logo3.svg";
import PressedWrapperAnimate from "@/components/PressedWrapperAnimate";

function Navbar() {
    return (
        <nav className="py-5 mt-2 flex rsm:justify-center justify-between items-center">
            <PressedWrapperAnimate>
                <Link href="/">
                    <Image
                        className="rsm:hidden"
                        src={Logo}
                        height={45}
                        width={49}
                        alt="logo"
                    />
                </Link>
            </PressedWrapperAnimate>

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
