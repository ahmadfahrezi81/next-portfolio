import Paragraph from "@/ui/Paragraph";
import LargeHeading from "@/ui/LargeHeading";
import { createClient } from "contentful";
import Link from "next/link";
import Image from "next/image";
import Icons from "@/components/Icons";
import { Button } from "@/ui/button";
import CrispChatWrapper from "@/components/CrispChatWrapper";
import HeroCard from "@/components/HeroCard";
import FallingWrapper from "@/components/OnLoadWrapperAnimate";
import PressedWrapperAnimate from "@/components/PressedWrapperAnimate";
import TestAnimate from "@/components/HeroCardWrapperAnimate";

async function getData() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    const res = await client.getEntries({
        content_type: "project",
        order: ["sys.createdAt"],
    });

    return res.items;
}

export default async function Home() {
    const data: any = await getData(); // Type assertion here

    return (
        <>
            <section className="flex flex-col items-center">
                <FallingWrapper>
                    <LargeHeading className="mb-4">
                        Hi. I&apos;m Ahmad.
                        <br />A Dev. and Designer
                    </LargeHeading>
                </FallingWrapper>
                <FallingWrapper delay={0.05}>
                    <Paragraph className="flex items-center gap-1 justify-center">
                        <Icons.Globe2 /> <span>Kuala Lumpur, Malaysia</span>
                    </Paragraph>
                </FallingWrapper>

                <FallingWrapper delay={0.1}>
                    <PressedWrapperAnimate>
                        <CrispChatWrapper>
                            <Button className="mt-6">
                                Let&apos;s chat{" "}
                                <Icons.MessagesSquare
                                    className="ml-4"
                                    size={25}
                                />
                            </Button>
                        </CrispChatWrapper>
                    </PressedWrapperAnimate>
                </FallingWrapper>
            </section>
            <FallingWrapper delay={0.4}>
                <section className="mt-20 flex flex-col gap-8">
                    {/* hero main */}

                    <TestAnimate>
                        <Link href={`/projects/${data[0].fields.slug}`}>
                            <div className=" rounded-2xl bg-[#787A91] bg-opacity-20 p-12 pb-0 rlg:p-10 rlg:pb-0  rsm:p-7 rsm:pb-0">
                                <Paragraph align="left" className="mb-0">
                                    {data[0].fields.location}
                                </Paragraph>
                                <LargeHeading
                                    align="left"
                                    size="md"
                                    className="mb-8 rlg:mb-4"
                                >
                                    {data[0].fields.title}
                                </LargeHeading>
                                <Image
                                    src={
                                        "https:" +
                                        data[0].fields.thumbnail.fields.file.url
                                    }
                                    width={1200}
                                    height={400}
                                    alt="card image"
                                />
                            </div>
                        </Link>
                    </TestAnimate>

                    <div className="flex flex-row gap-8 w-full rsm:flex-col">
                        {/* hero 1 */}
                        <HeroCard data={data[1].fields} />

                        {/* hero 2 */}
                        <HeroCard data={data[2].fields} />
                    </div>
                </section>
                <section className="flex flex-col items-center">
                    <LargeHeading className="mt-[5rem] mb-6">
                        Notable Projects.
                    </LargeHeading>
                    <Paragraph className="mb-10">
                        Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum
                        dolor sit amet consectetur ipsum dolor sit amet
                        consectetur.
                    </Paragraph>
                    {/* <div className="flex flex-row gap-6 w-full rsm:flex-col"> */}
                    <div className="grid grid-cols-3 gap-8 rlg:grid-cols-2 rsm:grid-cols-1">
                        <HeroCard data={data[3].fields} />
                        <HeroCard data={data[4].fields} />
                        <HeroCard data={data[5].fields} />
                    </div>
                    <PressedWrapperAnimate>
                        <Link href="/projects">
                            <Button className="mt-6 text-sm">
                                View Full Project Archive
                                <Icons.ArrowRight className="ml-2" size={16} />
                            </Button>
                        </Link>
                    </PressedWrapperAnimate>
                </section>
            </FallingWrapper>
        </>
    );
}
