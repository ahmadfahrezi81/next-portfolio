"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Crisp } from "crisp-sdk-web";
import Image from "next/image";
import Icons from "@/components/Icons";

function Test() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {/* {loading ? (
                <div
                    role="status"
                    className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
                >
                    <div className="flex items-center justify-center w-[500px] h-[500px] bg-gray-300 rounded">
                        <svg
                            className="w-10 h-10 text-gray-200 dark:text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                        >
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                </div>
            ) : (
                <Image
                    onLoad={() => setLoading(false)}
                    src="https://images.unsplash.com/photo-1690802029151-60c464079267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
                    width={500}
                    height={500}
                    alt="monkey"
                />
            )} */}
            {/* <div style={{ position: "relative" }}>
                {isLoading && <div> Loading... </div>}

                <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
                    <Image
                        src="https://images.unsplash.com/photo-1690802029151-60c464079267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlDHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
                        width={500}
                        height={500}
                        alt="Monkey Image"
                        onLoad={() => setIsLoading(false)}
                    />
                </div>
            </div> */}

            <Image
                src="https://images.unsplash.com/photo-1690802029151-60c464079267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
                width={500}
                height={500}
                alt="Monkey Image"
            />
        </>
    );
}

export default Test;
