import Paragraph from "@/ui/Paragraph";
import LargeHeading from "@/ui/LargeHeading";
import Link from "next/link";
import React from "react";
import { createClient } from "contentful";
import Image from "next/image";

interface pageProps {
    params: {
        id: string;
    };
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

    console.log("data :", data);

    return (
        <>
            <section>
                <LargeHeading>{data.fields.title}</LargeHeading>
                <Paragraph>
                    {data.fields.location} • {data.fields.developmentTypes}•
                    {data.fields.year}
                </Paragraph>
                <Paragraph>
                    {data.fields.techStack.map((item: string, i: number) => (
                        <span key={i}>
                            {item}{" "}
                            {i !== data.fields.techStack.length - 1 && " • "}
                        </span>
                    ))}
                </Paragraph>
                <Image
                    src={"https:" + data.fields.featureImage.fields.file.url}
                    width={
                        data.fields.featureImage.fields.file.details.image.width
                    }
                    height={
                        data.fields.featureImage.fields.file.details.image
                            .height
                    }
                    alt="he"
                />
            </section>

            <section>
                <LargeHeading size="sm">More about the project.</LargeHeading>
                <Paragraph>{data.fields.descriptions}</Paragraph>
                {data.fields.imageTiles.map((item: any, i: number) => (
                    <Image
                        key={i}
                        src={"https:" + item.fields.file.url}
                        width={item.fields.file.details.image.width}
                        height={item.fields.file.details.image.height}
                        alt="he"
                    />
                ))}
            </section>
        </>
    );
}
