import { ArrowRightIcon } from "lucide-react"
import { motion } from "motion/react"

const larnityImages = [
    "https://placehold.co/700x500",
    "https://placehold.co/700x500",
    "https://placehold.co/700x500",
]

function Projects_2() {
    return (
        <div className="min-h-screen min-w-[115vw] bg-gradient-to-tl from-[#e6e853] to-black to-60% text-white pt-20 relative">
            <div className="absolute text-white top-20 left-5 z-10">
                <motion.h1 className="text-9xl font-bold uppercase font-bbh"
                    initial={{
                        opacity: 0,
                        x: 50
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}

                    transition={{
                        duration: 1,
                        ease: "easeIn"
                    }}
                >Crewlinkr</motion.h1>

                <motion.p className="text-white z-10 text-xl"


                    initial={{
                        opacity: 0,
                        x: 50
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}

                    transition={{
                        duration: 1.5,
                        ease: "easeIn"
                    }}

                >Build your own crew with ease. ✅
                </motion.p>

            </div>


            <div className="flex gap-5 mt-42 ml-8">
                {larnityImages.map((item, index) => (
                    <img src={item} alt={item} key={index} className="rounded-lg shadow-lg" />
                ))}
            </div>

            <div className="absolute bottom-5 right-5 z-10">
                <a href="https://larnity.com" target="_blank" className="text-6xl group flex items-center">See Live
                    <ArrowRightIcon className="size-20 -rotate-45 group-hover:rotate-0 transition ease-linear duration-100" />
                </a>
            </div>
        </div>
    )
}

export default Projects_2