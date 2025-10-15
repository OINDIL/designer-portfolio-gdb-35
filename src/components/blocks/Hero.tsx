import { Component as Background } from "../ui/raycast-animated-blue-background"
import { motion } from "motion/react"

function Hero() {
    return (

        <div className="relative min-h-screen">
            <div className="absolute text-white top-5 left-5 z-10">
                <motion.h1 className="text-9xl font-bold uppercase"
                    initial={{
                        opacity: 0,
                        y: 50
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}

                    transition={{
                        duration: 1,
                        ease: "easeIn"
                    }}
                >Oindil</motion.h1>

                <motion.p className="text-white z-10 max-w-md font-asimovian"


                    initial={{
                        opacity: 0,
                        y: 50
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}

                    transition={{
                        duration: 1.5,
                        ease: "easeIn"
                    }}

                >I am a web developer who is passionate about creating beautiful and functional websites. I am a skilled developer who is passionate about creating beautiful and functional websites. I am a skilled developer who is passionate about creating beautiful and functional websites.
                </motion.p>

            </div>

            <motion.h1
                className="absolute text-white bottom-5 right-5 z-10 text-9xl font-bold uppercase"
                initial={{
                    opacity: 0,
                    y: 50
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}

                transition={{
                    duration: 3,
                    ease: "easeIn"
                }}
            >
                Dev
            </motion.h1>

            <Background />
        </div>

    )
}

export default Hero