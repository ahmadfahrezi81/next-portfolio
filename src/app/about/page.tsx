import Paragraph from "@/ui/Paragraph";
import LargeHeading from "@/ui/LargeHeading";
import Link from "next/link";
import React from "react";
import TestScroll from "@/components/TestScroll";
import { motion } from "framer-motion";

export default function page() {
    return (
        <>
            <LargeHeading>Hi. I&apos;m Ahmad.</LargeHeading>
            <section>
                <div>Image</div>
                <LargeHeading size="sm">
                    Full Stack Develper and Designer
                </LargeHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur. Tortor tellus tempor
                    ligula nisl fames sagittis. Cursus lacinia quis fusce quis
                    cras hendrerit ac. Mus sodales ut porttitor cras ac amet
                    maecenas ultricies.
                </Paragraph>
            </section>
            <section className="flex flex-col items-center">
                <LargeHeading>Technology so far.</LargeHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor
                    sit amet consectetur ipsum dolor sit amet consectetur.
                </Paragraph>
                <div>Cool all Technology animation moving</div>
                <TestScroll />
            </section>

            <section>
                <LargeHeading>Resume.</LargeHeading>
                <Link href="/resume.pdf" target="_blank">
                    View Resume
                </Link>
            </section>
        </>
    );
}
