import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/Toast";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ahmadfahrezi.com"),
    title: {
        default: "Ahmad Fahrezi • Web Dev & Designer",
        template: "%s | Ahmad Fahrezi",
    },
    description:
        "Ahmad Fahrezi: Crafting Excellence in Web Design and Development. Discover purposeful and visually captivating creations.",
    verification: {
        google: "google-site-verification=0xSmu3TeTPxK3uaWwvuYopyPkTl4Ig1_W80DjhVmyoI",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
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
            </head>
            <body
                className={`${inter.className} mx-auto max-w-[1400px] rsm:px-4 rmd:px-8 rlg:px-12 px-24 bg-custom-blue`}
            >
                <Navbar />

                <section className="mt-24 rsm:mt-12"> {children}</section>

                <Toaster position="bottom-right" />
                <Analytics />

                {/* <CrispWithNoSSR /> */}

                <Footer />
            </body>
        </html>
    );
}
