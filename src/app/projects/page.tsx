import Paragraph from "@/ui/Paragraph";
import LargeHeading from "@/ui/LargeHeading";
import React from "react";
import { createClient } from "contentful";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Icons from "@/components/Icons";
import OnLoadWrapperAnimate from "@/components/OnLoadWrapperAnimate";

async function getData() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });

    const res = await client.getEntries({
        content_type: "archive",
        order: ["-fields.year", "-sys.createdAt"],
    });

    return res.items;
}

export default async function page() {
    const data = await getData();

    return (
        <>
            <OnLoadWrapperAnimate>
                <LargeHeading className="mb-5">All Projects.</LargeHeading>
            </OnLoadWrapperAnimate>

            <OnLoadWrapperAnimate delay={0.05}>
                <Paragraph className="mb-10">
                    Feel welcome to explore the complete archive of notable
                    projects. <br className="rsm:hidden" /> Freely dive into any
                    of them for further exploration.
                </Paragraph>
                {/* <Paragraph className="mb-10">
                    Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor
                    sit amet <br className="rsm:hidden" /> consectetur ipsum
                    dolor sit amet consectetur.
                </Paragraph> */}
            </OnLoadWrapperAnimate>

            <OnLoadWrapperAnimate delay={0.4}>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Year</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead className="rxl:hidden">
                                Made at
                            </TableHead>
                            <TableHead className="rmd:hidden">
                                Built with
                            </TableHead>
                            <TableHead className="rsm:hidden">Links</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item: any) => (
                            <TableRow key={item.sys.id}>
                                <TableCell>{item.fields.year}</TableCell>
                                <TableCell>{item.fields.title}</TableCell>
                                <TableCell className="rxl:hidden">
                                    {item.fields.location}
                                </TableCell>
                                <TableCell className="rmd:hidden">
                                    {item.fields.techStack.map(
                                        (item: string, i: number) => (
                                            <span
                                                key={i}
                                                className="inline-block bg-black m-1 p-2 px-3 bg-opacity-30 rounded-full"
                                            >
                                                {item}
                                            </span>
                                        )
                                    )}
                                </TableCell>
                                <TableCell className=" pl-6">
                                    {item.fields.links.github ? (
                                        <Link
                                            className="m-1 w-fit"
                                            href={item.fields.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icons.github />
                                        </Link>
                                    ) : null}

                                    {item.fields.links.external ? (
                                        <Link
                                            className="m-1"
                                            href={item.fields.links.external}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icons.ExternalLink />
                                        </Link>
                                    ) : null}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </OnLoadWrapperAnimate>
        </>
    );
}
