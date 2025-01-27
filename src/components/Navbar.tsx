"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import CrispChatWrapper from "./CrispChatWrapper";
import Logo from "@/public/Logo3.svg";
import PressedWrapperAnimate from "@/components/PressedWrapperAnimate";
import { email } from "./Footer";

function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="py-8 flex rsm:justify-center justify-between items-center">
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
                className="flex rsm:justify-between rsm:w-[360px]
            w-fit items-center bg-[#000] bg-opacity-30 text-custom-white px-4 py-5 rounded-2xl space-x-2 rsm:space-x-0"
            >
                <PressedWrapperAnimate>
                    <Link
                        href="/"
                        className={`${
                            pathname === "/" ? "bg-black bg-opacity-20" : ""
                        } hover:bg-black hover:bg-opacity-20 px-6 py-2 rsm:px-3 rounded-lg font-semibold`}
                    >
                        Home
                    </Link>
                </PressedWrapperAnimate>

                <PressedWrapperAnimate>
                    <Link
                        // className="hover:bg-black hover:bg-opacity-20 px-6 py-2 rsm:px-3 rounded-lg font-semibold"
                        className={`${
                            pathname === "/about"
                                ? "bg-black bg-opacity-20"
                                : ""
                        } hover:bg-black hover:bg-opacity-20 px-6 py-2 rsm:px-3 rounded-lg font-semibold`}
                        href="/about"
                    >
                        About
                    </Link>
                </PressedWrapperAnimate>

                <PressedWrapperAnimate>
                    <Link
                        className={`${
                            pathname.startsWith("/projects")
                                ? "bg-black bg-opacity-20"
                                : ""
                        } hover:bg-black hover:bg-opacity-20 px-6 py-2 rsm:px-3 rounded-lg font-semibold`}
                        href="/projects"
                    >
                        Projects
                    </Link>
                </PressedWrapperAnimate>

                <PressedWrapperAnimate>
                    <Link
                        className="hover:bg-black hover:bg-opacity-20 px-6 py-2 rsm:px-3 rounded-lg font-semibold sm:hidden"
                        href={`mailto:${email}`}
                        aria-disabled="true"
                    >
                        Contact
                    </Link>
                </PressedWrapperAnimate>

                {/* <PressedWrapperAnimate>
                    <CrispChatWrapper>
                        <Link
                            className="hover:bg-black hover:bg-opacity-20 px-6 py-2 rsm:px-3 rounded-lg font-semibold"
                            href="#"
                            aria-disabled="true"
                        >
                            Contact
                        </Link>
                    </CrispChatWrapper>
                </PressedWrapperAnimate> */}
            </div>
        </nav>
    );
}

export default Navbar;
