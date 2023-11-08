import { Button } from "../ui/button"

const Hero = () => {
    return (
        <section className="bg-[url('/images/hero-sm.png')] md:bg-[url('/images/hero.png')] h-[600px] bg-no-repeat relative bg-top ">
            <div className="flex flex-col gap-4 absolute top-[70%] md:top-[75%] left-8">
                <p className="capitalize italic text-white font-normal bodyXL ">elegance in simplicity, <br /> earth's harmony</p>
                <Button className="bg-white text-black bodyMD w-fit px-10">New In</Button>
            </div>
        </section>
    )
}

export default Hero