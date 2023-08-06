import Paragraph from "@/ui/Paragraph";
import LargeHeading from "@/ui/LargeHeading";
import React from "react";
import { createClient } from "contentful";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Icons from "@/components/Icons";
import FallingWrapper from "@/components/OnLoadWrapperAnimate";

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
];

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
            <FallingWrapper>
                <LargeHeading className="mb-5">All Projects.</LargeHeading>
            </FallingWrapper>

            <FallingWrapper delay={0.05}>
                <Paragraph className="mb-10">
                    Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor
                    sit amet <br className="rsm:hidden" /> consectetur ipsum
                    dolor sit amet consectetur.
                </Paragraph>
            </FallingWrapper>

            <FallingWrapper delay={0.4}>
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
                                        >
                                            <Icons.github />
                                        </Link>
                                    ) : null}

                                    {item.fields.links.external ? (
                                        <Link
                                            className="m-1"
                                            href={item.fields.links.external}
                                            target="_blank"
                                        >
                                            <Icons.ExternalLink />
                                        </Link>
                                    ) : null}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </FallingWrapper>
        </>
    );
}
