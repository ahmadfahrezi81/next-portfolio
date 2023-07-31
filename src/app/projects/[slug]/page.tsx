import Paragraph from "@/ui/Paragraph";
import LargeHeading from "@/ui/LargeHeading";
import Link from "next/link";
import React from "react";

export default function page() {
    return (
        <>
            <LargeHeading>TOST</LargeHeading>
            <Paragraph>Web Application • Next.JS Development • 2023</Paragraph>
            <Paragraph>HTML • CSS • JS • etc</Paragraph>

            <section>
                <LargeHeading size="sm">Sometype of subtitle</LargeHeading>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur. Tortor tellus tempor
                    ligula nisl fames sagittis. Cursus lacinia quis fusce quis
                    cras hendrerit ac. Lorem ipsum dolor sit amet consectetur.
                    Tortor tellus tempor ligula nisl fames sagittis. Cursus
                    lacinia quis fusce quis cras hendrerit ac. Lorem ipsum dolor
                    sit amet consectetur. Tortor tellus tempor ligula nisl fames
                    sagittis. Cursus lacinia quis fusce quis cras hendrerit ac.
                </Paragraph>
                <div>all the picture</div>
            </section>
        </>
    );
}
