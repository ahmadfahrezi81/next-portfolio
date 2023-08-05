"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// export default function TestFramer() {
//     return (
//         <>
//             <motion.div
//                 className="w-[20rem] h-[20rem] bg-white cursor-pointer p-2"
//                 whileHover={{ y: -10 }}
//             >
//                 <motion.div
//                     className="w-full h-20 bg-blue-400 mt-10"
//                     whileHover={{ y: 10 }}
//                     transition={{
//                         delay: 0.1,
//                         duration: 0.2,
//                     }}
//                 >
//                     hello
//                 </motion.div>
//             </motion.div>
//         </>
//     );
// }
export default function TestFramer() {
    const [onHover, setOnHover] = useState(false);

    return (
        <>
            <div
                onMouseEnter={() => {
                    setOnHover(true);
                }}
                onMouseLeave={() => {
                    setOnHover(false);
                }}
            >
                {onHover ? (
                    <motion.div
                        className="w-[20rem] h-[20rem] bg-white cursor-pointer p-2"
                        animate={{ y: -40 }}
                        transition={{
                            delay: 0.1,
                            duration: 0.2,
                        }}
                    >
                        <motion.div
                            className="w-full h-20 bg-blue-400 mt-10"
                            animate={{ y: 30 }}
                            transition={{
                                delay: 0.1,
                                duration: 0.4,
                            }}
                        >
                            hello
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        className="w-[20rem] h-[20rem] bg-white cursor-pointer p-2"
                        // animate={{ y: -40 }}
                        // transition={{
                        //     delay: 0.1,
                        //     duration: 0.2,
                        // }}
                    >
                        <motion.div
                            className="w-full h-20 bg-blue-400 mt-10"
                            // animate={{ y: 30 }}
                            // transition={{
                            //     delay: 0.1,
                            //     duration: 0.4,
                            // }}
                        >
                            hello
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </>
    );
}
