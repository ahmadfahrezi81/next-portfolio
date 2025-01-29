import Paragraph from "@/ui/Paragraph";
import LargeHeading from "@/ui/LargeHeading";
import Link from "next/link";
import React from "react";
import Icons from "@/components/Icons";
import { createClient } from "contentful";
import Image from "next/image";
import Profile from "@/public/Profile3.jpg";
import ParallaxText from "@/components/ParallaxText";
import OnLoadWrapperAnimate from "@/components/OnLoadWrapperAnimate";

async function getData() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    const res = await client.getEntries({
        content_type: "about",
    });

    return res.includes?.Asset ?? null;
}

export default async function page() {
    const data: any = await getData();

    return (
        <>
            <OnLoadWrapperAnimate>
                <Paragraph className="mb-[-10]" font={"mono"}>
                    Hello, my name is
                </Paragraph>
                <LargeHeading className="mb-14">Ahmad Fahrezi.</LargeHeading>
            </OnLoadWrapperAnimate>

            <OnLoadWrapperAnimate delay={0.05}>
                <section className="flex rlg:flex-col items-center mb-10 gap-16 rmd:gap-10 mt-10 sm:justify-center">
                    <div className="bg-[#000] bg-opacity-30 p-3 rsm:p-3 rounded-2xl w-fit">
                        <Image
                            src={Profile}
                            height={400}
                            width={450}
                            alt="Profile Image"
                            className="bg-blue-100 rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-5">
                        <LargeHeading
                            size="md"
                            align="left"
                            className="rmd:text-center flex gap-2 items-center rmd:self-center"
                        >
                            Web, Mobile & Beyond
                            <Icons.Rocket
                                color="#FFCA3B"
                                size={35}
                                className="rsm:hidden"
                            />
                        </LargeHeading>
                        <Paragraph align="left" className=" max-w-[520px]">
                            Hey there! I’m Ahmad—a developer who loves turning
                            ambitious ideas into reality. Whether it’s crafting
                            sleek web apps, intuitive mobile experiences, or
                            diving into automation and AI, I’m all about
                            building cool, impactful things.
                        </Paragraph>
                        <Paragraph align="left" className="max-w-[520px]">
                            From designing seamless user interfaces to
                            experimenting with AI-driven automation, I thrive on
                            blending creativity with technical skill. If it’s
                            innovative, challenging, and pushes boundaries—I’m
                            in.
                        </Paragraph>
                    </div>
                </section>
            </OnLoadWrapperAnimate>

            <OnLoadWrapperAnimate delay={0.4}>
                <section className="flex flex-col items-center mb-10">
                    <LargeHeading className="mt-[5rem] mb-6">
                        Technology so far.
                    </LargeHeading>
                    <Paragraph className="mb-5">
                        Here are some of the technologies I&apos;m familiar
                        with. I&apos;m constantly striving to{" "}
                        <br className="rmd:hidden" />
                        expand my knowledge and integrate new technologies into
                        my skill set.
                    </Paragraph>
                    <div className="bg-[#000] bg-opacity-30 p-6 rsm:p-3 rounded-2xl w-full text-white">
                        <div className="bg-custom-white rounded-lg py-16">
                            <ParallaxText baseVelocity={1}>
                                HTML . CSS . JavaScript . Typescript . Vue .
                                React . NextJS . C . C++ .
                            </ParallaxText>
                            <ParallaxText baseVelocity={-1}>
                                HTML . CSS . JavaScript . Typescript . Vue .
                                React . NextJS . C . C++ .
                            </ParallaxText>
                            <ParallaxText baseVelocity={1}>
                                JQuery . NodeJS . Express . Bootstrap .
                                Tailwinds . Scss/Sass .
                            </ParallaxText>
                            <ParallaxText baseVelocity={-1}>
                                JQuery . NodeJS . Express . Bootstrap .
                                Tailwinds . Scss/Sass .
                            </ParallaxText>
                            <ParallaxText baseVelocity={1}>
                                Java . Python . Firebase . MongoDB . Git . PHP .
                                RemixJS . GoLang .
                            </ParallaxText>
                            <ParallaxText baseVelocity={-1}>
                                Java . Python . Firebase . MongoDB . Git . PHP .
                                RemixJS . GoLang .
                            </ParallaxText>
                        </div>
                    </div>
                </section>
                <section>
                    <LargeHeading className="mt-[5rem] mb-8">
                        Resume.
                    </LargeHeading>
                    <div className="bg-[#000] bg-opacity-30 p-6 rsm:p-3 rounded-2xl">
                        <Link
                            href={`https:${data[0].fields.file.url}`}
                            target="_blank"
                        >
                            <div className="flex justify-between text-custom-white items-center gap-4 p-8 rsm:p-5 rounded-lg bg-custom-white">
                                <div className="flex gap-4 items-center">
                                    <span className="p-5 rsm:p-3 bg-custom-blue rounded-full">
                                        <Icons.FileText size={25} />
                                    </span>

                                    <div className="flex flex-col mt-2">
                                        <Paragraph
                                            align="left"
                                            className="text-custom-blue mb-0"
                                        >
                                            Resume
                                        </Paragraph>
                                        <Paragraph
                                            align="left"
                                            size="sm"
                                            className="text-slate-600"
                                        >
                                            Last Updated:{" "}
                                            {new Date(
                                                data[0].sys.createdAt
                                            ).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "2-digit",
                                                year: "numeric",
                                            })}
                                        </Paragraph>
                                    </div>
                                </div>

                                <Icons.ExternalLink className="text-black" />
                            </div>
                        </Link>
                    </div>
                </section>
            </OnLoadWrapperAnimate>
        </>
    );
}
