"use client";

import Link from "next/link";
import React from "react";
import Paragraph from "./ui/Paragraph";
import Image from "next/image";
import LargeHeading from "@/ui/LargeHeading";
import TestAnimate from "@/components/HeroCardWrapperAnimate";

function HeroCard({ data }: any) {
    return (
        <TestAnimate>
            <Link href={`/projects/${data.slug}`}>
                <div
                    className="w-full flex-1 rounded-2xl bg-[#787A91] bg-opacity-20 p-12 pb-0 pr-0 rlg:p-10 rlg:pb-0 rlg:pr-0
                        rsm:p-7 rsm:pb-0 rsm:pr-0"
                >
                    <Paragraph align="left" className="mb-0">
                        {data.location}
                    </Paragraph>
                    <LargeHeading align="left" size="md" className="mb-8">
                        {data.title}
                    </LargeHeading>

                    <Image
                        className="rounded-br-2xl rounded-tl-xl"
                        src={"https:" + data.thumbnail.fields.file.url}
                        width={600}
                        height={600}
                        alt="hero image"
                    />
                </div>
            </Link>
        </TestAnimate>
    );
}

export default HeroCard;
