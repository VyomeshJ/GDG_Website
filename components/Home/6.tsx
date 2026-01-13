import Image from "next/image";

export default function Six(){
    return(
        <div className="flex flex-col items-center justify-center rounded">
            <h2 className="font-bold text-center text-black text-7xl mb-10">
                Our Trailer
            </h2>
            <div className="rounded-3xl overflow-hidden w-[80vw] md:w-[50vw] h-[50vh] mb-20">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/j2jVBNEXx0Y"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    )
}