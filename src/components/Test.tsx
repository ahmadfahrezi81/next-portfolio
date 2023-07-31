"use client";

import React, { useEffect, useState } from "react";
import { Crisp } from "crisp-sdk-web";

function Test() {
    const [isClosed, setIsClosed] = useState(true);

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
            <button onClick={handleClick}>Hello</button>
        </>
    );
}

export default Test;
