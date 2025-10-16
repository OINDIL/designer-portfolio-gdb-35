import { Component as Background } from "../ui/raycast-animated-blue-background"
import { motion } from "motion/react"

function Hero() {
    return (

        <div className="relative min-h-screen">
            <div className="absolute text-white top-20 left-5 z-10">
                <motion.h1 className="text-9xl font-bold uppercase font-bbh"
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
                >O<span className="bg-gradient-to-t from-[#53A1E8] from-40% to-[#53A1E8]/0 text-transparent bg-clip-text">i</span>ndil</motion.h1>

                <motion.p className="text-white z-10 max-w-4xl font-sans"
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

                >I am a web developer who is passionate about creating beautiful and functional websites.
                </motion.p>
            </div>

            <motion.h1
                className="absolute text-white bottom-5 right-5 z-10 text-9xl font-bold uppercase font-bbh"
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
                <span className="bg-gradient-to-t from-[#53A1E8] from-40% to-[#53A1E8]/0 text-transparent bg-clip-text">D</span>ev
            </motion.h1>

            <Background />
        </div>

    )
}

export default Hero