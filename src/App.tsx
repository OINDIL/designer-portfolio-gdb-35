import ReactLenis from "lenis/react"
import Hero from "./components/blocks/Hero"
import About from "./components/blocks/About"
import Projects from "./components/blocks/Projects"

function App() {
  return (
    <div className="font-urbanist max-w-[1900px]">
      <ReactLenis root options={{ lerp: 1, duration: 2, orientation: "horizontal" }} className="overflow-x-scroll">
        <div className="flex">
          <Hero />
          <About />
          <Projects />
        </div>
      </ReactLenis>
    </div>

  )
}

export default App