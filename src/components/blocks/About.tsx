
import { motion } from "motion/react"
import { MarqueeComponent } from "../ui/MarqueeComponent"
import expressJSIcon from "@/assets/icons/expressjs.svg"
import nextJSIcon from "@/assets/icons/nextjs_icon_dark.svg"
import TailwindCSSIcon from "@/assets/icons/tailwindcss.svg"
import postgresIcon from "@/assets/icons/postgresql.svg"
import nodeJSIcon from "@/assets/icons/nodejs.svg"
import { ArrowRightIcon } from "lucide-react"



function About() {
    return (
        <div className='relative min-h-screen bg-gradient-to-tl from-[#53A1E8] to-black to-60% text-white' id="about">

            <div className="flex p-5">
                <img src="https://pbs.twimg.com/profile_images/1931934848681115650/eBGhuKj5_400x400.jpg" alt="dummy" className="rounded-lg" />
                <div className="text-white z-10 px-5">

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
                    >About</motion.h1>

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


                    <a href="https://docs.google.com/document/d/1Ng3K1p5S-FM3AF5cngoX5x0GCiuV253yd41N2WRiqGs/edit?usp=sharing" className="font-asimovian underline underline-offset-2 hover:underline-offset-4 transition-all ease-linear duration-100 mt-10 flex items-center gap-0.5 group" target="_blank">View Resume


                        <ArrowRightIcon className="size-5 -rotate-45 group-hover:rotate-0 transition ease-linear duration-100" />

                    </a>
                </div>



            </div>
            <MarqueeComponent />



            <div className="absolute bottom-5 right-5 z-10 flex gap-5 items-center">
                <h1 className="text-3xl text-black font-light uppercase border-r pr-5 border-black">Tech Stack</h1>


                <img src={expressJSIcon} alt="" className="size-10" />
                <img src={nextJSIcon} alt="" className="size-10" />
                <img src={TailwindCSSIcon} alt="" className="size-10 grayscale-100 brightness-0" />
                <img src={postgresIcon} alt="" className="size-10 grayscale-100" />
                <img src={nodeJSIcon} alt="" className="size-10 grayscale-100" />
            </div>

        </div>
    )
}

export default About