import github from "@/assets/icons/github_light.svg"
import linkedin from "@/assets/icons/linkedin.svg"
import instagram from "@/assets/icons/instagram.svg"
import twitter from "@/assets/icons/x.svg"
import gmail from "@/assets/icons/gmail.svg"



const icons = [
    github,
    linkedin,
    instagram,
    twitter,
    gmail,
]

function ContactMe() {
    return (
        <div className="min-w-screen bg-gradient-to-bl from-fuchsia-500 to-black to-60% text-white pt-20 relative flex gap-10 items-center justify-center">
            <img src="https://pbs.twimg.com/profile_images/1931934848681115650/eBGhuKj5_400x400.jpg" alt="logo" className="rounded-xl border-8 border-fuchsia-900" />

            <div>
                <h1 className="text-9xl font-bold uppercase">
                    <span className="bg-gradient-to-t from-fuchsia-500 from-40% to-fuchsia-300 text-transparent bg-clip-text">@</span>
                    OINDIL_DEV</h1>
                <p className="text-white z-10 text-xl ml-2">I am a web developer who is passionate about creating beautiful and functional websites. 🧑🏻‍🔬</p>


                <div className="flex gap-14 mt-14">
                    {
                        icons.map((icon, index) => (
                            <img src={icon} alt="icon" key={index} className="size-10 grayscale brightness-100 invert ml-2" />
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

export default ContactMe