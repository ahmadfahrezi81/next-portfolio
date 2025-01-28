import Paragraph from "@/ui/Paragraph";
import LargeHeading from "@/ui/LargeHeading";
import { createClient } from "contentful";
import Link from "next/link";
import Image from "next/image";
import Icons from "@/components/Icons";
import { Button } from "@/ui/button";
import CrispChatWrapper from "@/components/CrispChatWrapper";
import HeroCard from "@/components/HeroCard";
import OnLoadWrapperAnimate from "@/components/OnLoadWrapperAnimate";
import PressedWrapperAnimate from "@/components/PressedWrapperAnimate";
import HeroCardWrapperAnimate from "@/components/HeroCardWrapperAnimate";
import ParallaxText from "@/components/ParallaxText";

const email = "ahmadfahrezi.kl@gmail.com";

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
            <section className="flex flex-col items-center py-2">
                <OnLoadWrapperAnimate delay={0.2}>
                    <Paragraph className="mb-[-10]" font={"mono"}>
                        Hello there!{" "}
                        <span className="inline-block animate-wave ">👋</span>
                    </Paragraph>
                </OnLoadWrapperAnimate>
                <OnLoadWrapperAnimate delay={0.3}>
                    <LargeHeading className="mb-4">
                        My name is
                        <br />
                        Ahmad Fahrezi.
                    </LargeHeading>
                    <Paragraph className="text-center !text-lg" font={"mono"}>
                        Software Engineer, Designer, and Computer Science
                        Student 🧑‍💻. <br /> I built mobile app, web app, and
                        things that I find interesting.
                    </Paragraph>
                </OnLoadWrapperAnimate>
                {/* <OnLoadWrapperAnimate delay={0.4}>
                    <Paragraph className="flex items-center gap-1 justify-center">
                        <Icons.Globe2 /> <span>Kuala Lumpur, Malaysia</span>
                    </Paragraph>
                </OnLoadWrapperAnimate> */}

                <OnLoadWrapperAnimate delay={0.5}>
                    <PressedWrapperAnimate>
                        <Link
                            href={
                                `mailto:${email}` /* Make sure 'email' is defined somewhere in your component */
                            }
                            aria-disabled="true"
                        >
                            {/* <CrispChatWrapper> */}
                            <Button className="mt-6 bg-custom-accent-yellow">
                                Let&apos;s chat{" "}
                                <Icons.MessagesSquare
                                    className="ml-4"
                                    size={25}
                                />
                            </Button>
                            {/* </CrispChatWrapper> */}
                        </Link>
                    </PressedWrapperAnimate>
                </OnLoadWrapperAnimate>
            </section>
            <section className="mt-12 flex flex-col gap-8">
                <OnLoadWrapperAnimate delay={0.8}>
                    <div className="bg-[#000] bg-opacity-30 p-2 rsm:p-3 rounded-[1.5rem] w-full  ">
                        <div className="bg-custom-white rounded-[1rem] p-4">
                            <ParallaxText
                                baseVelocity={1}
                                color={"blue"}
                                className="font-mono"
                            >
                                HTML ⋅ CSS ⋅ JavaScript ⋅ Typescript ⋅ Vue ⋅
                                React ⋅ NextJS ⋅ C ⋅ C++ ⋅ JQuery ⋅ NodeJS ⋅
                                Express ⋅ Bootstrap ⋅ Tailwinds ⋅ Scss/Sass ⋅
                                Java ⋅ Python ⋅ Firebase ⋅ MongoDB ⋅ Git ⋅ PHP ⋅
                                RemixJS ⋅ GoLang ⋅
                            </ParallaxText>
                        </div>
                    </div>

                    {/* <HeroCardWrapperAnimate>
                        <Link href={`/projects/${data[0].fields.slug}`}>
                            <div className="rounded-[2rem] bg-[#000] bg-opacity-30 p-12 pb-0 rlg:p-10 rlg:pb-0  rsm:p-7 rsm:pb-0">
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
                                    priority={true}
                                    width={1200}
                                    height={400}
                                    alt="card image"
                                />
                            </div>
                        </Link>
                    </HeroCardWrapperAnimate> */}
                    {/* 
                    <div className="flex flex-row gap-8 w-full rsm:flex-col">
                        <HeroCard data={data[1].fields} />
                        <HeroCard data={data[2].fields} />
                    </div> */}
                </OnLoadWrapperAnimate>
            </section>
            <section className="mt-20 flex flex-col items-center">
                <OnLoadWrapperAnimate delay={1}>
                    <LargeHeading className="mb-6">
                        Notable Projects.
                    </LargeHeading>
                    <Paragraph className="mb-10">
                        Here are some other fun projects I&apos;ve created.
                    </Paragraph>
                    <HeroCardWrapperAnimate>
                        <Link href={`/projects/${data[0].fields.slug}`}>
                            <div className="rounded-[1.5rem] rsm:rounded-[1rem] bg-[#000] bg-opacity-30 p-12 pb-0 rlg:p-10 rlg:pb-0  rsm:p-7 rsm:pb-0">
                                <Paragraph
                                    align="left"
                                    className="mb-0"
                                    font={"mono"}
                                >
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
                                    priority={true}
                                    width={1200}
                                    height={400}
                                    alt="card image"
                                />
                            </div>
                        </Link>
                    </HeroCardWrapperAnimate>

                    <div className="mt-8 grid grid-cols-3 gap-8 rsm:grid-cols-1">
                        <HeroCard data={data[0].fields} />
                        <HeroCard data={data[1].fields} />
                        <HeroCard data={data[2].fields} />
                        <HeroCard data={data[3].fields} />
                        <HeroCard data={data[4].fields} />
                        <HeroCard data={data[5].fields} />
                    </div>
                    <div className="flex justify-center ">
                        <PressedWrapperAnimate>
                            <Link href="/projects">
                                <Button className="mt-[3rem] text-base">
                                    View Full Project Archive
                                    <Icons.ArrowRight
                                        className="ml-2"
                                        size={20}
                                    />
                                </Button>
                            </Link>
                        </PressedWrapperAnimate>
                    </div>
                </OnLoadWrapperAnimate>
            </section>
        </>
    );
}
