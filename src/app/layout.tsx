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
    icons: [
        {
            rel: "icon",
            type: "image/png",
            sizes: "48x48",
            url: "/Logo3.svg",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/Logo3.svg",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/Logo3.svg",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/Logo3.svg",
        },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
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
