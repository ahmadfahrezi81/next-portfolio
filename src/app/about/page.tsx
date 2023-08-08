import Paragraph from "@/ui/Paragraph";
import LargeHeading from "@/ui/LargeHeading";
import Link from "next/link";
import React from "react";
import Icons from "@/components/Icons";
import { createClient } from "contentful";
import Image from "next/image";
import Profile from "@/public/Profile.png";
import ParallaxText from "@/components/ParallaxText";
import FallingWrapper from "@/components/OnLoadWrapperAnimate";

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
            <FallingWrapper>
                <LargeHeading>Hi. I&apos;m Ahmad.</LargeHeading>
            </FallingWrapper>

            <FallingWrapper delay={0.05}>
                <section className="flex rsm:flex-col items-center gap-12 mt-10 sm:gap-28 sm:justify-center">
                    <Image
                        src={Profile}
                        height={400}
                        width={350}
                        alt="Profile Image"
                        className="bg-blue-100 rounded-t-full rounded-b-xl"
                    />
                    <div className="flex flex-col gap-5">
                        <LargeHeading
                            size="md"
                            align="left"
                            className="rsm:text-center"
                        >
                            Full Stack Developer and Designer
                        </LargeHeading>
                        <Paragraph align="left" className="rsm:text-center">
                            Lorem ipsum dolor sit amet consectetur. Tortor
                            tellus <br className="rlg:hidden" />
                            tempor ligula nisl fames sagittis. Cursus lacinia
                            quis <br className="rlg:hidden" />
                            fusce quis cras hendrerit ac. Mus sodales ut
                            porttitor <br className="rlg:hidden" />
                            cras ac amet maecenas ultricies.
                        </Paragraph>
                        <Paragraph align="left" className="rsm:text-center">
                            Lorem ipsum dolor sit amet consectetur. Tortor
                            tellus <br className="rlg:hidden" />
                            tempor ligula nisl fames sagittis.
                        </Paragraph>
                    </div>
                </section>
            </FallingWrapper>

            <FallingWrapper delay={0.4}>
                <section className="flex flex-col items-center">
                    <LargeHeading className="mt-[5rem] mb-6">
                        Technology so far.
                    </LargeHeading>
                    <Paragraph>
                        Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum
                        dolor sit amet <br className="rsm:hidden" /> consectetur
                        ipsum dolor sit amet consectetur.
                    </Paragraph>
                    {/* <div>Cool all Technology animation moving</div> */}
                    {/* <TestScroll /> */}
                    {/* <TestFramer /> */}
                    <div className="bg-[#787A91] bg-opacity-20 p-6 rsm:p-3 rounded-2xl w-full text-white">
                        <div className="bg-white rounded-lg py-16">
                            <ParallaxText baseVelocity={3}>
                                HTML . CSS . JavaScript . Typescript . Vue .
                                React . NextJS .
                            </ParallaxText>
                            <ParallaxText baseVelocity={-3}>
                                JQuery . NodeJS . Express . Bootstrap .
                                Tailwinds . Scss/Sass .
                            </ParallaxText>
                            <ParallaxText baseVelocity={3.5}>
                                Java . Python . Firebase . MongoDB . Git . PHP .
                                RemixJS .
                            </ParallaxText>
                            <ParallaxText baseVelocity={-3}>
                                HTML . CSS . JavaScript . Typescript . Vue .
                                React . NextJS .
                            </ParallaxText>
                            <ParallaxText baseVelocity={3}>
                                JQuery . NodeJS . Express . Bootstrap .
                                Tailwinds . Scss/Sass .
                            </ParallaxText>
                            <ParallaxText baseVelocity={-3.5}>
                                Java . Python . Firebase . MongoDB . Git . PHP .
                                RemixJS .
                            </ParallaxText>
                        </div>
                    </div>
                </section>
                <section>
                    <LargeHeading className="mt-[5rem] mb-6">
                        Resume.
                    </LargeHeading>
                    <div className="bg-[#787A91] bg-opacity-20 p-6 rsm:p-3 rounded-2xl">
                        <Link
                            href={`https:${data[0].fields.file.url}`}
                            target="_blank"
                        >
                            <div className="flex justify-between text-custom-white items-center gap-4 p-8 rsm:p-5 rounded-xl bg-custom-white">
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
            </FallingWrapper>
        </>
    );
}
