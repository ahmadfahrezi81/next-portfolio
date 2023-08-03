import Paragraph from "@/ui/Paragraph";
import LargeHeading from "@/ui/LargeHeading";
import { createClient } from "contentful";
import Link from "next/link";
import Image from "next/image";
import Icons from "@/components/Icons";
import { Button } from "@/ui/button";
import CrispChatWrapper from "@/components/CrispChatWrapper";
import TailwindGridExample from "@/components/TailwindCard";

async function getData() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    const res = await client.getEntries({
        content_type: "project",
        order: "sys.createdAt",
    });

    return res.items;
}

export default async function Home() {
    const data: any = await getData(); // Type assertion here

    return (
        <>
            <section className="flex flex-col items-center mt-20">
                <LargeHeading className="mb-4">
                    Hi. I&apos;m Ahmad.
                    <br />A Dev. and Designer
                </LargeHeading>
                <Paragraph className="flex items-center gap-1 justify-center">
                    <Icons.Globe2 /> <span>Kuala Lumpur, Malaysia</span>
                </Paragraph>
                <CrispChatWrapper>
                    <Button className="mt-6">
                        Let&apos;s chat{" "}
                        <Icons.MessagesSquare className="ml-4" size={25} />
                    </Button>
                </CrispChatWrapper>
            </section>
            <section className="mt-20 flex flex-col gap-10">
                {/* hero main */}
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
                            alt="test"
                        />
                    </div>
                </Link>
                <div className="flex flex-row gap-10 w-full rsm:flex-col">
                    {/* hero 1 */}
                    <Link href={`/projects/${data[1].fields.slug}`}>
                        <div
                            className="w-full flex-1 rounded-2xl bg-[#787A91] bg-opacity-20 p-12 pb-0 pr-0 rlg:p-10 rlg:pb-0 rlg:pr-0 
                        rsm:p-7 rsm:pb-0 rsm:pr-0"
                        >
                            <Paragraph align="left" className="mb-0">
                                {data[1].fields.location}
                            </Paragraph>
                            <LargeHeading
                                align="left"
                                size="md"
                                className="mb-8"
                            >
                                {data[1].fields.title}
                            </LargeHeading>
                            <Image
                                className="rounded-br-2xl"
                                src={
                                    "https:" +
                                    data[1].fields.thumbnail.fields.file.url
                                }
                                width={600}
                                height={600}
                                alt="test"
                            />
                        </div>
                    </Link>
                    {/* hero 2 */}
                    <Link href={`/projects/${data[2].fields.slug}`}>
                        <div
                            className="w-full rounded-2xl bg-[#787A91] bg-opacity-20 p-12 pb-0 pr-0 rlg:p-10 rlg:pb-0 rlg:pr-0
                        rsm:p-7 rsm:pb-0 rsm:pr-0"
                        >
                            <Paragraph align="left" className="mb-0">
                                {data[2].fields.location}
                            </Paragraph>
                            <LargeHeading
                                align="left"
                                size="md"
                                className="mb-8"
                            >
                                {data[2].fields.title}
                            </LargeHeading>
                            <Image
                                className="rounded-br-2xl"
                                src={
                                    "https:" +
                                    data[2].fields.thumbnail.fields.file.url
                                }
                                width={600}
                                height={600}
                                alt="test"
                            />
                        </div>
                    </Link>
                </div>
            </section>
            <section>
                <LargeHeading>Notable Projects.</LargeHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor
                    sit amet consectetur ipsum dolor sit amet consectetur.
                </Paragraph>
            </section>
        </>
    );
}
