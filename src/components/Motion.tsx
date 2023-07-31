"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { link } from "fs";

const tabs = [
    { name: "home", link: "/", color: "#f00" },
    { name: "projects", link: "/projects", color: "#b1f" },
    { name: "about", link: "/about", color: "#f90" },
];

const duration = 0.3;

export function Motion() {
    const [selected, setSelected] = useState(0);
    const [formerColor, setFormerColor] = useState(tabs[0].color);

    return (
        <div style={containerStyle}>
            {tabs.map(({ name, link, color }, i) => (
                <motion.div
                    style={tabStyle}
                    key={i}
                    initial={{
                        color: i === selected ? "#fff" : "#222",
                    }}
                    animate={{
                        color: i === selected ? "#fff" : "#222",
                    }}
                    transition={{ duration }}
                    onTap={() => {
                        setFormerColor(tabs[selected].color);
                        setSelected(i);
                    }}
                >
                    <Link
                        href={link}
                        style={{ position: "relative", zIndex: 1 }}
                    >
                        {name}
                    </Link>
                    {/* <span style={{ position: "relative", zIndex: 1 }}>
                        {name}
                    </span> */}
                    {i === selected && (
                        <motion.div
                            style={selectionStyle}
                            layoutId="selected"
                            initial={{ backgroundColor: formerColor }}
                            animate={{ backgroundColor: color }}
                            transition={{ duration }}
                        />
                    )}
                </motion.div>
            ))}
        </div>
    );
}

const containerStyle = {
    position: "relative",
    borderRadius: 21,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 6,
    display: "flex",
    alignContent: "flex-start",
    alignItems: "start",
    justifyContent: "start",
};

const tabStyle = {
    height: 30,
    position: "relative",
    padding: "3px 15px",
    margin: 0,
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: 700,
    color: "#222",
    cursor: "pointer",
};

const selectionStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 15,
    top: 0,
    left: 0,
};
