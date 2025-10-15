import { truncateStr } from "@/lib/utils"
import { ArrowRightIcon } from "lucide-react"

interface ProjectsCardProps {
    title: string
    description: string
    image: string
}

function ProjectsCard({ title, description, image }: ProjectsCardProps) {
    return (
        <div className={`border border-neutral-800 p-3 rounded-lg backdrop-blur-3xl space-y-4 hover:scale-105 transition ease-linear duration-100 h-full`}>
            <img src={image} alt={title} className="rounded-lg w-full h-56 object-cover" />

            <div>
                <h1 className="text-xl font-semibold">{title}</h1>
                <p className="text-base text-white/60">{truncateStr(description)}</p>
            </div>

            <a href="https://docs.google.com/document/d/1Ng3K1p5S-FM3AF5cngoX5x0GCiuV253yd41N2WRiqGs/edit?usp=sharing" className="font-asimovian underline underline-offset-2 hover:underline-offset-4 transition-all ease-linear duration-100 flex items-center gap-0.5 group" target="_blank">View Resume


                <ArrowRightIcon className="size-5 -rotate-45 group-hover:rotate-0 transition ease-linear duration-100" />

            </a>
        </div>
    )
}

export default ProjectsCard