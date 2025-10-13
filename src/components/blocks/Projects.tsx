import ProjectsCard from "../ui/ProjectsCard"


const projects = [
    {
        title: "Larnity",
        description: "Create communities in a website, enjoy you company.",
        image: "https://placehold.co/600x400"
    },
    {
        title: "Farmneed",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam quod recusandae. Exercitationem iure deserunt nesciunt, temporibus eaque beatae obcaecati!",
        image: "https://placehold.co/600x400"
    },
    {
        title: "Crewlinkr",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam quod recusandae. Exercitationem iure deserunt nesciunt, temporibus eaque beatae obcaecati!",
        image: "https://placehold.co/600x400"
    },
    {
        title: "Crewlinkr",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam quod recusandae. Exercitationem iure deserunt nesciunt, temporibus eaque beatae obcaecati!",
        image: "https://placehold.co/600x400"
    },
    {
        title: "Crewlinkr",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam quod recusandae. Exercitationem iure deserunt nesciunt, temporibus eaque beatae obcaecati!",
        image: "https://placehold.co/600x400"
    },
    {
        title: "Crewlinkr",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam quod recusandae. Exercitationem iure deserunt nesciunt, temporibus eaque beatae obcaecati!",
        image: "https://placehold.co/600x400"
    },
    {
        title: "Crewlinkr",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam quod recusandae. Exercitationem iure deserunt nesciunt, temporibus eaque beatae obcaecati!",
        image: "https://placehold.co/600x400"
    },
    {
        title: "Crewlinkr",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam quod recusandae. Exercitationem iure deserunt nesciunt, temporibus eaque beatae obcaecati!",
        image: "https://placehold.co/600x400"
    },
    {
        title: "Crewlinkr",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam quod recusandae. Exercitationem iure deserunt nesciunt, temporibus eaque beatae obcaecati!",
        image: "https://placehold.co/600x400"
    },
]


function Projects() {
    return (
        <div className="min-h-screen min-w-screen bg-gradient-to-tr from-[#53A1E8] to-black to-60% text-white pt-20">



            <div className="grid grid-cols-3 gap-3 max-w-6xl mx-auto">
                {
                    projects.map((project, index) => {


                        return (

                            <div key={index} className={index % 2 === 0 ? 'col-span-2' : 'col-span-1'}>
                                <ProjectsCard title={project.title} description={project.description} image={project.image} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects