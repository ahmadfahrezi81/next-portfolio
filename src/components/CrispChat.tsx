"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("1bc9ab6c-97cc-456b-9e04-5f40fe659157");

        Crisp.chat.hide();
    });

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
            <button onClick={handleClick}>Contact</button>
        </>
    );
};

export default CrispChat;
