import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    const currentDate = new Date();
    return(
        <div className="bg-[#041F25] w-full h-40 md:h-30 flex justify-between items-center p-1">
            <h3 className="hidden md:block font-KD px-5 text-xl">
                <b>Copyright © {currentDate.getFullYear()} UoA Game Developer Guild</b>
            </h3>
            <div className="w-30 h-30 md:hidden px-5">
                <Image 
                    src="/icons/LOGO_PLAIN.png"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain -translate-y-1"
                />
            </div>

            <div className="flex flex-col justify-center gap-2">
                <div className="px-8 flex flex-row justify-end">
                    {[
                        { href: "https://www.facebook.com/UoAGDG/", src: "/icons/Socials/fb.png" },
                        { href: "https://drive.google.com/drive/folders/1kHfv8UXbKuWpPqWyolEuCuUhauK3m11E", src: "/icons/Socials/drive.png" },
                        { href: "https://www.instagram.com/uoagdg/", src: "/icons/Socials/insta.png" },
                        { href: "https://www.youtube.com/channel/UCiwPc3JSk--DZmBnUDP4eeg", src: "/icons/Socials/yt.png" },
                        { href: "https://x.com/UoAGDG", src: "/icons/Socials/twitter.png" },
                    ].map((item, i) => (
                        <Link key={i} href={item.href}>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10">
                                <Image
                                    src={item.src}
                                    alt=""
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="px-10 flex flex-row justify-end gap-2">
                    <div className="w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6">
                        <Image 
                            src="/icons/Socials/phone.png"
                            alt=""
                            width={1000}
                            height={1000}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <a href="tel:+6402041129013" className="font-bold text-xl">
                        020 4112 9013
                    </a>
                </div>
                <div className="px-10 flex flex-row justify-center gap-2">
                    <div className="w-8 h-8">
                        <Image 
                            src="/icons/Socials/email.png"
                            alt=""
                            width={1000}
                            height={1000}
                            className="w-full h-full object-contain -translate-y-1"
                        />
                    </div>
                    <a href="mailto:hello@example.com" className="font-bold text-xl">
                        council@uoagdg.com
                    </a>
                </div>
            </div>
            

        </div>
    )
}