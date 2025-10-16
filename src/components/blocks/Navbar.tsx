function Navbar() {
    return (
        <nav className="flex justify-between items-center p-5 fixed top-0 z-50 w-full text-white backdrop-blur-3xl border-b border-white/10 shadow">
            <span className="font-bbh text-2xl">OGDEV</span>
            <div className="flex gap-4 font-bbh text-xl">
                {["About", "Projects", "Contact"].map((item, index) => (
                    <a href={`#${item.toLowerCase()}`} key={index} className="hover:underline transition-all ease-linear duration-100">{item}</a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar