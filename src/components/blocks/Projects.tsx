import Projects_1 from './projects/Project-1'
import Projects_2 from './projects/Project-2'
import Projects_3 from './projects/Project-3'

function Projects() {
    return (
        <div className='flex'>
            <Projects_1 />
            <Projects_2 />
            <Projects_3 />
        </div>
    )
}

export default Projects