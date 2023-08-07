"use client";

import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import Image from "next/image";
import Icons from "@/components/Icons";
import Link from "next/link";
import { motion } from "framer-motion";
import CrispChatWrapper from "@/components/CrispChatWrapper";
import { Button } from "@/ui/button";
import Input from "@/ui/Input";
import { useState } from "react";
import { toast } from "@/ui/Toast";
import Logo from "@/public/Logo2.svg";
import FallingWrapper from "@/components/OnLoadWrapperAnimate";
import PressedWrapperAnimate from "@/components/PressedWrapperAnimate";

const email = "ahmadfahrezi8127@gmail.com";

function Footer() {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <FallingWrapper delay={0.3}>
            <footer className="mb-10 mt-20">
                <div className="flex gap-5 ">
                    {/* <div className="p-6 flex rsm:flex-col gap-10 bg-[#787A91] bg-opacity-40 rounded-2xl justify-between"> */}
                    <div
                        className="p-16 w-full bg-[#787A91] bg-opacity-20 rounded-2xl 
                flex flex-col gap-7 justify-center rmd:items-center rsm:p-10 relative"
                    >
                        <LargeHeading align="left" className="rsm:text-center">
                            Let&apos;s chat.
                        </LargeHeading>
                        <Icons.Send
                            className="text-white absolute rmd:hidden top-16 right-14"
                            size={45}
                        />
                        <Paragraph align="left" className="rmd:text-center">
                            Have an exciting project in mind or just want to
                            talk?
                            <br className="rsm:hidden" /> Feel free to say hi!
                        </Paragraph>
                        <PressedWrapperAnimate>
                            <CrispChatWrapper>
                                <Button className="mt-6">
                                    Say Hello
                                    <Icons.MessagesSquare
                                        className="ml-4"
                                        size={25}
                                    />
                                </Button>
                            </CrispChatWrapper>
                        </PressedWrapperAnimate>
                    </div>
                    <div className="rxl:hidden p-4 w-[40rem] h-fit bg-[#787A91] bg-opacity-20 rounded-2xl rsm:hidden">
                        <Image
                            className="rounded-lg h-full w-full"
                            src="/animation.gif"
                            height={550}
                            width={700}
                            alt="Animated GIF"
                        />
                    </div>
                </div>

                <div className="mt-7 flex gap-5 rsm:flex-col rms:w-full">
                    <div className="rmd:w-full rmd:flex rmd:justify-center bg-[#787A91] bg-opacity-40 text-custom-white rounded-xl">
                        <div className="rmd:w-[380px] flex justify-between items-center gap-8 rsm:gap-1 px-10 rsm:px-6 py-5">
                            <Link
                                className="cursor-pointer block hover:bg-black hover:bg-opacity-20 px-2 py-2 rounded-lg"
                                href="https://github.com/ahmadfahrezi81"
                                target="_blank"
                            >
                                <Icons.github />
                            </Link>
                            <Link
                                className="cursor-pointer block hover:bg-black hover:bg-opacity-20 px-2 py-2 rounded-lg"
                                href="https://twitter.com/a_fahrezi81"
                                target="_blank"
                            >
                                <Icons.twitter />
                            </Link>
                            <Link
                                className="cursor-pointer block hover:bg-black hover:bg-opacity-20 px-2 py-2 rounded-lg"
                                href="https://www.linkedin.com/in/ahmadfahrezi/"
                                target="_blank"
                            >
                                <Icons.linkedin />
                            </Link>
                            <Link
                                className="cursor-pointer md:hidden block hover:bg-black hover:bg-opacity-20 px-2 py-2 rounded-lg"
                                href={`mailto:${email}`}
                                target="_blank"
                            >
                                <Icons.mail />
                            </Link>
                        </div>
                    </div>

                    <div className="rmd:hidden flex w-full items-center gap-5 bg-[#787A91] bg-opacity-40 text-custom-white px-10 py-5 rounded-xl">
                        <Link
                            className="block hover:bg-black hover:bg-opacity-20 px-2 py-2 rounded-lg"
                            href={`mailto:${email}`}
                        >
                            <Icons.mail />
                        </Link>

                        <div className="relative w-full h-10">
                            <Input
                                disabled
                                className="w-full h-fit pr-10"
                                readOnly
                                value={toggleShow ? email : "●●●●●●●●●●●●●"}
                            />

                            {toggleShow ? (
                                <button>
                                    <Icons.EyeOff
                                        className="absolute top-2 right-3 cursor-pointer"
                                        onClick={() =>
                                            setToggleShow(!toggleShow)
                                        }
                                    />
                                </button>
                            ) : (
                                <button>
                                    <Icons.Eye
                                        className="absolute top-2 right-3 cursor-pointer"
                                        onClick={() =>
                                            setToggleShow(!toggleShow)
                                        }
                                    />
                                </button>
                            )}
                        </div>

                        <PressedWrapperAnimate>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigator.clipboard.writeText(email);
                                    toast({
                                        message: "Email copied to clipboard!",
                                        type: "default",
                                    });
                                }}
                                className="inline-block border p-3 rounded-lg cursor-pointer"
                            >
                                <Icons.Copy size={14} />
                            </button>
                        </PressedWrapperAnimate>
                    </div>
                </div>

                <div className="flex rsm:flex-col gap-4 justify-between items-center text-custom-white mt-7">
                    <PressedWrapperAnimate>
                        <Link href="/">
                            <Image
                                src={Logo}
                                height={40}
                                width={40}
                                alt="logo"
                            />
                        </Link>
                    </PressedWrapperAnimate>
                    <span className="text-sm">
                        Copyright © 2023 by Ahmad Fahrezi
                    </span>
                </div>
            </footer>
        </FallingWrapper>
    );
}

export default Footer;
