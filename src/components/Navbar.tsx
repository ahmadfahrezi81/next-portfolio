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
                className="flex rsm:justify-between rsm:p-2 rsm:w-[360px]
            w-fit items-center bg-[#000] bg-opacity-30 text-custom-white px-4 py-3 rounded-2xl"
            >
                <PressedWrapperAnimate>
                    <Link
                        href="/"
                        className="hover:bg-black hover:bg-opacity-20 px-6 py-2 rsm:px-3 rounded-lg font-semibold"
                    >
                        Home
                    </Link>
                </PressedWrapperAnimate>

                <PressedWrapperAnimate>
                    <Link
                        className="block hover:bg-black hover:bg-opacity-20 px-6 py-2 rsm:px-3 rounded-lg font-semibold"
                        href="/projects"
                    >
                        Projects
                    </Link>
                </PressedWrapperAnimate>

                <PressedWrapperAnimate>
                    <Link
                        className="hover:bg-black hover:bg-opacity-20 px-6 py-2 rsm:px-3 rounded-lg font-semibold"
                        href="/about"
                    >
                        About
                    </Link>
                </PressedWrapperAnimate>

                <PressedWrapperAnimate>
                    <CrispChatWrapper>
                        <Link
                            className="hover:bg-black hover:bg-opacity-20 px-6 py-2 rsm:px-3 rounded-lg font-semibold"
                            href="#"
                            aria-disabled="true"
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
