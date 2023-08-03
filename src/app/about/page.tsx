import Paragraph from "@/ui/Paragraph";
import LargeHeading from "@/ui/LargeHeading";
import Link from "next/link";
import React from "react";
import TestScroll from "@/components/TestScroll";
import { motion } from "framer-motion";
import Test from "@/components/Test";
import Icons from "@/components/Icons";
import { createClient } from "contentful";

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
            <LargeHeading>Hi. I&apos;m Ahmad.</LargeHeading>
            <section>
                <div>Image</div>
                <LargeHeading size="sm">
                    Full Stack Developer and Designer
                </LargeHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur. Tortor tellus tempor
                    ligula nisl fames sagittis. Cursus lacinia quis fusce quis
                    cras hendrerit ac. Mus sodales ut porttitor cras ac amet
                    maecenas ultricies.
                </Paragraph>
            </section>
            <section className="flex flex-col items-center">
                <LargeHeading className="mt-12 mb-6">
                    Technology so far.
                </LargeHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor
                    sit amet <br className="rsm:hidden" /> consectetur ipsum
                    dolor sit amet consectetur.
                </Paragraph>
                {/* <div>Cool all Technology animation moving</div> */}
                {/* <TestScroll /> */}
            </section>

            <section>
                <LargeHeading className="mt-12 mb-6">Resume.</LargeHeading>
                <div className="bg-[#787A91] bg-opacity-20 p-6 rounded-2xl">
                    <Link
                        href={`https:${data[0].fields.file.url}`}
                        target="_blank"
                    >
                        <div className="flex justify-between text-custom-white items-center gap-4 p-8 rounded-xl bg-custom-white">
                            <div className="flex gap-4 items-center">
                                <span className="p-5 rsm:p-3 bg-custom-blue rounded-full">
                                    <Icons.FileText size={25} />
                                </span>

                                <div className="flex flex-col mt-2">
                                    <Paragraph
                                        align="left"
                                        className="text-custom-blue"
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
        </>
    );
}
