"use client";

import Link from "next/link";
import React from "react";
import Paragraph from "./ui/Paragraph";
import Image from "next/image";
import LargeHeading from "@/ui/LargeHeading";
import HeroCardWrapperAnimate from "@/components/HeroCardWrapperAnimate";
import Icons from "./Icons";

function HeroCard({ data }: any) {
    return (
        <HeroCardWrapperAnimate>
            <Link href={`/projects/${data.slug}`}>
                <div className="w-full flex-1 rounded-[1.5rem] rsm:rounded-[1rem] bg-[#000] bg-opacity-30 p-10 pb-0 pr-0 rlg:p-10 rlg:pb-0 rlg:pr-0 rsm:p-7 rsm:pb-0 rsm:pr-0">
                    <Paragraph
                        align="left"
                        className="mb-0 flex justify-between pr-8"
                        font={"mono"}
                        size={"sm"}
                    >
                        {data.location}
                        <Icons.Code2 color="#FFCA3B" />
                    </Paragraph>
                    <LargeHeading
                        align="left"
                        size="md"
                        className="mb-6 rsm:mb-4"
                    >
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
        </HeroCardWrapperAnimate>
    );
}

export default HeroCard;
