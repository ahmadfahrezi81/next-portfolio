import Paragraph from "@/ui/Paragraph";
import LargeHeading from "@/ui/LargeHeading";
import Link from "next/link";
import React from "react";
import { createClient } from "contentful";
import { notFound } from "next/navigation";
import Image from "next/image";
import PressedWrapperAnimate from "@/components/PressedWrapperAnimate";
import { Button } from "@/components/ui/button";
import Icons from "@/components/Icons";
import OnLoadWrapperAnimate from "@/components/OnLoadWrapperAnimate";

export async function generateMetadata({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    try {
        const post = await getProject(params);
        if (!post)
            return {
                title: "Not Found",
                description: "The page you are looking for does not exist.",
            };

        return {
            title: post.fields.title,
            description: post.fields.descriptions,
            alternates: {
                canonical: `/projects/${post.fields.slug}`,
            },
        };
    } catch (error) {
        return {
            title: "Not Found",
            description: "The page you are looking for does not exist.",
        };
    }
}

export async function generateStaticParams() {
    const posts = await getAllProject();

    if (!posts) return [];

    return posts.map((post: any) => ({
        slug: post.slug,
    }));
}

interface pageProps {
    params: {
        id: string;
    };
}

async function getAllProject() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    const res = await client.getEntries({
        content_type: "project",
    });

    return res.items;
}

async function getProject(params: any) {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    const res = await client.getEntries({
        content_type: "project",
        "fields.slug": params.slug,
    });

    return res.items[0];
}

export default async function page({ params }: pageProps) {
    const data: any = await getProject(params);

    if (!data) notFound();

    return (
        <>
            <section className="flex flex-col items-center">
                <OnLoadWrapperAnimate>
                    <LargeHeading className="mb-2">
                        {data.fields.title}
                    </LargeHeading>
                </OnLoadWrapperAnimate>
                <OnLoadWrapperAnimate delay={0.05}>
                    <Paragraph className="w-full">
                        {data.fields.location} | {data.fields.developmentTypes}{" "}
                        | {data.fields.year}
                    </Paragraph>
                </OnLoadWrapperAnimate>

                <OnLoadWrapperAnimate delay={0.1}>
                    <Paragraph className="w-full">
                        {data.fields.techStack.map(
                            (item: string, i: number) => (
                                <span key={i}>
                                    {" "}
                                    {item}
                                    {i !== data.fields.techStack.length - 1 &&
                                        " • "}
                                </span>
                            )
                        )}
                    </Paragraph>
                </OnLoadWrapperAnimate>

                <OnLoadWrapperAnimate delay={0.4}>
                    <div className="w-full lg:p-16 lg:pb-0 rlg:p-10 rlg:pb-0 rsm:p-3 mt-10 rsm:mt-5 bg-[#787A91] bg-opacity-20 rounded-2xl rsm:rounded-lg">
                        <Image
                            src={
                                "https:" +
                                data.fields.featureImage.fields.file.url
                            }
                            width={
                                data.fields.featureImage.fields.file.details
                                    .image.width
                            }
                            height={
                                data.fields.featureImage.fields.file.details
                                    .image.height
                            }
                            alt="Feature Image"
                            className="rounded-lg rounded-b-none rsm:rounded w-[100vw]"
                        />
                    </div>
                </OnLoadWrapperAnimate>
            </section>

            <OnLoadWrapperAnimate delay={0.4}>
                <section className="flex flex-col items-center">
                    <LargeHeading size="md" className="mt-[5rem] mb-5">
                        More about the project.
                    </LargeHeading>
                    <Paragraph className="mb-10 max-w-[500px]" align="center">
                        {data.fields.descriptions}
                    </Paragraph>
                    <div className="grid grid-cols-1 gap-6 rsm:grid-cols-1 w-full bg-[#787A91] bg-opacity-20 lg:p-16 p-10 rsm:p-3 rsm:gap-3 rounded-2xl">
                        {data.fields.imageTiles.map((item: any, i: number) => (
                            <Image
                                key={i}
                                src={"https:" + item.fields.file.url}
                                width={item.fields.file.details.image.width}
                                height={item.fields.file.details.image.height}
                                alt="image"
                                className="w-full rounded-lg"
                            />
                        ))}
                    </div>
                </section>

                <div className="h-fit flex justify-center gap-4 rsm:flex-col rsm:items-center mt-6">
                    {data.fields.links ? (
                        <>
                            {data.fields.links.github ? (
                                <PressedWrapperAnimate>
                                    <Link
                                        href={`${data.fields.links.github}`}
                                        target="_blank"
                                    >
                                        <Button className="text-sm bg-white rsm:w-fit">
                                            View Code
                                            <Icons.Github
                                                className="ml-2"
                                                size={20}
                                                color="#00164F"
                                            />
                                        </Button>
                                    </Link>
                                </PressedWrapperAnimate>
                            ) : null}

                            {data.fields.links.external ? (
                                <PressedWrapperAnimate>
                                    <Link
                                        href={`${
                                            data.fields.links.external ?? null
                                        }`}
                                        target="_blank"
                                    >
                                        <Button className="text-sm">
                                            Visit Site
                                            <Icons.ExternalLink
                                                className="ml-2"
                                                size={16}
                                            />
                                        </Button>
                                    </Link>
                                </PressedWrapperAnimate>
                            ) : null}
                        </>
                    ) : null}
                </div>
            </OnLoadWrapperAnimate>
        </>
    );
}
