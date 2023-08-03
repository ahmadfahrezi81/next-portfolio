"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChatWrapper = ({ children }: any) => {
    useEffect(() => {
        Crisp.configure("1bc9ab6c-97cc-456b-9e04-5f40fe659157");

        Crisp.chat.hide();
    }, []);

    const handleClick = () => {
        if (Crisp.chat.isChatOpened()) {
            Crisp.chat.close();
            Crisp.chat.hide();
        } else {
            Crisp.chat.show();
            Crisp.chat.open();
        }
    };

    return (
        <>
            <div onClick={handleClick} className="pointer w-fit">
                {children}
            </div>
            {/* <button
                className="block hover:bg-black hover:bg-opacity-20  px-4 py-2 rounded-lg"
                onClick={handleClick}
            > */}

            {/* </button> */}
        </>
    );
};

export default CrispChatWrapper;
