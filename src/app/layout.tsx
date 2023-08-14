import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/Toast";
import { Analytics } from "@vercel/analytics/react";

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
                    rel="apple-touch-icon-precomposed"
                    sizes="57x57"
                    href="/favicon/apple-touch-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="114x114"
                    href="/favicon/apple-touch-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="72x72"
                    href="/favicon/apple-touch-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="144x144"
                    href="apple-touch-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="60x60"
                    href="/favicon/apple-touch-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="120x120"
                    href="/favicon/apple-touch-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="76x76"
                    href="/favicon/apple-touch-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="152x152"
                    href="/favicon/apple-touch-icon-152x152.png"
                />
                <meta name="application-name" content="&nbsp;" />
                <meta name="msapplication-TileColor" content="#FFFFFF" />
                <meta
                    name="msapplication-TileImage"
                    content="/favicon/mstile-144x144.png"
                />
                <meta
                    name="msapplication-square70x70logo"
                    content="/favicon/mstile-70x70.png"
                />
                <meta
                    name="msapplication-square150x150logo"
                    content="/favicon/mstile-150x150.png"
                />
                <meta
                    name="msapplication-wide310x150logo"
                    content="/favicon/mstile-310x150.png"
                />
                <meta
                    name="msapplication-square310x310logo"
                    content="/favicon/mstile-310x310.png"
                />
            </head>
            <body
                className={`${inter.className} mx-auto max-w-[1400px] rsm:px-4 rmd:px-8 rlg:px-12 px-24 bg-gradient-to-r from-custom-blue via-[#0e347c] to-custom-blue `}
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
