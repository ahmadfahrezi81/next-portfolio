import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/Toast";
import { Analytics } from "@vercel/analytics/react";
import OnLoadWrapperAnimate from "@/components/OnLoadWrapperAnimate";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ahmad Fahrezi • Web Dev & Designer",
    description:
        "Ahmad Fahrezi: Crafting Excellence in Web Design and Development. Discover purposeful and visually captivating creations.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Fonts */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter&family=Menlo:wght@400&family=Playfair+Display:wght@400;700&display=swap"
                    rel="stylesheet"
                ></link>

                {/* icons on all devices */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />

                {/* opengraph-image*/}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Ahmad Fahrezi" />
                <meta
                    property="og:title"
                    content="Ahmad Fahrezi | Web Dev & Designer"
                />
                <meta
                    property="og:description"
                    content="Ahmad Fahrezi: Crafting Excellence in Web Design and Development. Discover purposeful and visually captivating creations."
                />
                <meta property="og:url" content="https://ahmadfahrezi.com/" />

                <meta
                    property="og:image"
                    content="https://ahmadfahrezi.com/social2.png"
                />

                <meta property="og:image:alt" content="Ahmad Fahrezi" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@a_fahrezi81" />
                <meta name="twitter:creator" content="@a_fahrezi81" />
                <meta
                    name="twitter:title"
                    content="Ahmad Fahrezi | Web Dev & Designer"
                />
                <meta
                    name="twitter:description"
                    content="Ahmad Fahrezi: Crafting Excellence in Web Design and Development. Discover purposeful and visually captivating creations."
                />
                <meta
                    name="twitter:image"
                    content="https://ahmadfahrezi.com/social2.png"
                />
            </head>
            <body
                className={`${inter.className} mx-auto max-w-[1200px] rsm:px-4 rmd:px-8 rlg:px-12 px-8 bg-custom-blue`}
            >
                <OnLoadWrapperAnimate delay={0.1}>
                    <Navbar />
                </OnLoadWrapperAnimate>

                <section className="mt-14 rsm:mt-12"> {children}</section>

                <Toaster position="bottom-right" />
                <Analytics />

                {/* <CrispWithNoSSR /> */}

                <Footer />
            </body>
        </html>
    );
}
