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

// export async function generateMetadata({
//     params,
// }: {
//     params: {
//         slug: string;
//     };
// }) {
//     try {
//         const post = await getProject(params);
//         if (!post)
//             return {
//                 title: "Not Found",
//                 description: "The page you are looking for does not exist.",
//             };

//         return {
//             title: post.fields.title,
//             description: post.fields.descriptions,
//             alternates: {
//                 canonical: `/projects/${post.fields.slug}`,
//             },
//         };
//     } catch (error) {
//         return {
//             title: "Not Found",
//             description: "The page you are looking for does not exist.",
//         };
//     }
// }

// export async function generateStaticParams() {
//     const posts = await getAllProject();

//     if (!posts) return [];

//     return posts.map((post: any) => ({
//         slug: post.fields.slug,
//     }));
// }

interface pageProps {
    params: {
        id: string;
    };
}

// async function getAllProject() {
//     const client = createClient({
//         space: process.env.CONTENTFUL_SPACE_ID!,
//         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
//     });

//     const res = await client.getEntries({
//         content_type: "project",
//     });

//     return res.items;
// }

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
                    <Paragraph className="w-full" font={"mono"}>
                        {data.fields.location} | Built in {data.fields.year}
                    </Paragraph>
                </OnLoadWrapperAnimate>
                <OnLoadWrapperAnimate delay={0.05}>
                    <LargeHeading className="mb-2">
                        {data.fields.title}
                    </LargeHeading>
                </OnLoadWrapperAnimate>
                {/* <OnLoadWrapperAnimate delay={0.05}>
                    <Paragraph className="w-full">
                        {data.fields.location} | {data.fields.developmentTypes}{" "}
                        | {data.fields.year}
                    </Paragraph>
                </OnLoadWrapperAnimate> */}

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

                {/* <OnLoadWrapperAnimate delay={0.4}>
                    <div className="w-full lg:p-10 lg:pb-0 rlg:p-10 rlg:pb-0 rsm:p-3 mt-10 rsm:mt-5 bg-[#000] bg-opacity-30 rounded-[1.5rem] rsm:rounded-lg">
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
                </OnLoadWrapperAnimate> */}
                <OnLoadWrapperAnimate delay={0.4}>
                    <div
                        className="w-full mt-5 rsm:mt-3 rounded-[1.5rem] rsm:rounded-[0.5rem] p-2 rsm:p-1 border border-white border-opacity-50 bg-black bg-opacity-40
                    "
                    >
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
                            className="rounded-[1rem] rsm:rounded-[0.2rem] w-[100vw]"
                        />
                    </div>
                </OnLoadWrapperAnimate>
            </section>

            <OnLoadWrapperAnimate delay={0.4}>
                <div className="h-fit flex justify-center gap-4 rsm:flex-col rsm:items-center mt-[2rem]">
                    {data.fields.links ? (
                        <>
                            {data.fields.links.github ? (
                                <PressedWrapperAnimate>
                                    <Link
                                        href={`${data.fields.links.github}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
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
                                        rel="noopener noreferrer"
                                    >
                                        <Button className="text-sm ">
                                            Visit Site
                                            <Icons.ExternalLink
                                                className="ml-2"
                                                size={16}
                                                color="#00164F"
                                            />
                                        </Button>
                                    </Link>
                                </PressedWrapperAnimate>
                            ) : null}
                        </>
                    ) : null}
                </div>
                <section className="flex flex-col items-center">
                    <LargeHeading size="md" className="mt-[6rem]">
                        About the project.
                    </LargeHeading>
                    <Paragraph
                        className="max-w-[700px] mt-3 rsm:mt-1"
                        align="center"
                    >
                        {data.fields.descriptions}
                    </Paragraph>
                    <div className="grid grid-cols-1 gap-4 rsm:gap-2 rsm:grid-cols-1 w-full mt-6 rsm:mt-4 p-2 rsm:p-1  rounded-[1.5rem] rsm:rounded-[0.5rem] bg-black bg-opacity-40">
                        {data.fields.imageTiles.map((item: any, i: number) => (
                            <Image
                                key={i}
                                src={"https:" + item.fields.file.url}
                                width={item.fields.file.details.image.width}
                                height={item.fields.file.details.image.height}
                                alt="image"
                                className="w-full rounded-[1rem] rsm:rounded-[0.2rem]"
                            />
                            // <div key={i}>
                            //     <Image
                            //         src={"https:" + item.fields.file.url}
                            //         width={item.fields.file.details.image.width}
                            //         height={
                            //             item.fields.file.details.image.height
                            //         }
                            //         alt="image"
                            //         className="w-full rounded-[1rem] rsm:rounded-[0.2rem]"
                            //     />
                            //     {i < data.fields.imageTiles.length - 1 && (
                            //         <div className="mt-4 border-t border-custom-accent-yellow"></div> // This is the divider
                            //     )}
                            // </div>
                        ))}
                    </div>
                    {/* <div className="grid grid-cols-1 gap-10 rsm:grid-cols-1 w-full bg-[#000] bg-opacity-30 lg:p-10 p-10 rsm:p-3 rsm:gap-3 rounded-[1.5rem] mt-[2rem]">
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
                    </div> */}
                </section>
            </OnLoadWrapperAnimate>
        </>
    );
}
