import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/Toast";
import { Analytics } from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ahmad Fahrezi • Web Dev & Designer",
    description: "Ahmad Fahrezi Portfolio Site",
};

// const CrispWithNoSSR = dynamic(() => import("../components/CrispChat"));

const AnimatedCursor = dynamic(() => import("react-animated-cursor"));

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
